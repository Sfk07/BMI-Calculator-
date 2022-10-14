var inches = prompt("Enter height in inches")
var pounds =prompt ("Enter weight in pounds")

console.log(inches)
console.log(pounds)

var height=inches * 2.54
var weight=pounds * 0.45


console.log("height in centimeters="+height)
console.log("weight in kilo="+weight)



// formula
var result = (weight/((height*height)/ 10000)).toFixed(2);



if(!isNaN(result))
console.log (result);

{if(result <18) {
    console.log("underweight")}

   else if(result <29) {
    console.log("Healthy")}

   else if (result <39){
    console.log("overweight")}

   else if (result >=40){
        console.log("Obesity")
    }
}