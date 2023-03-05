$(document).ready(handleReady);

let calculations = [];
let sign = "";
answer = 0;


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



function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/calculations'
    }).then((response) => {
        calculations = response;
        render(response);
    }).catch (function(err){
        alert('Unable to get calculations. Try again later.');
        console.log(err)
    })
}

function submitCalculation() {
    //get values from input
    let calculation = {
        firstNumberInput: $('#firstNumberInputField').val(),
        signOperator: sign,
        secondNumberInput: $('#secondNumberInputField').val(),
    }

   console.log('calculation', calculation);
   //ajax to server
   $.ajax({
    method: 'POST',
    url: '/addCalculations',
    data: calculation
   }).then((response)=> {
    console.log('post finished')
    render(response);
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


    for (let math of calculations) {
        
        $("#calucaltionTotal").append(`
        <p>${math.answer}</p>
        `)

        $("#calculationHistory").append(`
        <ul>
            <li>${math.firstNumberInput} ${math.signOperator} ${math.secondNumberInput}</li>
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