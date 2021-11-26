let move={};
console.log(move);
let message;
let name;

//Gets called every time the button is pushed.
function call(){
let num=Math.floor(Math.random() * 500);;
fetch(`https://pokeapi.co/api/v2/move/${num}/`)
 .then((response) => response.json())
 .then((response) => {
 
 Object.assign(move,response);
 
 name=move.name;
 //Capitalizes the first letter of the move
 name=name.replace(name.slice(0,1),name.slice(0,1).toUpperCase());
 message='Clefairy used '+name+'.'

 //Moves have three types. Two of them refer to damaging moves, and the last refers to non-damaging moves.
 if(move.damage_class.name==='status')
 message=message+'<br><br/>You didn\'t deal any damage, but you may have set yourself up for next turn.'

 //This script actually doesn't care about what type of attacking move gets rolled. It does care about how strong it is.
 else if(move.power<75)
 message+='<br><br/>You didn\'t do a lot of damage.'
 else
 message+='<br><br/>You did tons of damage.'
document.getElementsByClassName('response')[0].innerHTML=message;

 console.log(move);
 })
 .catch((error) => console.error(error));
}