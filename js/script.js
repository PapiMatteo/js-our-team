// DATI

const teamMembers = [
    {
        name  : "Wayne Barnett",
        role  : "Founder & CEO",
        image : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name  : "Angela Caroll",
        role  : "Chief Editor",
        image : "img/angela-caroll-chief-editor.jpg"
    },
    {
        name  : "Walter Gordon",
        role  : "Office Manager",
        image : "img/walter-gordon-office-manager.jpg"
    },
    {
        name  : "Angela Lopez",
        role  : "Social Media Manager",
        image : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name  : "Scott Estrada",
        role  : "Developer",
        image : "img/scott-estrada-developer.jpg"
    },
    {
        name  : "Barbara Ramos",
        role  : "Graphic Designer",
        image : "img/barbara-ramos-graphic-designer.jpg"
    },
];

// STAMPARE IN CONSOLE LE INFORMAZIONI DEGLI OGGETTI e nel DOM come stringa

// const listElem = document.querySelector("ul");
// let elemStr    = "";

for (let i = 0; i < teamMembers.length; i++) {
    const curMember = teamMembers[i];
    // elemStr += `<li>`
    for (let key in curMember){
        console.log(key, curMember[key]);
        // elemStr += `<p>${curMember[key]}</p>`
    }
    // elemStr += `</li>`
}

// listElem.innerHTML = elemStr

// INSERIRE IN PAGINA SOTTO FORMA DI CARD 

const rowElem = document.querySelector(".row");
let memberElems = "";

for (let i = 0; i < teamMembers.length; i++) {
    const curMember = teamMembers[i];
    memberElems += `<div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src=${curMember.image} class="card-img-top">
                            <div class="card-body">
                            <h5 class="card-title">${curMember.name}</h5>
                            <p class="card-text">${curMember.role}</p>
                            </div>
                        </div>
                    </div>`
}

rowElem.innerHTML = memberElems