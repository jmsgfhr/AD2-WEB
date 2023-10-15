var total = 0;

function ChangeMaquina(){
    document.getElementById("selCapsula").value = "-----";
    var maquina = document.getElementById("selMaquina").value;
    var qtdeMaquina = document.getElementById("maquinaQtd").value;
    document.getElementById("valUnit").value = maquina * qtdeMaquina;
}

function ChangeCapsula(){
    document.getElementById("selMaquina").value = "-----";
    var capsula = document.getElementById("selCapsula").value;
    var qtdeCapsula = document.getElementById("capsulaQtd").value;
    document.getElementById("valUnit").value = capsula * qtdeCapsula;
}

function AddMaquina(){
    var maquina = document.getElementById("selMaquina");
    if(maquina.value == "-----"){
        alert("Nenhum Produto selecionado!");
        return;
    }
    var qtdeMaquina = document.getElementById("maquinaQtd").value;
    document.getElementById("valUnit").value = "";
    var textArea = document.getElementById("lisPedArea");
    
    textArea.value += maquina.options[maquina.selectedIndex].text + " (" + qtdeMaquina + ") R$ " + qtdeMaquina * maquina.value + ",00\n";
    
    total += qtdeMaquina * maquina.value;
    document.getElementById("valTot").value = total;
    
    document.getElementById("selMaquina").value = "-----";
    document.getElementById("maquinaQtd").value = 1;
}

function AddCapsula(){
    var capsula = document.getElementById("selCapsula");
    if(capsula.value == "-----"){
        alert("Nenhum Produto selecionado!");
        return;
    }
    
    var qtdeCapsula = document.getElementById("capsulaQtd").value;
    document.getElementById("valUnit").value = "";
    var textArea = document.getElementById("lisPedArea");
    
    textArea.value += capsula.options[capsula.selectedIndex].text + " (" + qtdeCapsula + ") R$ " + qtdeCapsula * capsula.value + ",00\n";
    
    total += qtdeCapsula * capsula.value;
    document.getElementById("valTot").value = total;
    
    document.getElementById("selCapsula").value = "-----";
    document.getElementById("capsulaQtd").value = 1;
}

function Limpar() {
    document.getElementById("selCapsula").value = "-----";
    document.getElementById("capsulaQtd").value = 1;
    document.getElementById("selMaquina").value = "-----";
    document.getElementById("maquinaQtd").value = 1;
    total = 0;
    document.getElementById("valTot").value = "";
    document.getElementById("lisPedArea").value = "";
    document.getElementById("valUnit").value = "";
}