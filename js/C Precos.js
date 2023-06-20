
function calcPri() {

  var Item = document.getElementById("getItem").value;
  var produto = document.getElementById("getProdPri").value;
  var lucro = document.getElementById("getPro").value;
  var transporte = document.getElementById("getTransportPri").value;
  var armazenamento = document.getElementById("getStockPri").value;
  var comissao = document.getElementById("getCom").value;

  // FORMATANDO PRODUTO

  // Tirando R$
  produto = produto.substring(2, produto.length);

  // Tirando Virgulas

  var produtoI;
  var produtoTa = produto.length;
  if (produto.length > 3) {
    switch (true) {
      case (produtoTa == 11):
        produto = produto.substring(0, produto.length - 8) +""+ produto.substring(4, produto.length - 4) +""+ produto.substring(8, produto.length)
        produtoI = parseInt(produto);
        break;
      case (produtoTa == 10):
        produto = produto.substring(0, produto.length - 8) +""+ produto.substring(3, produto.length - 4)  +""+ produto.substring(7, produto.length) 
        produtoI = parseInt(produto);
        break;
      case (produtoTa == 9):
        produto = produto.substring(0, produto.length - 8) +""+ produto.substring(2, produto.length - 4) +""+ produto.substring(6, produto.length)
        produtoI = parseInt(produto);
        break;
      case (produtoTa == 7):
        produto = produto.substring(0, produto.length - 4) +""+ produto.substring(4, produto.length)
        produtoI = parseInt(produto);
        break;
      case (produtoTa == 6):
        produto = produto.substring(0, produto.length - 4) +""+ produto.substring(3, produto.length)
        produtoI = parseInt(produto);
        break;
      case (produtoTa == 5):
        produto = produto.substring(0, produto.length - 4) +""+ produto.substring(2, produto.length)
        produtoI = parseInt(produto);
        break;
      default: 
        produtoI = parseInt(produto);
        break;
    
    }
  }

  // FORMATANDO LUCRO

  // Tirando %
  lucro = lucro.substring(0, lucro.length -1);
  var lucroF;
  lucroF = parseFloat(lucro);
  lucroF = lucroF/100;
  alert(typeof lucroF, lucroF);


  // FORMATANDO CUSTO DO TRANSPORTE

  // Tirando %
  transporte = transporte.substring(0, transporte.length -1);
  var transporteF;
  transporteF = parseFloat(transporte);
  transporteF = transporteF/100;
  alert(typeof transporteF, transporteF);


  // FORMATANDO CUSTO DE ARMAZENAMENTO

  // Tirando %
  armazenamento = armazenamento.substring(0, armazenamento.length -1);
  var armazenamentoF;
  armazenamentoF = parseFloat(armazenamento);
  armazenamentoF = armazenamentoF/100;
  alert(typeof armazenamentoF, armazenamentoF);

    
  // FORMATANDO PREÇO

  // Tirando %
  comissao = comissao.substring(0, comissao.length -1);
  var comissaoF;
  comissaoF = parseFloat(comissao);
  comissaoF = comissaoF/100;
  alert(typeof comissaoF, comissaoF);
  
  
  var precoVenda;
  precoVenda = produtoI * (1+(lucroF+transporteF+armazenamentoF+comissaoF));

  alert(precoVenda, typeof precoVenda);

  var precoVendaF = precoVenda.toString();

  function formatSellPri() {
    precoVendaF = precoVendaF.split('.').join('');
  
    // Caso o preço de venda seja maior que 6 digitos
    
    if (precoVendaF.length > 6) {
  
      precoVendaF = precoVendaF.substring(0, precoVendaF.length - 6) + ',' + precoVendaF.substring(precoVendaF.length - 3, precoVendaF.length) + ',' + precoVendaF.substring(precoVendaF.length - 3, precoVendaF.length);
    }
    
    // Caso o preço de venda seja maior que 3 digitos
    else if (precoVendaF.length > 3) {
  
      precoVendaF = precoVendaF.substring(0, precoVendaF.length - 3) + ',' + precoVendaF.substring(precoVendaF.length - 3, precoVendaF.length);
  
    }
  
    return precoVendaF;
  }

  formatSellPri(precoVendaF);

  document.getElementById("sendIN").value = Item;
  document.getElementById("sendSellPri").value = 'R$' + precoVendaF;

};