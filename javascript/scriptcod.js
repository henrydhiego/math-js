//document.write("teste de mensagem no form!");

//let vnome = prompt("entre com um valor");
//console.log(vnome);
//let confirma=confirm("Confirma ?");
//console.log(confirma);
//if(confirma==true){
  //console.log("Confirmado");
  //alert("Confirmado pelo usuário");
//}
//else{
  //console.log("Não confirmado !");
//}


//window.alert("teste");
//let vteste=window.prompt("teste de entrada");

//console.log(vteste);



function calculoSoma(){
  const v1 = parseInt(document.getElementById("num1").value);
  const v2 = parseInt(document.getElementById("num2").value);
  let soma=v1+v2;
  document.getElementById('total').value = soma;
 
}

function calculoMult(){
  const v1 = parseInt(document.getElementById("num1").value);
  const v2 = parseInt(document.getElementById("num2").value);
  let mult=v1*v2;
  document.getElementById("totalMult").value = mult;
  
}

function calculoDiv(){
  const v1 = parseFloat(document.getElementById("num1").value);
  const v2 = parseFloat(document.getElementById("num2").value);
  let divisao=v1/v2;
  document.getElementById("totalDiv").value = divisao;
  
}

function calculoSub(){
  const v1 = parseInt(document.getElementById("num1").value);
  const v2 = parseInt(document.getElementById("num2").value);
  let subtracao=v1-v2;
  document.getElementById("totalSub").value = subtracao;
  
}

