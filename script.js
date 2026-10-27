const modal = document.getElementById("modal");
const ajouter = document.getElementById("ajoute");
const annule = document.getElementById("annule");
const annuler = document.getElementById("annuler");
const enrejste = document.getElementById("enrejste");
const Recettes = [
    { id: 1, nom: "Tajine poulet", categorie: "Plat prisipale", prix: 35, badge: "Classique" , plore:false },
    { id: 2, nom: "Couscous", categorie: "Plat prisipale", prix: 40, badge: "Classique" , plore:false},
    { id: 3, nom: "Harira", categorie: "Entrée", prix: 10, badge: "Classique" , plore:false},
    { id: 4, nom: "Salade marocaine", categorie: "Entrée", prix: 12, badge: "Bio" , plore:false},
    { id: 5, nom: "Pastilla", categorie: "Plat prisipale", prix: 45, badge: "Classique" , plore:false},
    { id: 6, nom: "Chebakia", categorie: "Dessert", prix: 8, badge: "Classique" , plore:false},
    { id: 7, nom: "Zaalouk", categorie: "Entrée", prix: 11, badge: "Vegeratiy" , plore:false},
    { id: 8, nom: "Tajine légumes", categorie: "Plat prisipale", prix: 30, badge: "Vegeratiy" , plore:false},
    { id: 9, nom: "Salade de fruits", categorie: "Dessert", prix: 10, badge: "Bio" , plore:false},
    { id: 10, nom: "Sellou", categorie: "Dessert", prix: 9, badge: "Classique" , plore:false}
];
const nomPlat = document.getElementById("nomPlat");
const categore = document.getElementById("categore");
const Prix = document.getElementById("Prix");
const badge = document.getElementById("badge");
let valide = 0;
const nbplats = document.getElementById("nbplats");

function ouvrirModal() {
    nomPlat.value = "";
    Prix.value = "";
    categore.value = "";
    erreurNom.value = "";
    erreurCategorie.value = "";
    erreurPrix.value = "";
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    nomPlat.value = "";
    Prix.value = "";
}
function fermerModal() {
    modal.classList.remove("flex");
    modal.classList.add("hidden")
}

