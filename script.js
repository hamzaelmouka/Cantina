const modal=document.getElementById("modal");
const ajouter=document.getElementById("ajoute");
const annule=document.getElementById("annule");
const annuler=document.getElementById("annuler");
const enrejste=document.getElementById("enrejste");
const Recettes=[];
const nomPlat=document.getElementById("nomPlat");
const categore=document.getElementById("categore");
const Prix=document.getElementById("Prix");
const badge=document.getElementById("badge");

function ouvrirModal(){
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}
function fermerModal(){
    modal.classList.remove("flex");
    modal.classList.add("hidden")
}
ajouter.addEventListener("click",ouvrirModal);
modal.addEventListener("click",function(e){
    if(e.target.id==="modal" || e.target.id==="annule"||e.target.id==="annuler"){
        fermerModal();
        
    }
    if(e.target.id==="enrejste"){
        // if(){
        //     Recettes.push({
        //     id: Recettes.length+1 ,
        //     nom : nomPlat.value ,
        //     categore : categore.value,
        //     Prix : Prix.value,
        //     badge : badge.value,

        //     })
        // } 
        console.log(Recettes);
    }
    
})





// const sorter=document.getElementById("sorte")
// ajouter.addEventListener("click",function(){
//     modal.classList.remove("hidden");
//     modal.classList.add("flex");
// });
// annule.addEventListener("click",function(){
//     modal.classList.remove("flex");
//     modal.classList.add("hidden")
// });
// annuler.addEventListener("click",function(){
//     modal.classList.remove("flex");
//     modal.classList.add("hidden")
// });
// // sorter.addEventListener("click",function(){
// //     modal.classList.remove("flex");
// //     modal.classList.add("hidden")
// // })
// modal.addEventListener("click",function(){
//      modal.classList.remove("flex");
//     modal.classList.add("hidden")
// })





