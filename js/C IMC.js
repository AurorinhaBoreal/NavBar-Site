
function CalcIMC() {

    let peso = parseFloat(document.getElementById("getPes").value);
    let altura = parseFloat(document.getElementById("getAlt").value);
    let formsIMC;
    let formsCatIMC;
    let IMC;
    let catIMC;

    IMC = peso/altura**2;
    IMC = IMC.toFixed(2)
    
    // Casos para diferentes valores de IMC
    // Switch(true) -> Vai executar o primeiro caso em que a afirmação for verdadeira
    switch (true) {
        // Caso I - Magreza
        case (IMC < 18.5): 
            catIMC = "Magreza"; 

            formsIMC = document.querySelector("#sendIMC");
            formsIMC.classList.add("afterSendIMCMag");
            
            formsCatIMC = document.querySelector("#sendCat");
            formsCatIMC.classList.add("afterSendCatMag");

            document.getElementById("sendIMC").value = IMC;
            document.getElementById("sendCat").value = catIMC;
            break;

        // Caso II - Normal
        case (18.5 <= IMC && IMC < 24.99): 
            catIMC = "Normal"; 
            
            formsIMC = document.querySelector("#sendIMC");
            formsIMC.classList.add("afterSendIMCNor");
            
            formsCatIMC = document.querySelector("#sendCat");
            formsCatIMC.classList.add("afterSendCatNor");

            document.getElementById("sendIMC").value = IMC;
            document.getElementById("sendCat").value = catIMC;
            break;

        // Caso III - Sobrepeso
        case (25 <= IMC && IMC < 29.99): 
            catIMC = "Sobrepeso"; 
            
            formsIMC = document.querySelector("#sendIMC");
            formsIMC.classList.add("afterSendIMCSob");
            
            formsCatIMC = document.querySelector("#sendCat");
            formsCatIMC.classList.add("afterSendCatSob");

            document.getElementById("sendIMC").value = IMC;
            document.getElementById("sendCat").value = catIMC;
            break;

        // Caso IV - Obesidade 1
        case (30 <= IMC && IMC < 34.99): 
            catIMC = "Obesidade 1"; 
            
            formsIMC = document.querySelector("#sendIMC");
            formsIMC.classList.add("afterSendIMCOb1");
            
            formsCatIMC = document.querySelector("#sendCat");
            formsCatIMC.classList.add("afterSendCatOb1");

            document.getElementById("sendIMC").value = IMC;
            document.getElementById("sendCat").value = catIMC;
            break;

        //  Caso V - Obesidade 2
        case (35 <= IMC && IMC < 39.99): 
            catIMC = "Obesidade 2"; 
            
            formsIMC = document.querySelector("#sendIMC");
            formsIMC.classList.add("afterSendIMCOb2");
            
            formsCatIMC = document.querySelector("#sendCat");
            formsCatIMC.classList.add("afterSendCatOb2");

            document.getElementById("sendIMC").value = IMC;
            document.getElementById("sendCat").value = catIMC;
            break;

        //  Caso V - Obesidade 3
        case (40 <= IMC): 
            catIMC = "Obesidade 3"; 
            
            formsIMC = document.querySelector("#sendIMC");
            formsIMC.classList.add("afterSendIMCOb3");
            
            formsCatIMC = document.querySelector("#sendCat");
            formsCatIMC.classList.add("afterSendCatOb3");

            document.getElementById("sendIMC").value = IMC;
            document.getElementById("sendCat").value = catIMC;
            break;

        // Caso VI - Não Identificado
        default: catIMC = "Não Identificada"; break;
    };
};
