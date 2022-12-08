const contraseña= document.getElementById("contra");
const nombre= document.getElementById("nombre");
const btn= document.getElementById("btnEnviar");
const newU=document.getElementById("newUsuario")
const form = document.querySelector('form');
let iniciado=0;
let users =[]
let userInLS=JSON.parse(localStorage.getItem("Usuario"))
if(userInLS){
    users=userInLS
  }
  else{
    iniciado=1;
  }
form.addEventListener('submit', e => e.preventDefault());
newU.addEventListener("click",crearUsuario)
function crearUsuario(){
    class usuario{
        constructor(usuario,contraseña){
            this.usuario=usuario;
            this.contraseña=contraseña;
        }
    } 
    let buscar=nombre.value;
    let users1=localStorage.getItem("Usuario")
    let usersJson=JSON.parse(users1)
    let flag=0;
    if(iniciado==1){usersJson=[]}   
    for(let i=0;i<usersJson.length;i++){
        if(usersJson[i].usuario==buscar){
        flag=1;
        }
    }
    if(flag==1){
        Toastify({
            text: "Nombre de usuario ocupado!!",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center", 
            stopOnFocus: true,
            style: {
              background: "red",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    else{
        const usuario1=new usuario(nombre.value,contraseña.value);
         users.push(usuario1);
        const usuarioJson=JSON.stringify(users)
        localStorage.setItem("Usuario",usuarioJson)
        Toastify({
            text: "Registro Exitoso",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center", 
            stopOnFocus: true,
            style: {
              background: "lightgreen",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          setTimeout(()=>{
            window.location="pages/ident.html";
          },3000)
    }
}


