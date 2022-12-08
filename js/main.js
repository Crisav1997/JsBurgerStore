let stock= document.getElementById("stock")
let pedir=document.getElementById("pedir")
let out=document.getElementById("out")
let id=document.getElementById("id")
let pan=document.getElementById("pan")
let carne=document.getElementById("carne")
let cheddar=document.getElementById("cheddar")
let cebolla=document.getElementById("cebolla")
let crear=document.getElementById("inner")
let crear2=document.getElementById("inner2")
let btn2=document.getElementById("btn2")
let iniciado=0;
let almacen=[]
let almacenLS=JSON.parse(localStorage.getItem("Almacen"))
if(almacenLS){
    almacen=almacenLS
  }
  else{
    iniciado=1;
  }
function limpiar(){
  pan.value=""
  carne.value=""
  id.value=""
  cheddar.value=""
  cebolla.value=""
}
out.addEventListener("click",salir)
    function salir(){
    window.location="../index.html"
    }
  crearHtml(almacen) 
stock.addEventListener("click",verStock)
function verStock(){
    class box{
        constructor(id,pan,carne,cheddar,cebolla){
            this.id=id;
            this.pan=pan;
            this.carne=carne;
            this.cheddar=cheddar;
            this.cebolla=cebolla;
        }
    } 
    let idB=id.value 
    let panB=pan.value
    let carneB=carne.value
    let cheddarB=cheddar.value
    let cebollaB=cebolla.value;
    let boxes=localStorage.getItem("Almacen")
    let boxesJson=JSON.parse(boxes)
    let flag=0;
    if(iniciado==1){boxesJson=[]}
    for(let i=0;i<boxesJson.length;i++){
        if(boxesJson[i].id==idB){
            flag=1;
        }
    }
    if(flag==1){
      Toastify({
        text: "BOX ya cargada",
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
    const nuevaBox=new box(idB,panB,carneB,cheddarB,cebollaB)
    almacen.push(nuevaBox)
    const almacenJSON=JSON.stringify(almacen)
    localStorage.setItem("Almacen",almacenJSON)
    }
    guardarLS(almacen)
    limpiar()
    crearHtml(almacen) 
  }
  function guardarLS(arr) {
    localStorage.setItem("Almacen", JSON.stringify(arr));
  }
  function crearHtml(arr) {
    crear.innerHTML = "";
    let html = "";
    for (const item of arr) {
          html =`<tr>
            <th scope="row">${item.id}</th>
            <td>${item.pan}</td>
            <td>${item.carne}</td>
            <td>${item.cheddar}</td>
            <td>${item.cebolla}</td>
            <td><button class="btn btn-danger"id="${item.id}"> Borrar </button></td>
            </tr>
          `
    crear.innerHTML += html;
    }
    const arrayBotones = document.querySelectorAll('td .btn');
    arrayBotones.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        almacen= almacen.filter(el=>el.id != btn.id);
        guardarLS(almacen);
        crearHtml(almacen)
      })
    })
  }
   let mostrar;
   const VerHamburguesa=()=>{
     return new Promise((resolve)=>{
      btn2.addEventListener("click",()=>{
        mostrar=true
        resolve("Veni a retirar");
       })
       })}
 VerHamburguesa(mostrar)
   .then((response)=>{
    fetch('../data/data.json')
   .then((response)=>response.json())
   .then((data=>{
     crear2.innerHTML = "";
     data.forEach(datos=>{
       html =`<div class="card text-center mt-2 mb-2 " style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">${datos.nombre}</h5>
         <p class="card-text">Precio:${datos.Precio} </p>
         <p class="card-text">Popularidad:  ${datos.Popularidad} </p>
         <p class="card-text">Carnes: ${datos.Carnes} </p>
         <p class="card-text">Cheddar: ${datos.Cheddar} </p>
       </div>
     </div>`
       crear2.innerHTML += html;
     })
   }))
   }).catch((err)=>{
     alert(err);
   }).finally(()=>{
   });
