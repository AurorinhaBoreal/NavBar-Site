// FORMATAÇÃO INPUT PREÇO DO PRODUTO
function formatProdPri() {

    // Puxa o valor no input de Preço e impede a inserção de caracteres não númericos
    var value = document.getElementById("getProdPri").value,
        value = value.split('.').join('');

    // Caso o input númerico seja maior que 3
    
    if (value.length > 6) {

      // A INPUT TEM QUE SER DO TIPO TEXT, POIS AO COLOCAR O "." SE TORNA UMA STRING NORMAL E O CAMPO NUMBER NÃO PERMITE
      // A formatação vai ser feita:
      // Na primeira substring, está selecionando o valor após os ultimos 6 digitos, no caso, a casa do milhão
      // Na segunda substring, está selecionando o valor após os ultimos 3 digitos, no caso, a casa de milhar
      // Na terceira substring, está selecionando dos últimos três digitos até o final, as casas restantes
      // Os pontos estão separando essas três substrings
      value = value.substring(0, value.length - 6) + ',' + value.substring(value.length - 3, value.length) + ',' + value.substring(value.length - 3, value.length);
    }

    else if (value.length > 3) {

      // A INPUT TEM QUE SER DO TIPO TEXT, POIS AO COLOCAR O "." SE TORNA UMA STRING NORMAL E O CAMPO NUMBER NÃO PERMITE
      // A formatação vai ser feita:
      // Na primeira substring, está selecionando o valor após os ultimos 3 digitos, no caso, a casa de milhar
      // Na segunda substring ta selecionando dos últimos três digitos até o final, as casas restantes
      // O ponto ta separando essas duas substrings
      value = value.substring(0, value.length - 3) + ',' + value.substring(value.length - 3, value.length);

    }

    // Devolvendo a string formatada pro input.
    document.getElementById("getProdPri").value = "R$" + value;
  }

// FORMATAÇÃO INPUT LUCRO
function formatPro() {

  // Puxa o valor no input de Preço e impede a inserção de caracteres não númericos
  var value = document.getElementById("getPro").value;

  // Adiciona a "%" ao final do número
  value = value.substring(0, value.length) + '%'

  // Devolvendo a string formatada pro input.
  document.getElementById("getPro").value = value;
}

// FORMATAÇÃO INPUT CUSTO DO TRANSPORTE
function formatTransportPri() {

  // Puxa o valor no input de Preço e impede a inserção de caracteres não númericos
  var value = document.getElementById("getTransportPri").value,
      value = value.split('.').join('');

  // Adiciona a "%" ao final do número
  value = value.substring(0, value.length) + '%'

  // Devolvendo a string formatada pro input.
  document.getElementById("getTransportPri").value = value;
}

// FORMATAÇÃO INPUT CUSTO DA ARMAZENAGEM
function formatStockPri() {

    // Puxa o valor no input de Preço e impede a inserção de caracteres não númericos
  var value = document.getElementById("getStockPri").value;

  // Adiciona a "%" ao final do número
  value = value.substring(0, value.length) + '%'

  // Devolvendo a string formatada pro input.
  document.getElementById("getStockPri").value = value;
}

// FORMATAÇÃO INPUT COMISSÃO
function formatCom() {

  // Puxa o valor no input de Preço e impede a inserção de caracteres não númericos
  var value = document.getElementById("getCom").value;

  // Adiciona a "%" ao final do número
  value = value.substring(0, value.length) + '%'

  // Devolvendo a string formatada pro input.
  document.getElementById("getCom").value = value;
}
