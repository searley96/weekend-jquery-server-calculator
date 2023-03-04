$(document).ready(handleReady);

// let calculations = [];
let sign = ""

function handleReady() {
    console.log("jquery is loaded!");

    $("#equalsBtn").on("click", submitCalculation);

    $("#additionBtn").on("click", addCalculation);

    $("#subtractionBtn").on("click", subtractCalculation);

    $("#multiplicationBtn").on("click", multiplyCalculation);

    $("#divisionBtn").on("click", divideCalculation);

}

function addCalculation() {
    sign = `+`;
    console.log("sign:", sign);
}

function subtractCalculation() {
    sign = `-`;
    console.log("sign:", sign);
}

function multiplyCalculation() {
    sign = `*`;
    console.log("sign:", sign);
}

function divideCalculation() {
    sign = `/`;
    console.log("sign:", sign);
}




// function additionCalculation() {
//    let addition =  (Number(submitCalculation.firstNumberInput) + Number(submitCalculation.secondNumberInput))
//     console.log('addition calculation', addition)
//    };

function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/calculations'
    }).then(function(response){
        // calculations = response;
        // render();
    }).catch (function(err){
        alert('Unable to get calculations. Try again later.');
        console.log(err)
    })
}

function submitCalculation() {
    //get values from input
    let calculations = {
        firstNumberInput: $('#firstNumberInputField').val(),
        signOperator: sign,
        secondNumberInput: $('#secondNumberInputField').val()
    }
   console.log('calculation', calculations);
   //ajax to server
   $.ajax({
    method: 'POST',
    url: '/addCalculations',
    data: calculations
   }).then((response)=> {
    console.log('post finished')
    $('#firstNumberInputField').val(""),
    $('#secondNumberInputField').val("")
    getCalculation()
   
   })
//    render()
   //deal with response
};

function render(){
    $("#firstNumberInputField").empty();
    $("#secondNumberInputField").empty();


    for (let calculation of calculations) {
        $("#calculationHistory").append(`
        <ul>
            <li>${calculation.firstNumberInput} ${calculation.signOperator} ${calculation.secondNumberInput}</li>
        </ul>
        `)

    }

//     $("calucaltionTotal").append(`
    
//     `)

    // $("calculationHistory").append(`
    // <ul>
    //     <li>${submitCalculation.firstNumberInput} ${submitCalculation.secondNumberInput}</li>
    // </ul>
    // `)
}