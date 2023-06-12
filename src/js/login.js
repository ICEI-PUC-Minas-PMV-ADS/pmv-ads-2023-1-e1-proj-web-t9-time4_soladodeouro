const InputSenha = document.querySelector("#senha")
const InputEmail = document.querySelector("#email")
const btnLogin = document.querySelector ("#btnLogin")

function entrar(e) {
    desativaBtnEntrar();
    e.preventDefault();
    // console.log(e)
    let listaUser = []

    let contaValid = {
        email: '',
        senha: ''
    }

    if (InputEmail.value === "" && InputSenha.value === "") {
        alert("Insira os dados de Login");
        return
    }

    listaUser = JSON.parse(localStorage.getItem("listaUser"))
    
    listaUser.forEach ((item) => {
        if(email.value == item.emailCad && senha.value == item.senhaCad){
            contaValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    })

    if (email.value == contaValid.email && senha.value == contaValid.senha){
        InputEmail.setAttribute ("style", "box-shadow: 0px 0px 3px green; border-color: green")
        InputSenha.setAttribute ("style", "box-shadow: 0px 0px 3px green; border-color: green")
        // msgEntrar.setAttribute ("style", "display: block; text-shadow: 0px 0px 1px green; color: green")
        // msgEntrar.textContent = "Login efetuado com sucesso, redirecionando..."
        
        // let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        // localStorage.setItem("token", token)
        


        setTimeout(()=>{
            window.location.href = "finalizar.html"
        }, 1000)

    } else {
            InputEmail.setAttribute ("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
            InputSenha.setAttribute ("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
            // msgEntrar.setAttribute ("style", "display: block; text-shadow: 0px 0px 1px crimson; color: crimson")
            // msgEntrar.textContent = "Email ou senha incorretos."
            InputEmail.focus()
    }
}
document.getElementById("btnLogin").addEventListener("click", entrar);



function desativaBtnEntrar() {
    InputEmail.addEventListener("keyup", ()=> {
        
        if(InputEmail.value.length >= 1){
            btnLogin.setAttribute("style", "display: block; animation: up 1s")
        } else {
            btnLogin.setAttribute("style", "display: none")
        }
    })
}
