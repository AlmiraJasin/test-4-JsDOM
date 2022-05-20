const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* 1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)
 */

document.querySelectorAll('h2').forEach((h2Tag) => {
    let randNum = rand(1, 6);
    h2Tag.innerText = randNum;
})

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let firstRand= rand(1, 6);
    let secondRand= rand(1, 6);
    document.querySelectorAll('h2')[0].innerHTML = firstRand;
    document.querySelectorAll('h2')[1].innerHTML = secondRand;
    if(firstRand === secondRand){
        document.querySelectorAll('h2').forEach(tag => {
            tag.style.color ='red'
        })  
    } else {
        document.querySelectorAll('h2').forEach(tag => {
            tag.style.color ='black'
        })  
    }
})
     
/* 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)
 */

let array = [];
let numSum = 0;
let randNum = 0;
const buttonH3 = document.querySelectorAll('button')[1];
buttonH3.addEventListener('click', () => {
    randNum = rand(1, 10);
    array.push(randNum);
    console.log(array);
    numSum += randNum;
    document.querySelector('h3').innerText = numSum;
})

/* 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
a. JS pagalba perskaitykite masyvą africa. (4 taškai)
b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)
 */

const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const ul = document.createElement("ul")
for (let i = 0; i < africa.length; i++) {
    let animals = africa[i]; 
    if(animals !== ''){
    const li = document.createElement("li")
    li.innerText = animals;
    ul.appendChild(li);
    }
}
document.body.appendChild(ul);

/* 4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
Pasirinkite patys sau patogiausius metodus tai atlikti.
 */

let plusButton = document.querySelectorAll("button")[2]
let minusButton = document.querySelectorAll("button")[3]
  
plusButton.addEventListener('click', () => {
  	const pirmasSkaicius = document.querySelectorAll("input")[0]
    const antrasSkaicius = document.querySelectorAll("input")[1]
    document.querySelectorAll("h5")[0].innerHTML = parseInt(pirmasSkaicius.value) + parseInt(antrasSkaicius.value);
})
minusButton.addEventListener('click', () => {
    const pirmasSkaicius = document.querySelectorAll("input")[0]
    const antrasSkaicius = document.querySelectorAll("input")[1]
    document.querySelectorAll("h5")[0].innerHTML = parseInt(pirmasSkaicius.value) - parseInt(antrasSkaicius.value);
})

/* minusButton.addEventListener('click', () => {

}) */

 


/* 5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)
 */

