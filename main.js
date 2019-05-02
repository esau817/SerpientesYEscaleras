// Reglas de juego:
// Cada jugador tira una vez 
// Todo número divisible entre 9 [1 - 50] será un número serpiente.
// Todo número divisible entre 6 [1 - 50] será un número escalera.
let player1 = new player1;

class player1 {
    constructor(position, newPosition) {
        this.position = position;
        this.newPosition = newPosition;
    }
    
    getPlayerPosition() {
        this.newPosition += this.position;
        return this.newPosition;
    }

    log(){
        console.log(this.newPosition);
    }
}
console.log(player1.log());


let rect = new player1(1, myDice); // La posición de inicio de cada jugador es 1, 'myDice' es el dado que se arroja.


    for(let x = 0; x < 50; x++)
    {
        let rect = new player1(1, myDice); // La posición de inicio de cada jugador es 1, 'myDice' es el dado que se arroja.
        var myDice = Math.floor((Math.random() * 6) + 1);
  

        console.log("Player 1 position :" , rect.getPlayerPosition());
        console.log("Player 1 moves " , myDice , " tiles");
    }
//for(let m = 0; m < 50; m++)
//{

//}

//function diceRoll(rect)
//{
    //var currentPosition = '';
    //for(var i=0;player1.newPosition =60;i++){
        //if(rect % 9 == 0)
        //{
          //  currentPosition = rect -= 5
        //}
        //else if (rect % 6 == 0)
        //{
         //   currentPosition = rect += 4
        //}
    //}
    //return currentPosition;
//}
//console.log(diceRoll.toString());






    for(let x = 0; x < 50; x++)
    { 
        var myDice = Math.floor((Math.random() * 100) + 1);
    }
console.log(myDice);