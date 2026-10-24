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
        // if(Prix.value>0){
            Recettes.push({
            id: Recettes.length+1 ,
            nom : nomPlat.value ,
            categore : categore.value,
            Prix : Prix.value,
            badge : badge.value,

            })
             nomPlat.value="";
        // } 
        afficher();
     console.log(Recettes);
    }
    
   
})
const liste=document.getElementById("liste");
const vide=document.getElementById("vide");
function afficher(){
    liste.innerHTML="";
    vide.classList.toggle("hidden",Recettes.length>0);
    Recettes.forEach(function(r){
        liste.innerHTML+=`
        <div class="bg-[#e6d9d9] p-4 rounded-md max-w-[99%] px-2 mb-8">
        <div class=" ">
          <div class="flex justify-between"><h3 class="bg-[#90cacf] px-2 py-1 rounded-full">${r.nom}</h3><span class="bg-[#90cacf] px-2 py-1 rounded-full">${r.Prix} <spane>"DH"</spane></span></div>
        </div>
        <div class="mt-4">
          <span class="bg-[#ababab] px-2 py-1 text-sm rounded-full">${r.categore}</span>
          <span class="bg-[#90cacf] px-2 py-1 rounded-full">${r.badge}</span>
        </div>
        <div class="mt-2">
          <span class="mr-4 text-lime-700"><button>Modifier</button></span><span class="text-rose-700"><button>Supprimer</button></span>
        </div>
        </div>`
    })
}






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





