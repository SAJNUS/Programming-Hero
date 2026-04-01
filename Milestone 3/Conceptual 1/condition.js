// let cgpa = 3.71;

// if (cgpa == 4)
// {
//     console.log("A+");
// }
// else if (cgpa >= 3.75)
// {
//     console.log("A");
// }
// else if (cgpa >= 3.5) 
// {
//     console.log("A-");
// }
// else 
// {
//     console.log ("Scholarship missed");
// }


// Problem 2
let balance = 5000;
let withdraw = 2000;

if (withdraw <= balance){
    if (withdraw % 500 == 0){
        console.log("Withdraw Successful")
        let newBalance = balance - withdraw;
        console.log(newBalance);
    }
    else {
        console.log("Enter amount multiple of 500");
    }
}
else {
    console.log("Insufficient Balance");
}