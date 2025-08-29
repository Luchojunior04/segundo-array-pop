                

const userName = document.getElementById("userName")
const Password = document.getElementById("Password")

const SignInBtn = document.getElementById("SignInBtn")
SignInBtn.addEventListener("click", function(){
    
    if(userName.value === usurarioContra){
       alert("Vales pan")
       alert(Password.value) 
    }
    
    
    
    //console.log(userName.value)
    //console.log(Password.value)
});

//function ingresarElemento(){
  //  console.log(userName.value)

//}


const usurarioContra = "Luis junior"
const contraseñaCorrecta = "admin"