function calculateSquareRoot (number){
    let result;

    // // Check if the number is negative
    try{
        if(number < 0){
            throw new Error ("You cannot square root a negative number")
        }

        //calculate and return square root
        return Math.sqrt (number);}
        //handle the error message
        catch (error) {
            console.log("Error: An error occurred.", error.message);
    }
}

//example of usage
let inputNumber = 4;

//call the function and log the result or error

let result = calculateSquareRoot (inputNumber);
if (result !== undefined) {
    console.log ("Square root:",result);
}