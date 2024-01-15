const target = document.querySelector('.row');

//MILESTONE 0 creo il mio array
const society = [
    /* troviamo il nome, la posizone occupata e immagine profilo di una determinata persona */
    {   
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
        img:'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        position: 'Chief Editor ',
        img:'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        position: 'Office Manager',
        img:'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        position: 'Social Media Manager',
        img:'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        position: 'Developer',
        img:'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        img:'barbara-ramos-graphic-designer.jpg',
    }
    
]

// MILESTONE 1 stampiamo in console
console.log(society);

// MILESTONE 2 stampare sul DOM
// BONUS 2 stampa la foto relativa alla persona
// BONUS 3 inserisci all'interno delle carte
let messange ='';

for(let i = 0 ; i < society.length; i++){
    messange += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="img/${society[i].img}" class="card-img-top" alt="profile image ${society[i].name}">
                <div class="card-body">
                    <p class="card-text">${society[i].name}</p>
                </div>
            </div>
        </div>
    `
}

target.innerHTML = messange;
