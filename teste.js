this.valores=new Array(new Array());
function teste(c) {
	var formulario = document.getElementById("formulario");
	
if(!document.getElementById("line"+c)){	
	var row=document.createElement("tr");
	row.id="line"+c;
	document.getElementById("tab1").appendChild(row);

	var td1=document.createElement("td");
	td1.id="v1"+c;
	document.getElementById("line"+c).appendChild(td1);
	
	var v1=document.createElement("input");
	v1.type="number";
	v1.name="a1"+c;
	v1.min=1;
	v1.max=formulario.vertices.value;
	v1.id="a1"+c;
	v1.required=true;
	document.getElementById("v1"+c).appendChild(v1);

	var td2=document.createElement("td");
	td2.id="v2"+c;
	document.getElementById("line"+c).appendChild(td2);

	var v2=document.createElement("input");
	v2.type="number";
	v2.name="a2"+c;
	v2.min=1;
	v2.max=formulario.vertices.value;
	v2.id="a2"+c;
	v2.required=true;
	document.getElementById("v2"+c).appendChild(v2);

	var td3=document.createElement("td");
	td3.id="custo"+c;
	document.getElementById("line"+c).appendChild(td3);

	var custo=document.createElement("input");
	custo.type="number";
	custo.name="c"+c;
	if(document.title!='Floyd')custo.min=1;
	custo.id="c"+c;
	custo.required=true;
	custo.addEventListener("keypress",function (e){
		e=c+1;
		teste(e);
	},false);
	document.getElementById("custo"+c).appendChild(custo);
	formulario.disable3.value=parseInt(formulario.disable3.value)+1;
}
}
/*
function conexao(){
	var conex=pegarIndice();	
//	document.getElementById("btn4").value=pegarIndice();
	return conex;
}
*/
function retornaResposta(){
	var formulario = document.getElementById("formulario");
	var vertices= formulario.vertices.value;
	var conex=(document.getElementById("tab1").childNodes.length)-4;
	var contador=0;
	if(formulario.orig.value>vertices || formulario.dest.value>vertices || formulario.orig.value==0 || formulario.dest.value==0 || formulario.vertices.value==0){
		if(formulario.orig.value==0 || formulario.dest.value==0 || formulario.vertices.value==0){
			alert("Valores não preenchidos!");
		}else{
			alert("Preencha os campos de origem e destino corretamente!");
			document.getElementById("dest").value="";
			document.getElementById("orig").value="";
		}
	}else{
		g=new Grafo(vertices-1);
		for(var c=0;c<conex;c++){
			if(document.getElementById("a1"+c).value>vertices || document.getElementById("a2"+c).value>vertices || document.getElementById("a1"+c).value==0 || document.getElementById("a2"+c).value==0 || document.getElementById("c"+c).value==0){
				contador++;
				if(document.getElementById("a1"+c).value==0 || document.getElementById("a2"+c).value==0 || document.getElementById("c"+c).value==0){
					alert("Valores não preenchidos!");
				}
				if(document.getElementById("a1"+c).value>vertices || document.getElementById("a2"+c).value>vertices) {
				alert("Vértice inputado maior que o número de vértices declarado, preencha os campos corretamente!");
				document.getElementById("a1"+c).value="";
				document.getElementById("a2"+c).value="";
				document.getElementById("c"+c).value="";
				}
			}else{
				g.addAresta(document.getElementById("a1"+c).value,document.getElementById("a2"+c).value,document.getElementById("c"+c).value,document.getElementById("cND").checked);
			}
		}
		if(contador==0){
			g.dijskra(formulario.orig.value,formulario.dest.value);
			formulario.disable1.value=g.retornaValorCusto();
			formulario.disable2.value=g.retornaValorRota();
		}
	}
}

function retornaResposta2(){//kruskal
	var formulario = document.getElementById("formulario");
	var vertices= formulario.vertices.value;
	var conex=(document.getElementById("tab1").childNodes.length)-4;
	var contador1=0;
	var contador2=0;
	if(formulario.vertices.value==0){
			alert("Valores não preenchidos!");
	}else{
		g=new Grafo(vertices-1);
		for(var c=0;c<conex;c++){
			if(document.getElementById("a1"+c).value>vertices || document.getElementById("a2"+c).value>vertices || document.getElementById("a1"+c).value==0 || document.getElementById("a2"+c).value==0 || document.getElementById("c"+c).value==0){
				contador1++;
				if(document.getElementById("a1"+c).value==0 || document.getElementById("a2"+c).value==0 || document.getElementById("c"+c).value==0){
					alert("Valores não preenchidos!");
				}
				if(document.getElementById("a1"+c).value>vertices || document.getElementById("a2"+c).value>vertices) {
				alert("Vértice inputado maior que o número de vértices declarado, preencha os campos corretamente!");
				}
			}else{
				g.addAresta(document.getElementById("a1"+c).value,document.getElementById("a2"+c).value,document.getElementById("c"+c).value);
				if(document.getElementById("a1"+c).value==vertices || document.getElementById("a2"+c).value==vertices) {contador2++;}
			}
		}
		if(contador1==0 && contador2>0){
			g.kruskal();
			formulario.disable1.value=g.retornaValorCusto();
			formulario.disable2.value=g.retornaValorRota();
		}else{
			alert("Preencha os campos corretamente!");
			document.getElementById("vertices").value="";			
		}
	}
}