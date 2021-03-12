function info(){
    alert("No planeta Alpha vive a criatura Blobs que se alimenta diariamnete! Ele esta com fome, quanto suprimeto você tem??");


    var idade=prompt("Digite o suprimento para o Blobs (kg):");
    var i;
    var d;
    if (idade!=null)
      {
      i="Suprimento: " + idade + " Kg.";
      d="o suprimento durará: " + idade*2 + " dias.";
      document.getElementById("resultkg").innerHTML=i;
      document.getElementById("resultday1").innerHTML=d;
      }
}

function day()
{

}

//refeição diária 1/2
var refeicao = 1;
//dias
var dias = 10;

//return
var a = "em um periodo de";
var b = "x dias!";
var c = a.concat(b);

typeof dias;