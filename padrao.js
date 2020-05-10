window.onload=function(){
	document.getElementById("disable3").value=1;

	document.getElementById("c0").addEventListener("keydown",function() {//funcao addRow
		teste(1);
	},false);

	document.getElementById("btn1").addEventListener("click", function(){//funcao adicionar
		var c=(document.getElementById("tab1").childNodes.length)-4;
		teste(c);
	},false);

	document.getElementById("btn2").addEventListener("click", function(){//funcao remover
	var list = document.getElementById("tab1");
	if(list.lastChild!=list.childNodes[4]){
		list.removeChild(list.lastChild);
		document.getElementById("disable3").value=parseInt(document.getElementById("disable3").value)-1;
	}
	},false);

	document.getElementById("btn3").addEventListener("click", function(){ //funcao limpar
	var list = document.getElementById("tab1");
	while(list.lastChild!=list.childNodes[4]){
		list.removeChild(list.lastChild);
	}
	document.getElementById("disable3").value=1;
	},false);
	
	if(document.title=='Kruskal'){
		document.getElementById("btn5").addEventListener("click", retornaResposta2,false);
	}
	if(document.title=='Dijkstra'){
		document.getElementById("btn5").addEventListener("click", retornaResposta,false);
	}


};

document.addEventListener("change",function(){//funcao enviar conexao
	document.getElementById("conex").value=document.getElementById("disable3").value;
	document.getElementById("a10").max=document.getElementById("vertices").value;
	document.getElementById("a20").max=document.getElementById("vertices").value;
},false);



