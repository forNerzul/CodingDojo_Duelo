class Card {
    constructor(name,cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name,cost,power,resilence){
        super(name,cost);
        this.resilence = resilence;
        this.power = power;
    }
    attack(target){
        target.resilence -= this.power;
    }
    showStats(){
        console.log(`Name: ${this.name}, Cost: ${this.cost}, Power: ${this.power}, Resilence: ${this.resilence}`);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) { 
            if(this.stat == "resilence"){
                target.resilence += this.magnitude;
            }
            else if(this.stat == "power"){
                target.power += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

let card1 = new Unit("Ninja Cinturon Rojo",3,3,4);
let card2 = new Unit("Ninja Cinturon Negro",4,5,4);

let card3 = new Effect("Algoritmo Dificil",2,"aumentar la resistencia del objetivo en 3","resilence",3);
let card4 = new Effect("Promesa no manejada",1,"reduce la resistencia del objetivo en 2","resilence",-2);
let card5 = new Effect("Programacion en pareja",3,"aumentar el poder del objetivo en 2","power",2);

let unitCards = [card1, card2];
let effectCards = [card3, card4, card5]; 

function drawCards(cards) {
    let indexa = 0;
    let indexb = 0;
    for (let card in cards) {
        if (cards[card] instanceof Unit) {
            indexa++;
            console.log(`Unit: ${cards[card].name} - Cost: ${cards[card].cost} - Power: ${cards[card].power} - Resilence: ${cards[card].resilence}`);
            document.getElementById("unit-cards").innerHTML += (`

                <div class="unit-card" id="card${indexa}">
                    <div class="unit-card-header">
                        <i class="fa-solid fa-people-group"></i>
                        <h2 class="card-name">${cards[card].name}</h2>
                        <div class="card-cost">
                            <i class="fa-regular fa-gem"></i>
                            <span>${cards[card].cost}</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card-image">
                            <img src="./assets/img/red-belt-ninja.png" alt="a red belt ninja">
                        </div>
                        <div class="card-text">
                            <div class="unit-atribute">
                                <i class="fa-sharp fa-solid fa-bolt"></i>
                                <div>
                                    <span>${cards[card].power}</span>
                                    <span>power</span>
                            </div>
                        </div>
                            <div class="unit-atribute">
                                <i class="fa-sharp fa-solid fa-shield"></i>
                                <div>
                                    <span>${cards[card].resilence}</span>
                                    <span>resilence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        } else if (cards[card] instanceof Effect) {
            indexb++;
            console.log(`Effect: ${cards[card].name} - Cost: ${cards[card].cost} - Text: ${cards[card].text}`);
            document.getElementById("effect-cards").innerHTML += (`
                <div class="effect-card" id="effect${indexb}" >
                    <div class="effect-card-header">
                        <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                        <h2 class="card-name">${cards[card].name}</h2>
                        <div class="card-cost">
                            <i class="fa-regular fa-gem"></i>
                            <span>${cards[card].cost}</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card-image">
                            <img src="./assets/img/effect-card.png" alt="a red belt ninja">
                        </div>
                        <div class="card-text">${cards[card].text}</div>
                    </div>
                </div>
            `);
        }
    }
}

drawCards(unitCards);
drawCards(effectCards);  
