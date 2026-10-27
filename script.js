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
const bd=document.getElementById("dh");
let a=0;
const DH1=document.getElementById("DH1");
const DH2=document.getElementById("DH2");
const DH3=document.getElementById("DH3");
const DH4=document.getElementById("DH4");
const DH5=document.getElementById("DH5");
let b=0;
function ouvrirModal() {
    nomPlat.value = "";
    Prix.value = "";
    categore.value = "";
    erreurNom.textContent = "";
    erreurCategorie.textContent = "";
    erreurPrix.textContent = "";
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    enrejste.disabled=true;
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
        erreurCategorie.textContent = " entre un choix de categorie .";
        return false;
    }
}

function prixvalide() {
    if (regexPrix.test(Prix.value.trim()) && Number(Prix.value) > 0) {
        erreurPrix.textContent = "";
        return true;
    } else {
        erreurPrix.textContent = " entre en prix de resset positive .";
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
                plore:false,
            })
        }
        valide=0;
        nomPlat.value = "";
        Prix.value = "";
        afficher();
        optionEntree();
        optiondess();
        optionplat();
        fermerModal();
    
    }
})
const liste = document.getElementById("liste");
const vide = document.getElementById("vide");
function afficher() {
    dh.textContent=0;
    dh.textContent=a;
    DH1.textContent=a;
    DH2.textContent=a;
    DH3.textContent=a;
    DH4.textContent=a;
    DH5.textContent=a;
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
          <span class=" hover:text-amber-400 mr-4 text-lime-700"><button  data-action="modifier" data-id="${r.id}" >Modifier</button>
          </span><span  class="hover:text-amber-400 text-rose-700"><button data-action="supprimer" data-id="${r.id}">Supprimer</button>
        </div>
         ${r.plore===true ? `<div class=" bg-red-600 flex justify-center items-center h-full w-full absolute right-0 top-0 opacity-30"></div>` :""}
        </div>`
    })
    nbplats.textContent = Recettes.length;
}
liste.addEventListener("click", function (e) {
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

function optionplat(){
    plat.forEach((s) => {
        const choise=s.value
        s.innerHTML =`<option value="">En reserve</option>`;
    Recettes.forEach((r) => {
    if (r.categorie === "Plat prisipale"&&(r.plore===false||String(r.id)===choise)) {
            s.innerHTML += `
        <option value="${r.id}">${r.nom}</option>
        `;
        }
    })
    s.value=choise;
    })
}
optionplat();
function optionEntree(){
    Entree.forEach((s) => {
        const choise=s.value;
        s.innerHTML =`<option value="">En reserve</option>`;
    Recettes.forEach((r) => {
    if (r.categorie === "Entrée"&&( r.plore===false|| String(r.id)===choise)) {
        s.innerHTML += `
        <option value="${r.id}">${r.nom}</option>
        `;
    }
    })
    s.value=choise 
});
}
optionEntree();
function optiondess(){
    dess.forEach((s) => {
        const choise=s.value
        s.innerHTML =`<option value="">En reserve</option>`;
      
    Recettes.forEach((r) => {
    if (r.categorie === "Dessert"&&(r.plore===false||String(r.id)===choise)) {
        
            s.innerHTML += `
        <option value="${r.id}">${r.nom}</option>
        `}
    })
    s.value=choise
})
}
optiondess();
afficher();
Entree.forEach((r)=>{
    let cont=0;
    r.addEventListener('change', function (e) {
        Recettes.forEach((s)=>{
            if(Number(e.target.value)===s.id){
                a+=s.prix
                s.plore=true;
                optionEntree();
                afficher();   
            }
        })
        if(cont==0){
            
        }
})
})
plat.forEach((r)=>{
    r.addEventListener('change', function (e) {
        Recettes.forEach((s)=>{
            if(Number(e.target.value)===s.id){
                a+=s.prix
                s.plore=true;
                optionplat();
                afficher();
            }
        })     
})
})
dess.forEach((r)=>{
    r.addEventListener('change', function (e) {  
        Recettes.forEach((s)=>{
            if(Number(e.target.value)===s.id){
                s.plore=true;
                a+=s.prix
                optiondess();
                afficher();
            }
        })
})
})




