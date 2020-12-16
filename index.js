<<<<<<< HEAD
var katzDeliLine =[];

function takeANumber(katzDeliLine, name) {
  return "Welcome, " + `${name}.` + " You are number " + `${katzDeliLine.push(name)}` + " in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {

    return "Currently serving " + `${katzDeliLine.shift()}.`;
  }
}



function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } 
  
  var numbersAndNames = [];
  
for (let i = 0; i < katzDeliLine.length; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  
  return `The line is currently: ${numbersAndNames.join(', ')}`
=======
var katzDeli =[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return katzDeliLine
}

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number 1 in line.`
}

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine, name){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return "Currently serving " + name + ".";
  }
}

var line = 0;

function currentLine(katzDeli){
  if(katzDeli.length === 0){
    return "The line is currently empty."
  } else{
    var response = 'The line is currently:'
     for (var i=0; i<katzDeli.length-1; i++){
       response += " " + Number(i+1) + ". " + katzDeli[i] + ","
          }
    response += " " + katzDeli.length + ". " + katzDeli[katzDeli.length-1]
     return response;
   }
>>>>>>> 7799b64a373e9f057b2e0f2890b00d68eb6b6820
}
