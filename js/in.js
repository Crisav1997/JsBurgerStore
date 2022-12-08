const contraseña= document.getElementById("contra");
const nombre= document.getElementById("nombre");
const btn= document.getElementById("btnEnviar");
const newU=document.getElementById("newUsuario")
const form = document.querySelector('form');
const users =[]
form.addEventListener('submit', e => e.preventDefault());

btn.addEventListener("click",runStorage)
function runStorage(){
    let buscar=nombre.value;
    let contrasena=contraseña.value
    let users1=localStorage.getItem("Usuario")
    let usersJson=JSON.parse(users1)
    let flag=0;
    usersJson.forEach(element => {
        if((element.usuario==buscar)&&(element.contraseña==contrasena))  {
            flag=1;
            window.location="register.html";           
        }});
if (flag==1){}
else{
    Toastify({
        text: "Usuario y/o contraseña incorrecta",
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
}

