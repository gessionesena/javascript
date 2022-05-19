
var id_alunos = ['1a', '1b', '2a', '3a', '2b', '3b'] //ou var id_alunos = Array()
var id_turma = ['_1a', '_1b', '_2a', '_3a', '_2b', '_3b']
var id_resultado = ['res_1a', 'res_1b', 'res_2a', 'res_3a', 'res_2b', 'res_3b']


var botao = document.querySelector('#botao');

botao.addEventListener("click", infreq);
botao.addEventListener("click", textwhatsapp);
botao.addEventListener("click", soma);
//botao.addEventListener("dblclick", textwhatsapp);



/*FUNÇÃO PARA CALCULAR INFREQUÊNCIA*/ 

function infreq(){

    for(i=0; i<id_alunos.length; i++){
    
        var alunos = document.getElementById(id_alunos[i]).value;
        var totalTurma = document.getElementById(id_turma[i]).value;

        var infreq = totalTurma - alunos;
    
        //Inserir resultado no html

        document.getElementById(id_resultado[i]).innerText = infreq;
    }
}
/*FUNÇÃO PARA CRIAR TEXTO P/ WHATSAPP*/

function textwhatsapp(){
    var lista = document.querySelector('#area-texto-whats');/*criando a variavel lista, q corresponde a area do texto a ser gerado*/
    var aux = [];/*array para guardar as infrequencias*/
    
    for(i=0; i<id_alunos.length; i++){
        alunos = document.getElementById(id_alunos[i]).value;
        totalTurma = document.getElementById(id_turma[i]).value;
        infreq = totalTurma - alunos;

        
        aux[i] = infreq; /*guardando as infrequencias no array*/
        
        var itemLista = document.createElement('li');/*a cada ciclo um item é criado na lista*/
        itemLista.appendChild(document.createTextNode(aux[i]));
        lista.appendChild(itemLista);
        
        
       // texto.innerHTML = '*INFREQUÊNCIA DIA/TURMA* <br />1ºA _'+aux[0]+'_ <br />1ºB _'+aux[1]+
       // '_<br />2ºA _'+aux[2]+'_<br />3ºA _'+aux[3]+'_<br />2ºB _'+aux[4]+'_<br />3ºB _'+aux[5]+'_';
    }
    
    
}

var botao_whatsapp = document.querySelector('#botao-whatsapp');
botao_whatsapp.addEventListener("click", abrirWhatsapp);

/*FUNÇÃO PARA ABRIR WHATSAPPWEB*/

function abrirWhatsapp(){
    window.open('https://web.whatsapp.com/', target='_blank')
}




function soma(){
    var cont = 0;
    var cont2 = 0;
    var cont3 = 0;

    for(i=0; i<id_alunos.length; i++){
    
        var qtd_alunosTurma = parseInt(document.getElementById(id_turma[i]).value);
        cont = cont + qtd_alunosTurma; 
       
        console.log(cont);

        /*var qtd_alunosPresentes = parseInt(document.getElementById(id_alunos[i]).value);
        cont2 =cont2 + qtd_alunosPresentes;
        console.log(qtd_alunosPresentes);
        console.log(cont2);
        var qtd_alunosInfreq = qtd_alunosTurma - qtd_alunosPresentes;
        cont3 = cont3 + qtd_alunosInfreq;
        console.log(qtd_alunosInfreq);
        console.log(cont3);*/
    }
    
    var total = document.querySelector('#total');
    
    //document.querySelector('#total-presentes').innerText(cont2);
    //document.querySelector('#total-infrequencia').innerText(cont3);
}