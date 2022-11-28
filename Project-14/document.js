const docx = require('docx');

const styles = new docx.Styles();
styles.createParagraphStyle('Heading1', 'Heading 1')
    .basedOn("Normal")
    .next("Normal")
    .quickFormat()
    .size(28)
    .bold()
    .italics()
    .spacing({after: 120});

styles.createParagraphStyle('Heading2', 'Heading 2')
    .basedOn("Normal")
    .next("Normal")
    .quickFormat()
    .size(26)
    .bold()
    .underline('double', 'FF0000')
    .spacing({before: 240, after: 120});

styles.createParagraphStyle('aside', 'Aside')
    .basedOn('Normal')
    .next('Normal')
    .color('999999')
    .italics()
    .indent(720)
    .spacing({line: 276});

styles.createParagraphStyle('wellSpaced', 'Well Spaced')
    .basedOn('Normal')
    .spacing({line: 276, before: 20 * 72 * .1, after: 20 * 72 * .05});

styles.createParagraphStyle('ListParagraph', 'List Paragraph')
    .quickFormat()
    .basedOn('Normal');


const numbering = new docx.Numbering();
const numberedAbstract = numbering.createAbstractNumbering();
numberedAbstract.createLevel(0, "lowerLetter", "%1)", "left");

const doc = new docx.Document({
    creator: 'Clippy',
    title: 'Sample Document',
    description: 'A brief example of using docx',
});

doc.createParagraph('Test heading1, bold and italicized').heading1();
doc.createParagraph('Some simple content');
doc.createParagraph('Test heading2 with double red underline').heading2();

const letterNumbering = numbering.createConcreteNumbering(numberedAbstract);
['Option1', 'Option 2', 'Option 3'].forEach((opt) =>
    doc.createParagraph(opt).setNumbering(letterNumbering, 0)
);

doc.createParagraph()
    .createTextRun('Some monospaced content')
    .font('Monospace');

doc.createParagraph('An aside, in light gray italics and indented').style('aside');
doc.createParagraph('This is normal, but well-spaced text').style('wellSpaced');
doc.createParagraph('This is normal');


const exporter = new docx.LocalPacker(doc, styles, undefined, numbering);
exporter.pack('test.docx');