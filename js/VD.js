function formatCell() {

    var numero = document.getElementById("getCell").value;

    numero = "(" + numero.substring(0, numero.length - 9) + ') ' + numero.substring(2, numero.length - 4) + '-' + numero.substring(7, numero.length);

    // Devolvendo a string formatada pro input.
    document.getElementById("getCell").value = numero;
}

function formatCPF() {

    var CPF = document.getElementById("getCPF").value;

    CPF = CPF.substring(0, CPF.length - 8) + '.' + CPF.substring(3, CPF.length - 5) + '.' + CPF.substring(6, CPF.length - 2) + "-" + CPF.substring(9, CPF.length);

    // Devolvendo a string formatada pro input.
    document.getElementById("getCPF").value = CPF;
}

function formatCEP() {

    var CEP = document.getElementById("getCEP").value;

    CEP = CEP.substring(0, CEP.length - 3) + '-' + CEP.substring(5, CEP.length);

    // Devolvendo a string formatada pro input.
    document.getElementById("getCEP").value = CEP;
}

function popUpValidation() {

    // Quando clicarem no botão, o PopUp irá aparecer
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

}