const regexNom = /^[A-Za-zÀ-ÿ '\-]{3,30}$/;
const regexPrix = /^\d+$/;


const erreurNom = document.getElementById("erreurNom");
const erreurCategorie = document.getElementById("erreurCategorie");
const erreurPrix = document.getElementById("erreurPrix");

function enrejstevalide() {
    if (nomvalide() && categorievalide() && prixvalide()) {
        enrejste.disabled = false;
        return true;

    } else {
        enrejste.disabled = true;
        return false
    }
}

function nomvalide() {
    if (regexNom.test(nomPlat.value.trim())) {
        erreurNom.textContent = "";
        return true;
    } else {
        erreurNom.textContent = " entre un nom entre 3 et 30 caracter .";
        return false;
    }
}

function categorievalide() {
    if (categore.value != "") {
        erreurCategorie.textContent = "";
        return true;
    } else {
        erreurCategorie.textContent = " entre un nom entre 3 et 30 caracter .";
        return false;
    }
}

function prixvalide() {
    if (regexPrix.test(Prix.value.trim()) && Number(Prix.value) > 0) {
        erreurPrix.textContent = "";
        return true;
    } else {
        erreurPrix.textContent = " entre un nom entre 3 et 30 caracter .";
        return false;
    }
}
nomPlat.addEventListener("input", function () {
    nomvalide();
    enrejstevalide();
})
categore.addEventListener("change", function () {
    categorievalide();
    enrejstevalide();
})
Prix.addEventListener("input", function () {
    prixvalide();
    enrejstevalide();
});

ajouter.addEventListener("click", ouvrirModal);

modal.addEventListener("click", function (e) {
    if (e.target.id === "modal" || e.target.id === "annule" || e.target.id === "annuler") {
        valide = 0;
        fermerModal();
    }
    if (e.target.id === "enrejste" && enrejstevalide()) {
        if (valide) {
            Recettes.forEach(function (r) {
                if (r.id === valide) {
                    r.id = valide
                    r.nom = nomPlat.value
                    r.categorie = categore.value
                    r.prix = Number(Prix.value)
                    r.badge = badge.value
                }
            })
            valide = 0;
        } else {
            Recettes.push({
                id: Date.now(),
                nom: nomPlat.value,
                categorie: categore.value,
                prix: Number(Prix.value),
                badge: badge.value,
            })
        }
        nomPlat.value = "";
        Prix.value = "";
        afficher();
        fermerModal();
        // console.log(Recettes);
    }
})
const liste = document.getElementById("liste");
const vide = document.getElementById("vide");
function afficher() {
    liste.innerHTML = "";
    vide.classList.toggle("hidden", Recettes.length > 0);
    Recettes.forEach(function (r) {
        liste.innerHTML += `
        <div  class="flex flex-col relative bg-[#e6d9d9] p-4 rounded-md w-full  px-2 mb-8 disabled ">
        <div class="flex justify-between ">
          <h3 class="bg-[#90cacf] px-2 py-1 rounded-full">${r.nom}</h3>
          <span class="bg-[#90cacf] px-2 py-1 rounded-full">${r.prix} <span>DH</span>
        </div>
        <div class="mt-4">
          <span class="bg-[#ababab] px-2 py-1 text-sm rounded-full">${r.categorie}</span>
          <span class="bg-[#90cacf] px-2 py-1 rounded-full">${r.badge}</span>
        </div>
        <div class="mt-2">
          <span class="mr-4 text-lime-700"><button data-action="modifier" data-id="${r.id}" >Modifier</button>
          </span><span  class="text-rose-700"><button data-action="supprimer" data-id="${r.id}">Supprimer</button>
        </div>
         ${r.plore===true ? `<div class="bg-red-600 flex justify-center items-center h-full w-full absolute right-0 top-0 opacity-30"></div>` :""}
        </div>`
    })
    nbplats.textContent = Recettes.length;
}
liste.addEventListener("click", function (e) {
    //     liste.addEventListener("click", function(e){
    //     console.log(e.target.dataset.action);
    //     console.log(e.target.dataset.id);
    // });
    Recettes.forEach(function (r, cont) {
        if (e.target.dataset.action === "supprimer") {
            if (Number(e.target.dataset.id) === r.id) {
                if (confirm("Voulez-vous vraiment supprimer cette recette ?")) {
                    Recettes.splice(cont, 1)
                }
            }
        }
        if (e.target.dataset.action === "modifier") {
            if (Number(e.target.dataset.id) === r.id) {
                ouvrirModal();
                valide = r.id;
                nomPlat.value = r.nom;
                categore.value = r.categorie;
                Prix.value = r.prix;
                badge.value = r.badge;


            }
        }
    })
    afficher();
})
afficher()

modal.classList.add("hidden")

const Entree = document.querySelectorAll(".Entree");
const plat = document.querySelectorAll(".plat")
const dess = document.querySelectorAll(".dess")
function option(){
    Recettes.forEach((r) => {
    plat.innerHTML="";
    Entree.innerHTML="";
    dess.innerHTML="";
    if (r.categorie === "Plat prisipale"&&r.plore===false) {
        plat.forEach((s) => {
            s.innerHTML += `
        <option value="${r.id}">${r.nom}</option>
        `;
        afficher()
        })
    }
    if (r.categorie === "Entrée"&& r.plore===false) {
        Entree.forEach((s) => {
        s.innerHTML += `
        <option value="${r.id}">${r.nom}</option>
        `;

        });
    } 
    if (r.categorie === "Dessert") {
        dess.forEach((s) => {
            s.innerHTML += `
        <option value="${r.id}">${r.nom}</option>
        `});
    }
    })
}

option();

Entree.forEach((r)=>{
    r.addEventListener('change', function (e) {
        Recettes.forEach((s)=>{
            if(Number(e.target.value)===s.id){
                s.plore=true;
                option();

                afficher();
            }
            

        })
})
})
plat.forEach((r)=>{
    r.addEventListener('change', function (e) {
        Recettes.forEach((s)=>{
            if(Number(e.target.value)===s.id){
                s.i=true

            }
        })     
})
})
dess.forEach((r)=>{
    r.addEventListener('change', function (e) {  
        Recettes.forEach((s)=>{
            if(Number(e.target.value)===s.id){

            }
        })
})
})




// Entree.appendChild(div)



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
//   

