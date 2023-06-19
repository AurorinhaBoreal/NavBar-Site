
// FUNÇÕES FORMATAÇÃO

// FORMATAÇÃO PREÇO
function formatPrice() {

    // Puxa o valor no input de Preço e impede a inserção de caracteres não númericos
    var value1 = document.getElementById("getPri").value,
        value1 = value1.split('.').join('');

    // Caso o input númerico seja maior que 3
    
    if (value1.length > 6) {

      // A INPUT TEM QUE SER DO TIPO TEXT, POIS AO COLOCAR O "." SE TORNA UMA STRING NORMAL E O CAMPO NUMBER NÃO PERMITE
      // A formatação vai ser feita:
      // Na primeira substring, está selecionando o valor após os ultimos 6 digitos, no caso, a casa do milhão
      // Na segunda substring, está selecionando o valor após os ultimos 3 digitos, no caso, a casa de milhar
      // Na terceira substring, está selecionando dos últimos três digitos até o final, as casas restantes
      // Os pontos estão separando essas três substrings
      value1 = value1.substring(0, value1.length - 6) + ',' + value1.substring(value1.length - 3, value1.length) + ',' + value1.substring(value1.length - 3, value1.length);

    }

    else if (value1.length > 3) {

      // A INPUT TEM QUE SER DO TIPO TEXT, POIS AO COLOCAR O "." SE TORNA UMA STRING NORMAL E O CAMPO NUMBER NÃO PERMITE
      // A formatação vai ser feita:
      // Na primeira substring, está selecionando o valor após os ultimos 3 digitos, no caso, a casa de milhar
      // Na segunda substring ta selecionando dos últimos três digitos até o final, as casas restantes
      // O ponto ta separando essas duas substrings
      value1 = value1.substring(0, value1.length - 3) + ',' + value1.substring(value1.length - 3, value1.length);

    }

    // Devolvendo a string formatada pro input.
    document.getElementById("getPri").value = 'R$' + value1;
  }

// // FORMATAÇÃO JUROS
//   function formatFees() {

//     // Puxa o valor no input de Juros e impede a inserção de caracteres não númericos
//     var value2 = document.getElementById("getFees").value,
//         value2 = value2.split('.').join('');

//     // Caso o input númerico seja igual a 2
//     if (value2.length == 2) {

//       // A INPUT TEM QUE SER DO TIPO TEXT, POIS AO COLOCAR O "." SE TORNA UMA STRING NORMAL E O CAMPO NUMBER NÃO PERMITE
//       // A formatação vai ser feita:
//       // Na primeira substring, está selecionando o valor após o último digito, no caso, a casa da unidade
//       // Na segunda substring ta selecionando os últimos dois digitos até o final, as casas decimais
//       // O ponto ta separando essas duas substrings e a porcentagem é para melhor entendimento do usuário
//       value2 = value2.substring(0, value2.length - 1) + '.' + value2.substring(value2.length - 1, value2.length);
//     }

//     else if (value2.length == 3) {
      
//       value2 = value2.substring(0, value2.length - 1) + '.' + value2.substring(value2.length - 1, value2.length);
//     }

//     // Devolvendo a string formatada pro input.
//     document.getElementById("getFees").value = value2 + '%';
//   }

// CALCULO E DESFORMATAÇÃO

  function calcJuros() {

    // INSERINDO VARIAVEIS

    var item = document.getElementById("getIte").value;
    var preco = document.getElementById("getPri").value;
    var juros = document.getElementById("getFees").value;
    var parcelas = document.getElementById("getPar").value;
    jurosN = parseFloat(juros);
    var precoN;
    var jurosN;
    var parcelasN;

    // FORMATANDO PREÇO

    // Tirando R$
    preco = preco.substring(2, preco.length);

    // Tirando Pontos

    var precoTa = preco.length;
    if (preco.length > 3) {
      switch (true) {
        case (precoTa == 11):
          preco = preco.substring(0, preco.length - 8) +""+ preco.substring(4, preco.length - 4) +""+ preco.substring(8, preco.length)
          precoN = parseInt(preco);
          break;
        case (precoTa == 10):
          alert("Foi")
          preco = preco.substring(0, preco.length - 8) +""+ preco.substring(3, preco.length - 4)  +""+ preco.substring(7, preco.length) 
          precoN = parseInt(preco);
          break;
        case (precoTa == 9):
          preco = preco.substring(0, preco.length - 8) +""+ preco.substring(2, preco.length - 4) +""+ preco.substring(6, preco.length)
          precoN = parseInt(preco);
          break;
        case (precoTa == 7):
          preco = preco.substring(0, preco.length - 4) +""+ preco.substring(4, preco.length)
          precoN = parseInt(preco);
          break;
        case (precoTa == 6):
          preco = preco.substring(0, preco.length - 4) +""+ preco.substring(3, preco.length)
          precoN = parseInt(preco);
          break;
        case (precoTa == 5):
          preco = preco.substring(0, preco.length - 4) +""+ preco.substring(2, preco.length)
          precoN = parseInt(preco);
          break;
        default: break;
      
      }
    }

    // // FORMATANDO JUROS

    // juros = juros.substring(juros.length - 1, preco.length);
    // if (juros.length == 3) {
    //   juros = juros.substring(0, juros.length -2) +''+ juros.substring(2, juros.length);
    // } 
    
    // else {
    //   juros = juros.substring(0, juros.length -2) +''+ juros.substring(3, juros.length);
    // }

    // jurosN = parseFloat(juros);
    // jurosN = jurosN/10;
    
    // CALCULO DE JUROS

    jurosN = parseFloat(jurosN);
    parcelasN = parseInt(parcelas);
    var precoT = precoN * (1+(jurosN/100)) ** parcelasN;
    precoT = precoT.toFixed(2);
    precoT = precoT.toString();

    document.getElementById("sendIC").value = item;
    document.getElementById("sendPP").value = 'R$' + precoT;
    
  }