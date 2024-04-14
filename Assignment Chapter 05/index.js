// Spaces variables
let space = `<br/><br/>` 
let spaces = `<br/><br/><br/><br/><br/>`

// ----------------------------------

let num1 = 5;
let num2 = 5;

document.write(`Sum of ${num1} + ${num2} is ${num1 + num2} ${space}`);
document.write(`Subtraction of ${num1} - ${num2} is ${num1 - num2} ${space}`);
document.write(`Multipilication of ${num1} X ${num2} is ${num1 * num2} ${space}`);
document.write(`Division of ${num1} / ${num2} is ${num1 / num2} ${space}`);
document.write(`Modulus of ${num1} % ${num2} is ${num1 % num2} ${spaces}`);



let num3;
document.write(`Value after variable declaration is: ${num3} ${space}`)

num3 = 5;
document.write(`Initial value is: ${num3} ${space}`)

num3++;
document.write(`Value after increment is: ${num3} ${space}`)

num3 += 7;
document.write(`Value after addition is: ${num3} ${space}`)

num3--;
document.write(`Value after decrement is: ${num3} ${space}`)

num3 %= 3;
document.write(`Value after using modulus by 3 is: ${num3} ${spaces}`)



let ticket_price = 600;
let ticket_quantity = 5;
let total_ticket_price = ticket_price * ticket_quantity;

document.write(`Cost of ticket price is: ${ticket_price} PKR ${space}`)
document.write(`Ticket quantity is: ${ticket_quantity} PKR ${space}`)
document.write(`Total cost to buy 5 tickets to a movie is: ${total_ticket_price} PKR ${spaces}`)



let table = 4;
document.write(`Table of ${table} ${space}`)

for (let i = 1 ; i <= 10; i++) {
    document.write(`4 X ${i} = ${4 * i} ${space}`)
} 

document.write(spaces)



let temperature_converter = "The Temperature Converter:"

let celsius_temperature = 25;
let fahrenheit_temperature = 70;

let celsius_to_fahrenheit = (celsius_temperature * 9/5) + 32;
let fahrenheit_to_celsius = (fahrenheit_temperature - 32) * 5/9;

document.write(`${temperature_converter} ${space}`)
document.write(`${celsius_temperature}°C is ${celsius_to_fahrenheit}°F ${space}`)
document.write(`${fahrenheit_temperature}°F is ${fahrenheit_to_celsius}°C ${spaces}`)



let item1_price = 200;
let item2_price = 300;
let item1_quantity = 10;
let item2_quantity = 15;
let shipping_charges = 350;

let total_cost = (item1_price * item1_quantity) + (item2_price * item2_quantity) + shipping_charges;

document.write(`Shopping Cart  ${space}`);
document.write(`Price of item 1 is: ${item1_price} ${space}`)
document.write(`Quantity of item 1 is: ${item1_quantity} ${space}`)
document.write(`Price of item 2 is: ${item2_price} ${space}`)
document.write(`Quantity of item 2 is: ${item2_quantity} ${space}`)
document.write(`Shipping Charges is: ${shipping_charges} ${space}`)
document.write(`Total cost of your order is: ${total_cost} ${spaces}`);




let total_marks = 980;
let obtained_marks = 804;
let percentage = obtained_marks / total_marks * 100;

document.write(`Mark Sheet ${space}`)
document.write(`Total Marks: ${total_marks} ${space}`)
document.write(`Obtained Marks: ${obtained_marks} ${space}`)
document.write(`Percentage is: ${percentage} ${spaces}`)



let dollar = 10;
let riyal = 25;
let dollar_to_pkr = 104.80;
let riyal_to_pkr = 28;
let currency_converter = dollar * dollar_to_pkr + riyal * riyal_to_pkr;

document.write(`Crruency Converter ${space}`)
document.write(`Total Currency in PKR is: ${currency_converter} ${spaces}`)



let num4 = 10;
let arithmetic_operations = (((num4 + 5) * 10) / 2);

document.write(`Arithmetic operations ${space}`)
document.write(`${arithmetic_operations} ${spaces}`)



let birth_year = 2003;
let crrunet_year = 2024;
let calculate_age = crrunet_year - birth_year;

document.write(`Age Calculator ${space}`)
document.write(`Birth Year is: ${birth_year} ${space}`)
document.write(`Crruent Year is: ${crrunet_year} ${space}`)
document.write(`Your age is: ${calculate_age} ${spaces}`)



let radius = 20;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius**2;

document.write(`The Geometrizer ${space}`)
document.write(`Radius of a circle: ${radius} ${space}`)
document.write(`The circumference is: ${circumference} ${space}`)
document.write(`The area is: ${area} ${spaces}`)



let fav_snack = "Krukure";
let age = 15;
let estimated_maximum_age = 65;
let snack_amount = 2;
let calculate_snack = ((estimated_maximum_age - age) * 365) * 2;

document.write(`The Lifetime Supply Calculator ${space}`)
document.write(`Favourite Snack: ${fav_snack} ${space}`)
document.write(`Amount of snacks per day: ${snack_amount} ${space}`)
document.write(`Crruent Age: ${age} ${space}`)
document.write(`Estimated Maximum Age: ${estimated_maximum_age} ${space}`)
document.write(`You will need ${calculate_snack} ${fav_snack} to last you until the ripe old age of ${estimated_maximum_age} ${spaces}`)
