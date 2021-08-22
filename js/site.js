//Accept Fizz and Buzz Values
//Controller Function
function getValues() {

    //Define the fizzBuzz object
    let fizzBuzz = {
        fizzValue:0,
        buzzValue:0
    };

    document.getElementById("resultsContainer").classList.add("invisible");
    fizzBuzz.fizzValue = document.getElementById("fizzNumber").value;
    fizzBuzz.buzzValue = document.getElementById("buzzNumber").value;
    let results = fizzBuzzer(fizzBuzz);
    displayFizzBuzz(results);
}

//Replace select numbers with Fizz and Buzz
//Logic Function
function fizzBuzzer(fizzObject) {
    
    let fbArray = [];

    //work some magic
    for (let i = 1; i <= 100; i++) {
        if ((i % fizzObject.fizzValue == 0) && i % fizzObject.buzzValue == 0) {
            fbArray.push("FizzBuzz");
        } else if (i % fizzObject.fizzValue == 0) {
            fbArray.push("Fizz");
        } else if (i % fizzObject.buzzValue == 0) {
            fbArray.push("Buzz");
        } else {
            fbArray.push(i)
        }
    }
    return fbArray;
}

//Display Function
function displayFizzBuzz(fizzObject) {

    document.getElementById("results").innerHTML = "";
    let resultsTable = document.getElementById("results");
    let tableRow = resultsTable.insertRow(0);
    let i = 0;


    fizzObject.forEach(fizzElement => {
        if (i > 4) {
            tableRow = resultsTable.insertRow(-1);
            i = 0;
        };
        let cell1 = tableRow.insertCell(i);
        cell1.innerHTML = fizzElement;
        if (fizzElement === "Fizz") {
            cell1.classList.add("fizz")
        } else if (fizzElement === "Buzz") {
            cell1.classList.add("buzz")
        } else if (fizzElement === "FizzBuzz") {
            cell1.classList.add("fizzbuzz")
        }
        i++;
    });

    //show the results table
    document.getElementById("resultsContainer").classList.remove("invisible");
}


    
