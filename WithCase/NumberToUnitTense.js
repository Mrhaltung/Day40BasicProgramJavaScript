const prompt = require('prompt-sync')();

 const NUMBER = prompt('Enter a number: ');
 
 switch(Number(NUMBER)) 
 {
     case 1:
         console.log("Unit");
         break;
     case 10:
         console.log("Ten");
         break;
     case 100:
         console.log("Hundred");
         break;
     case 1000:
         console.log("Thousand");
         break;
     case 10000:
         console.log("Ten thousand");
         break;
     case 100000:
         console.log("Lakh");
         break;
     default:
         console.log("Invalid input.");
         break;
 }