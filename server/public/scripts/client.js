$(document).ready(handleReady);

let calculations = [];
let sign = "";
answer = 0;
firstNumberInput = 0;
secondNumberInput = 0;



function handleReady() {
    console.log("jquery is loaded!");

    $("#equalsBtn").on("click", submitCalculation);

    $("#additionBtn").on("click", addCalculation);

    $("#subtractionBtn").on("click", subtractCalculation);

    $("#multiplicationBtn").on("click", multiplyCalculation);

    $("#divisionBtn").on("click", divideCalculation);

    $("#clearBtn").on("click", deleteInputFields);

};



function addCalculation() {
    sign = `+`;
    console.log("sign:", sign);
};

function subtractCalculation() {
    sign = `-`;
    console.log("sign:", sign);
};

function multiplyCalculation() {
    sign = `*`;
    console.log("sign:", sign);
};

function divideCalculation() {
    sign = `/`;
    console.log("sign:", sign);
};

function deleteInputFields() {
    sign = `C`;
    console.log("sign:", sign);
    $('#firstNumberInputField').val(""),
        $('#secondNumberInputField').val("")
};

function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/calculations'
    }).then((response) => {
        calculations = response;
        render(response);
    }).catch(function (err) {
        alert('Unable to get calculations. Try again later.');
        console.log(err)
    })

};

function submitCalculation() {
    //get values from input
    let calculation = {
        firstNumberInput: $('#firstNumberInputField').val(),
        signOperator: sign,
        secondNumberInput: $('#secondNumberInputField').val(),
    }
    //ajax to server
    $.ajax({
        method: 'POST',
        url: '/addCalculations',
        data: calculation
    }).then((response) => {
        console.log('post finished')
        getCalculation()

    });

};



function render() {

    $("#calucaltionTotal").empty();
    $("#calculationHistory").empty();


    $("#calucaltionTotal").append(`
    <h2>${calculations[calculations.length - 1].answer}</h2>
    `);

    for (let values of calculations) {


        $("#calculationHistory").append(`
        <ul>
            <li>${values.firstNumberInput} ${values.signOperator} ${values.secondNumberInput} = ${values.answer}</li>
        </ul>
        `);

    };


};