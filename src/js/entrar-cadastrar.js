// Labels
const labelNome = document.querySelector("#labelNome")
const labelEmail = document.querySelector("#labelEmail")
const labelData = document.querySelector("#labelData")
const labelSenhaCadastro = document.querySelector("#labelSenhaCadastro")
const labelConfirmarSenha = document.querySelector("#labelConfirmarSenha")



// Inputs
const inputNome = document.querySelector("#nomeCadastro")
const inputData = document.querySelector("#dataCadastro")
const inputEmailCadastro = document.querySelector("#emailCadastro")
const inputSenhaCadastro = document.querySelector("#senhaCadastro")
const inputConfirmarSenha = document.querySelector("#confirmarSenha")

const btnCadastrar = document.querySelector("#btnCadastrar")




// Validações
let validNome = false;
let validData = false;
let validEmail = false;
let validSenhaCadastro = false;
let validConfirmarSenha = false;


function validacaoInputs () { 

function validarEmail() {
    let email = inputEmailCadastro.value;
    if (email.search('@') != -1 && email.search('.com') != -1) {
            validEmail = true;
    }
    validEmail = false;
}
validarEmail();
        // Validação Nome

        inputNome.addEventListener("keyup", ()=>{

            if(inputNome.value.length <= 7){
                labelNome.textContent = "Nome Insira seu nome e sobrenome"
                labelNome.setAttribute("style" , "text-shadow: 0px 0px 1px #700707; color: #700707")
                inputNome.setAttribute("style", "box-shadow: 0px 0px 3px #700707; border-color: #700707")
                validNome = false
            } else {
                labelNome.textContent = ""
                labelNome.setAttribute("style" , "text-shadow: 0px 0px 1px green; color: green")
                inputNome.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green" )
                validNome = true
            }

            if(inputNome.value.length > 30){
                inputNome.setAttribute("style", "box-shadow: 0px 0px 1px #700707; border-color: #700707")
                validNome = false
            } 
        })


        //Validação Email 

        inputEmailCadastro.addEventListener("keyup", ()=>{

            if(!inputEmailCadastro.checkValidity()){
                labelEmail.textContent = "Email Este email não é válido"
                labelEmail.setAttribute("style" , "text-shadow: 0px 0px 1px #700707; color: #700707")
                inputEmailCadastro.setAttribute("style", "box-shadow: 0px 0px 3px #700707; border-color: #700707")
                validEmail = false
            } else {
                labelEmail.textContent = ""
                labelEmail.setAttribute("style" , "text-shadow: 0px 0px 1px green; color: green")
                inputEmailCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
                validEmail = true
            }

        })

        // Validação Senha 

        inputSenhaCadastro.addEventListener("keyup", ()=>{

            if(inputSenhaCadastro.value.length <= 5){
                labelSenhaCadastro.textContent = "Senha Insira no mínimo 6 dígitos"
                labelSenhaCadastro.setAttribute("style" , "text-shadow: 0px 0px 1px #700707; color: #700707")
                inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px #700707; border-color: #700707" )

                validSenhaCadastro = false
            } else {
                labelSenhaCadastro.textContent = ""
                labelSenhaCadastro.setAttribute("style" , "text-shadow: 0px 0px 1px green; color: green")
                inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green" )
                validSenhaCadastro = true 

            }
        })

        // Validação Confirmar Senha
        
        inputSenhaCadastro.addEventListener("keyup", () => {

            if(inputSenhaCadastro.value != inputConfirmarSenha.value) {
                inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px #700707; border-color: #700707")
                inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px #700707; border-color: #700707")
                labelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px #700707; color: #700707")
                labelConfirmarSenha.textContent = "Confirmar a senha* Deve ser igual a senha."
                validSenhaCadastro = false
            } else {
                inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
                inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
                labelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px green; color: green")
                labelConfirmarSenha.textContent = "Confirmar a senha"
                validSenhaCadastro = true
            }
        })


        inputConfirmarSenha.addEventListener("keyup", () => {

            if(inputConfirmarSenha.value != inputSenhaCadastro.value){
                inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px #700707; border-color: #700707")
                inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px #700707; border-color: #700707")
                labelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px #700707; color: #700707")
                labelConfirmarSenha.textContent = "Confirmar a senha* Deve ser igual a senha."
                validConfirmarSenha = false
            } else {
                inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
                inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
                labelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px green; color: green")
                labelConfirmarSenha.textContent = ""
                validConfirmarSenha = true
            }
        })

        // Validação Data

        inputData.addEventListener("keyup", () =>{
            validaData();
        })

        function validaData(){

            var data = document.getElementById("dataCadastro").value; // pega o valor do input
            data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
            var data_array = data.split("-"); // quebra a data em array

            // para o IE onde será inserido no formato dd/MM/yyyy
            if(data_array[0].length != 4){
                 data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonto a data no formato yyyy/MM/dd
                }

            // compara as datas e calcula a idade
            var hoje = new Date();
            var nasc  = new Date(data);
            var idade = hoje.getFullYear() - nasc.getFullYear();
            var m = hoje.getMonth() - nasc.getMonth();
            if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())){ 
            } idade --

            if(idade < 20 || idade > 80){
                labelData.textContent = "Data de Nasc. * Você precisa ter entre 20 a 60 anos"
                labelData.setAttribute("style" , "text-shadow: 0px 0px 1px #700707; color: #700707")
                inputData.setAttribute("style", "box-shadow: 0px 0px 3px #700707; border-color: #700707")
                validData = false
            } else {
                labelData.textContent = ""
                labelData.setAttribute("style" , "text-shadow: 0px 0px 1px green; color: green")
                inputData.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
                validData = true
            }
        }
        

    }
validacaoInputs();





btnCadastrar.addEventListener("click", cadastrar)

function cadastrar (e) {
    e.preventDefault();


    if (validNome && validData && validEmail && validConfirmarSenha) {
        // let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

        let listaUser = [];
        listaUser.push (
            {
                nomeCad: nomeCadastro.value,
                dataCad: dataCadastro.value,
                emailCad: emailCadastro.value,
                senhaCad: senhaCadastro.value
            }
        )

        localStorage.setItem("listaUser", JSON.stringify(listaUser));
        
        setTimeout(()=>{
            window.location.href = "login.html"
            console.log("deu certo!")
        }, 1000)
    }
}


