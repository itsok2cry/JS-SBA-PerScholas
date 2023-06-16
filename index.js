const attackBtn = document.querySelector('#attackBtn')
const retreatBtn = document.querySelector('#retreatBtn')


const ussAssembly = {
    hull:20,
    firepower:5,
    accuracy:.7,

    attack(){
        console.log('You have attacked')

    },
    onHit(){
        if (Math.random() < alienShip.accuracy) {
            console.log(`You have been hit and lost ${alienShip.firepower} hp!`);
            this.hull -= alienShip.firepower
            console.log(`Uss Assebly hull hp is : ${this.hull}`)
        }
    }
}
function createAlienShip(){
const alienShip = {
    attack(){
        console.log('Alien ship has attacked')
    },
    onHit(){
        if (Math.random() < ussAssembly.accuracy) {
            console.log(`Alien Ship has been hit and lost ${ussAssembly.firepower} hp!`);
            this.hull -= ussAssembly.firepower
            console.log(`Alien ship hull hp is : ${this.hull}`)
        }
    }

}
let minHull = 3;
let maxHull = 6;
let minFirepower = 2;
let maxFirepower = 4;
let minAccuracy = .6;
let maxAccuracy = .8;
alienShip.hull = Math.floor(Math.random() * (maxHull - minHull + 1)) + minHull;
console.log(alienShip.hull)
alienShip.firepower = Math.floor(Math.random() * (maxFirepower - minFirepower + 1)) + minFirepower;
console.log(alienShip.firepower)
alienShip.accuracy = Math.random() * (maxAccuracy - minAccuracy ) +minAccuracy
console.log(alienShip.accuracy)
return alienShip;
}


///Game Round////
attackBtn.addEventListener('click',()=> {
for(let i =1; i <= alienShip.hull ; i++){
     if(alienShip.hull > 0){
        ussAssembly.attack();
        alienShip.onHit();
    }else if(alienShip.hull > 0){
        alienShip.attack();
        ussAssembly.onHit();
        continue;
 }else if(alienShip.hull <= 0) {
        console.log('Alien Ship has been destroyed!')
          break;

   
  }}
})







