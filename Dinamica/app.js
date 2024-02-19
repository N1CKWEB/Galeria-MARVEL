const h1=document.createElement("h1");

h1.textContent="Holaa";

h1.innerHTML="Hola";


document.querySelector(".scrooling-buttons-left-active").addEventListener("click", ()=> {
    window.location.href = 'index.html';
});

document.querySelector(".scrooling-buttons-right-active").addEventListener("click", ()=> {

    window.location.href="index2.html";

});