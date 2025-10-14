setTimeout( function(){ 

  let validator = $('#form_banner, #form_newsletter, #form_anuncie').jbvalidator({
      errorMessage: true,
      successClass: true,
      language: "assets/js/ptbr.json"
  });

  validator.validator.custom = function(el, event){

  let element = $(el);

  if(element.is('[name=fullname]')){
      if(element.val().length < 3){
          return 'Seu nome está muito pequeno.';
      }

      let nomeFullSplit = element.val().trim().split(" ");

      if (nomeFullSplit.length < 2) {
          return "Por favor, preencha seu nome completo.";
      }

      let fullname = element.val().trim();

      var padrao = /[^a-zà-ú ]/gi;

      var valida_nome = fullname.match(padrao);

      if( valida_nome ){
          return "O nome completo possui caracteres inválidos ou vazio";
      }
  }

  //EMAIL
    if(element.is('[name=email]')){
        if (!validateEmail(element.val())) {
        return 'Preencha um e-mail válido';
        }  
    }
  }

  validator.reload();

}  , 100 );
  
/*submit post form cadastro*/
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('#form_banner, #form_newsletter')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {

          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
          
/*             let ipuser = '';
            $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
               function(json) {
                ipuser = json.ip;
               }
              );
  */
             var settings = {
                 "url": "https://api.bigdates.com.br:3010/lead",
                 "method": "POST",
                 "timeout": 0,
                 "headers": {
                   "Content-Type": "application/json"
                 },
                 "data": JSON.stringify({
                   "nome": document.querySelector('#'+form.id+' [name="fullname"]').value,
                   "email": document.querySelector('#'+form.id+' [name="email"]').value,
                   "source": 'Cybermonday Newsletter',
                   "system": 'Cybermonday Newsletter',
                   "url_form":window.location.href
                 }),
               };

               $.ajax(settings).done(function (response) {
                $('#'+form.id+' .btn-submit').attr('disabled',true);
                  if(!response.error){
                    $('#'+form.id+' .msg-success').html(response.message).removeClass('d-none');
                  }else{
                    $('#'+form.id+' .msg-error').removeClass('d-none');
                  }
               });
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();

/*submit post form anuncie*/
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('#form_anuncie')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {

          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{

            
/*             let ipuser = '';
            $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
               function(json) {
                ipuser = json.ip;
               }
              ); */
 
             var settings = {
                 "url": "https://api.bigdates.com.br:3010/message",
                 "method": "POST",
                 "timeout": 0,
                 "headers": {
                   "Content-Type": "application/json"
                 },
                 data: JSON.stringify({
                  contactsfirstname: document.querySelector('[name="fullname"]').value,
                  contactsemail: document.querySelector('[name="email"]').value,
                  contactssubject: document.querySelector('[name="company"]').value,
                  contactsmessage: document.querySelector('[name="message"]').value,
                  contactssystem: 'Cybermonday Anuncie',
                  contactssource: 'Cybermonday Anuncie',
                  url:window.location.href
                 }),
               };
               
               $.ajax(settings).done(function (response) {
                $('#form_anuncie .btn-submit').attr('disabled',true);
                 if(!response.error){
                  $('#form_anuncie .msg-success').html(response.message).removeClass('d-none');
                }else{
                  $('#form_anuncie .msg-error').removeClass('d-none');
                }
               });
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();
   
   //START - EMAIL
   function validateEmail(email) {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     return re.test(String(email).toLowerCase())
   }
   //END - EMAIL

   //START - IP
   function getIp(){
    
        $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
         function(json) {
          return json.ip;
         }
        );
   }
   //END - IP
   