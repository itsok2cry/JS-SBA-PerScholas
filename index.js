const attackBtn = document.querySelector('#attackBtn')
const retreatBtn = document.querySelector('#retreatBtn')
  
  
const ussAssembly = {
    hull:20,
    firepower:5,
    accuracy:.7,
    onHit(){
        console.log(`You have been hit and lost ${alienShip.firepower} hp!`);
         this.hull -= alienShip.firepower
        console.log(`Uss Assembly hull hp is : ${this.hull}`)
        }
      }

let aliensRemaining = 6;

let minHull = 3;
let maxHull = 6;
let minFirepower = 2;
let maxFirepower = 4;
let minAccuracy = .6;
let maxAccuracy = .8;


function createAlienShip(){
const alienShip = {
     hull: Math.floor(Math.random() * (maxHull - minHull + 1)) + minHull,
     firepower: Math.floor(Math.random() * (maxFirepower - minFirepower + 1)) + minFirepower,
     accuracy: Math.random() * (maxAccuracy - minAccuracy) + minAccuracy,
    onHit(){
       
            console.log(`Alien Ship has been hit and lost ${ussAssembly.firepower} hp!`);
            this.hull -= ussAssembly.firepower
            console.log(`Alien ship hull hp is : ${this.hull}`)
        }
        
    }
    return alienShip;
}
 let alienShip = createAlienShip();

 console.log(alienShip)
///Game Round///

function attackAlienShip() {
    // Player attacks the alien ship
    console.log('You have attacked');
    
    // Calculate attack outcome based on random chance
    const attackSuccess = Math.random() < ussAssembly.accuracy;
  
    if (attackSuccess) {
      console.log("You attacked the alien ship successfully!");
      alienShip.onHit();
  
      // Check if the alien ship is destroyed
      if (--alienShip.hull < 0) {
        console.log("You destroyed the alien ship!");
        
  
        // Check if there are more aliens remaining
        if (aliensRemaining === 0) {
          console.log("Congratulations! You destroyed all the aliens. You win!");
          return;
        } else {
          // Create a new alien ship for the next attack
          alienShip = createAlienShip();
          aliensRemaining -= 1
          console.log("Prepare for the next attack on a new alien ship!");
          return;
        }}
      
    } else {
      console.log("Your attack on the alien ship failed.");
    }
  
    // Alien ship attacks back
    console.log('Alien ship has attacked');
    
    // Calculate attack outcome based on random chance
    const alienAttackSuccess = Math.random() < alienShip.accuracy
  
    if (alienAttackSuccess) {
      console.log("The alien ship attacked you successfully!");
        ussAssembly.onHit();
  
      // Check if the player is destroyed
      if (ussAssembly.hull <= 0) {
        console.log("Game over. You were destroyed by the alien ship.");
        return;
      }
    } else {
      console.log("The alien ship's attack failed.");
    }

    console.log('Do you wish to attack again or retreat? ')
  }
  
  // Function to handle attack button click
  function handleAttackClick() {
    attackAlienShip();
  }
  
  // Function to handle retreat button click
  function handleRetreatClick() {
    console.log("You chose to retreat. Game over.");
  }







attackBtn.addEventListener('click', handleAttackClick);
retreatBtn.addEventListener('click', handleRetreatClick);
  
  
  
  



  