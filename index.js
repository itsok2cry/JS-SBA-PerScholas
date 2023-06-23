////Global Variables///
const attackBtn = document.querySelector('#attackBtn');
const retreatBtn = document.querySelector('#retreatBtn');
let aliensRemaining = Math.floor(Math.random() * 6) + 1;
let alienShip = createAlienShip();
 ////Players Ship
const ussAssembly = {
    hull:20,
    firepower:5,
    accuracy:.7,
    attack(){
        console.log(`The Uss Assembly has attacked AlienShip ${aliensRemaining}!`)

    },
    onHit(){
        updateGameLog('Alien has attacked you!');
        updateGameLog(`You were attacked and lost ${alienShip.firepower} hp!`)
        console.log(`You have been hit and lost ${alienShip.firepower} hp!`);
         this.hull -= alienShip.firepower
        const assemblyHullVal = document.querySelector('.hull-value');
        assemblyHullVal.textContent = ussAssembly.hull;
        console.log(`Uss Assembly hull hp is : ${this.hull}`)

        }
      }

///Function that createsAlienShip
function createAlienShip(){
    let minHull = 3;
    let maxHull = 6;
    let minFirepower = 2;
    let maxFirepower = 4;
    let minAccuracy = .6;
    let maxAccuracy = .8;

const alienShip = {
     hull: Math.floor(Math.random() * (maxHull - minHull + 1)) + minHull,
     firepower: Math.floor(Math.random() * (maxFirepower - minFirepower + 1)) + minFirepower,
     accuracy: Math.min(Math.random() * (maxAccuracy - minAccuracy) + minAccuracy,maxAccuracy),
     attack(){
        console.log(`AlienShip ${aliensRemaining} has attacked!`)

    },
     onHit(){
            updateGameLog(`You attacked AlienShip ${aliensRemaining}`);
            updateGameLog(`Alien Ship has been hit and lost ${ussAssembly.firepower} hp!`)
            console.log(`Alien Ship has been hit and lost ${ussAssembly.firepower} hp!`);
            this.hull -= ussAssembly.firepower
            const alienShipHullVal = document.querySelector(".alienHull-value");
            alienShipHullVal.textContent = alienShip.hull;
            console.log(`Alien ship hull hp is : ${this.hull}`)
        }
      
    };
  // Set initial values for alienShip in DOM
  const alienNum = document.querySelector(".alienNum");
  alienNum.textContent ='Aliens: ' + aliensRemaining;

  const alienShipHullVal = document.querySelector(".alienHull-value");
  alienShipHullVal.textContent = alienShip.hull;

  const alienShipFirePow = document.querySelector(".alienFirePower-value");
  alienShipFirePow.textContent = alienShip.firepower;

  const alienShipAccuracy = document.querySelector(".alienAccuracy-value");
  alienShipAccuracy.textContent = alienShip.accuracy.toFixed(2);

    return alienShip;
}


////Function to update values once alienship has been attacked
function updateAlienShipValues() { 
    const alienShipHullVal = document.querySelector(".alienHull-value");
    alienShipHullVal.textContent = alienShip.hull;
    const alienNum = document.querySelector('.alienNum');
    alienNum.textContent = 'Aliens: ' + aliensRemaining;
  }
//// Function to display actions in DOM
  function updateGameLog(message) {
    const gameLog = document.getElementById('gameLog');
    gameLog.textContent += message + '\n';
  }

 ///Game Round///
function attackAlienShip() {
    ussAssembly.attack();
    
//Chance of successful Attack
    const attackSuccess = Math.random() < ussAssembly.accuracy;
  
    if (attackSuccess) {
      console.log("You attacked the alien ship successfully!");
      alienShip.onHit();
  
 // Check if the alien ship is destroyed
      if (alienShip.hull <= 0) {
        console.log("You destroyed the alien ship!");
        updateGameLog("You destroyed the alien ship!");
        setTimeout(()=>{
            const gameLog = document.getElementById('gameLog')
            gameLog.textContent = ''
        },6000)
        aliensRemaining -= 1
 // Check if there are more aliens remaining
         if (aliensRemaining <= 0) {
            console.log("Congratulations! You destroyed all the aliens. You have saved the world!");
            setTimeout(() => {
                window.location.href = 'gameWon.html';
              }, 5000);
            return;}
 // if player attacks again creates new alien ship
        console.log(`You can choose to attack again or retreat. Aliens remeaining : ${aliensRemaining} `)
        updateGameLog('You can move on to the next round or retreat. The choice is yours.')
        alienShip = createAlienShip();
        updateAlienShipValues();
        console.log('Next alien ship stats are :')
        console.log(alienShip)
        return;
      }    
    } else {
      console.log("Your attack has missed the alien ship! ");
      updateGameLog('Your attack has missed!')
    }
  
// Alien ship attack //
    alienShip.attack();
    
// Chance to be hit by alien
    const alienAttackSuccess = Math.random() < alienShip.accuracy
  
    if (alienAttackSuccess) {
      console.log("The alien ship attacked you successfully!");
        ussAssembly.onHit();
  
// Check if the player is destroyed
      if (ussAssembly.hull <= 0) {
        console.log("Game over. You were destroyed by the alien ship.");
        setTimeout(() =>{
        window.location.href = 'gameLost.html'
      },1000)
        return;
      }
    } else {
      console.log("The alien ship's attack has missed!");
      updateGameLog("The alien's attack has missed!")
    }
    console.log('Do you wish to attack again or retreat? ')
  }
  
  function AttackClick() {
    if(aliensRemaining === 0){
        return;
    }
    attackAlienShip();
  }
  function RetreatClick() {
    console.log("You chose to retreat. Game over.");
    setTimeout(() =>{
        window.location.href = 'gameLost.html'
      },1000)
  }
  //Event listeners for buttons
attackBtn.addEventListener('click', AttackClick);
retreatBtn.addEventListener('click', RetreatClick);
  
  
  
  



  