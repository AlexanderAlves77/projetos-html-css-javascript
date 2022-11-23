$(function() {
  $('#tempo').mask('00:00')
  $('#data').mask('00/00/0000')

  $('#activity-form').submit(function (event) {
    event.preventDefault()
  }).validate({
    rules: {
      nome: { required: true },
      tempo: { required: true, number: true },
      data: { required: true }
    },
    submitHandler: function(form) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro realizado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        $('#name').val('')
        $('#tempo').val('')
        $('#data').val('')
      })
    }
  })
})