(function() {
  
  const contactForm = document.getElementById('contact');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  contactForm.addEventListener('submit', function() {


    // Constantes que receberão o valor atual de cada campo do formulário:
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;


    // Aqui eu crio uma variável que irá conter os nomes dos campos que não forem preenchidos:
    var resultString = '';


    // #############################################################
    // ### Acabei decidindo não utilizar a propriedade "length", ###
    // ### já que a "value" era mais que suficiente.             ###
    // #############################################################

    // const nameLength = nameValue.length;

   
    // Primeiramente eu checo se todos os campos foram preenchidos:
    if (nameValue != '' && emailValue != '' && messageValue != '') {

      // Nesse caso, o usuário recebe uma mensagem de que o formulário foi enviado com sucesso:
      window.alert(`Muito bem! Formulário enviado com sucesso!`);

    // A segunda opção é para o caso de algum dos campos estar vazio:
    } else {

      // Primeiramente é checado se o primeiro campo, "Nome", está vazio ou não.
      // No caso de estar, é adicionada a palavra "Nome" à variável que será apresentada ao usuário.
      if (nameValue == '') {
        resultString = resultString + 'Nome';
      }


      // A partir daqui segue a mesma lógica do "if" anterior, com a diferença de verificar se já existe outro campo ou não.
      // Esse segunda verificação serve apenas para deixar o resultado mais bem legível.
      if (emailValue == '') {
        if (resultString == '') {
            resultString = resultString + 'Email';
        } else {
            resultString = resultString + ', Email';  
        }        
      }

      if (messageValue == '') {
        if (resultString == '') {
            resultString = resultString + 'Mensagem';
        } else {
            resultString = resultString + ', Mensagem';  
        }
      }

      // Por fim, é apresentado ao usuário uma mensagem com os campos que estão faltando:
      window.alert(`Por favor, preencha os seguintes campos: ` + resultString + '.');

    }


  });
})();
