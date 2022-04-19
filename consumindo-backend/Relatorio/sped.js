class Liquidez{
  constructor (liquidez_balanco){
      console.log(liquidez_balanco)
      this.liquidez_indices = liquidez_balanco[0].liquidez_indices
      this.liquidez_corrente = this.liquidez_indices.indice_liquidez_corrente;
      this.liquidez_seca = this.liquidez_indices.indice_liquidez_seca;
      this.liquidez_imediata = this.liquidez_indices.indice_liquidez_imediata;
      this.liquidez_geral = this.liquidez_indices.indice_liquidez_geral;
      this.terceiros = this.liquidez_indices.participacao_capital_terceiros;
      this.patrimonio_social = this.liquidez_indices.imobilizacao_patrimonio_social;
      this.endividamento_geral = this.liquidez_indices.indice_endividamento_geral;
      this.solvencia_geral = this.liquidez_indices.indice_solvencia_geral;
  }

  info() {
      console.log(this.nome);
      console.log(this.liquidez_corrente);
      console.log(this.liquidez_corrente.indice);
      console.log(this.liquidez_corrente.resultado);
      console.log(this.liquidez_corrente.situacao);
  }
};

function format(result){
  return JSON.parse(result)
}

function get_liquidez(liquidez_balanco){
  //document.querySelector("#saida").innerText = result.success;
 
  //if (result.success){
    console.log(liquidez_balanco)
    console.log('Here')
    const indices = new Liquidez(liquidez_balanco);
    indices.info();
    let indices_lst = ['liquidez_corrente', 'liquidez_geral', 'endividamento_geral', 'patrimonio_social', 'liquidez_imediata',
    'liquidez_seca', 'terceiros', 'solvencia_geral'];
    for (let i=0; i<indices_lst.length; i++){
      document.getElementsByClassName("."+indices_lst[i]+"_indice")[0].innerText = indices[indices_lst[i]].indice;
      document.getElementsByClassName("."+indices_lst[i]+"_situacao")[0].innerText = indices[indices_lst[i]].situacao;
    }  
  //}
}

function get_table(result,result2){
  document.querySelector("#saida").innerText = result.success;
  console.log(result);
  if (result.success){
    indices_lst = ["ativo_circulante", "disponibilidades","estoques","passivo_nao_circulante","patrimonio_liquido"];
    var tbody = document.querySelector("#table_tbody");
    for (var i=0; i<indices_lst.length; i++){
      var item = result.table[indices_lst[i]];
      var item2 = result.table[indices_lst[i]];
      console.log(item)
      let row = document.createElement('tr')
      let row_var = document.createElement('td')
      row_var.innerHTML = indices_lst[i].toLowerCase();
      let row_data1 = document.createElement('td')
      row_data1.innerHTML = formatLocale(item2[0]);
      let row_data2 = document.createElement('td')
      row_data2.innerHTML = formatLocale(item2[1]);
      let row_data3 = document.createElement('td')
      row_data3.innerHTML = formatLocale(item2[2]);
      let row_data4 = document.createElement('td')
      row_data4.innerHTML = formatLocale(item2[3]);
      let row_data5 = document.createElement('td')
      row_data5.innerHTML = formatLocale(item[0]);
      let row_data6 = document.createElement('td')
      row_data6.innerHTML = formatLocale(item[1]);
      let row_data7 = document.createElement('td')
      row_data7.innerHTML = formatLocale(item[2]);
      let row_data8 = document.createElement('td')
      row_data8.innerHTML = formatLocale(item[3]);
      row.appendChild(row_var);
      row.appendChild(row_data1);
      row.appendChild(row_data2);
      row.appendChild(row_data3);
      row.appendChild(row_data4);
      row.appendChild(row_data5);
      row.appendChild(row_data6);
      row.appendChild(row_data7);
      row.appendChild(row_data8);
      tbody.appendChild(row)
    }
  }
}

function formatLocale(value){
  return value.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
}

function relatorio(result){
  if("liquidez_balanco" in result.data){
    get_liquidez(result.data.liquidez_balanco)
  }
  if("boavista_pf" in result.data){
    // get_boavista_pf(result.data.boavista_pf)
  }
}

var raw = {
  "balanco": ["https://server.ectarepay.com.br/ectareArquivos/pdfviewer2619204387105330867.pdf","https://server.ectarepay.com.br/ectareArquivos/pdfviewer2619204387105330867.pdf"],
  "balanco_anterior": ["https://server.ectarepay.com.br/ectareArquivos/pdfviewer2619204387105330867.pdf"],
  "dre": ["https://server.ectarepay.com.br/ectareArquivos/DRE.pdf"],
  "dre_anterior": ["https://server.ectarepay.com.br/ectareArquivos/DRE.pdf"],
  "boavista": ["https://server.ectarepay.com.br/ectareArquivos/bomdia.json","https://server.ectarepay.com.br/ectareArquivos/RenataOliveira.json"]
};

console.log(raw)
var requestOptions = {
  headers: {
    "Accept": "application/json, text/javascript, /; q=0.01",
    "Access-Control-Allow-Headers": "Content-Type",
    'Content-Type':'application/json; charset=UTF-8'
  },  
  method: 'POST',
  body: JSON.stringify(raw),
  redirect: 'follow',
  cache:'no-cache'
};

let success;
fetch("http://analisededados.ectare.com.br/relatorio", requestOptions)
  .then(res => res.json())
  .then(result => {
    console.log(result)
    success = result.success
    relatorio(result)
  })
  // .then(result => msg.innerHTML = result.data.indice_liquidez_imediata.indice)
  .catch(error => {
    console.log('error', error);
    document.querySelector("#saida").innerHTML = error;
  });
console.log(success)

