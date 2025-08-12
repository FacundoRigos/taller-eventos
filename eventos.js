function Saludar(){
    alert("Hola!")
};


function soyElDiv(){
    if (event.target === div){
        alert("Hola! Soy el div");
    }
};

let div = document.querySelector("div");

div.addEventListener("click", soyElDiv);
