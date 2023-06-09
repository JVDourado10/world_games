$(document).ready(function(){
  $('#telefone').mask('(00) 00000-0000')

  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      mensagem: {
        required: true
      },
    },
    messages: {
      nome: 'Por favor, insira o seu nome',
      email: 'Por favor, insira um email valido',
      mensagem: 'Você precisa digitar uma mensagem para enviar o formulário'
    },
    sumitHandler: function(form) {
      alert('Formulário enviado com sucesso!')
    },
    invalidHandler: function(evento, validador) {
      let camposIncorretos = validador.numberOfInvalids()
      if(camposIncorretos){
        alert(`Existem ${camposIncorretos} campos incorretos`)
      }
    }
  })
})