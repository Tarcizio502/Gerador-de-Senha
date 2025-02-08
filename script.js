       
     let sliderElment = document.querySelector("#slider");  
     let buttonElemnt = document.querySelector("#button-cta");   
     
     let sizePassword = document.querySelector("#valor");  
     let password = document.querySelector("#password");    
     
     let caixaPassword = document.querySelector("#caixa-password");  

       let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,;:!@#+=-"  
       let novaSenha = "";  
        
       sizePassword.innerHTML = sliderElment.value;  

         slider.oninput = function(){   
          sizePassword.innerHTML = this.value;   
        }  

            function generatePassword(){  
                       
              let pass = "";  

              for(let i = 0, n = charset.length; i < sliderElment.value; ++i){  
                pass += charset.charAt(Math.floor(Math.random() * n));
              }  
  
              caixaPassword.classList.remove("hide");

                password.innerHTML = pass;  
                novaSenha = pass;
            }  

            function copyPassword(){  
                    alert("Senha copiada com sucesso!")
                    navigator.clipboard.writeText(novaSenha);
                  }
               
                       
                  
                
                       