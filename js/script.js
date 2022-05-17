
var id_alunos = ['1a', '1b', '2a', '2b', '3a', '3b'] //ou var id_alunos = Array()
var id_turma = ['_1a', '_1b', '_2a', '_2b', '_3a', '_3b']
var id_resultado = ['res_1a', 'res_1b', 'res_2a', 'res_2b', 'res_3a', 'res_3b']


var botao = document.querySelector('#botao');

botao.addEventListener("click", infreq);
botao.addEventListener("dblclick", textwhatsapp);



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
    for(i=0; i<id_alunos.length; i++){
        var alunos = document.getElementById(id_alunos[i]).value;
        var totalTurma = document.getElementById(id_turma[i]).value;

        var infreq = totalTurma - alunos;

        var aux = [];/*array para guardar as infrequencias*/
        aux[i] = infreq; /*guardando as infrequencias no array*/
        

        texto = document.querySelector('#area-texto-whats');
        texto.innerHTML = '*INFREQUÊNCIA DIA/TURMA* <br />1ºA _'+aux[0]+'_ <br />1ºB _'+aux[1]+
        '_<br />2ºA _'+aux[2]+'_<br />3ºA _'+aux[3]+'_<br />2ºB _'+aux[4]+'_<br />3ºB _'+aux[5]+'_';
    }
    
    
}

var botao_whatsapp = document.querySelector('#botao-whatsapp');
botao_whatsapp.addEventListener("click", abrirWhatsapp);

/*FUNÇÃO PARA ABRIR WHATSAPPWEB*/

function abrirWhatsapp(){
    window.open('https://web.whatsapp.com/', target='_blank')
}