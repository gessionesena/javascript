
var id_alunos = ['1a', '1b', '2a', '3a', '2b', '3b'] //ou var id_alunos = Array()
var id_turma = ['_1a', '_1b', '_2a', '_3a', '_2b', '_3b']
var id_resultado = ['res_1a', 'res_1b', 'res_2a', 'res_3a', 'res_2b', 'res_3b']
var id_porcento = ['pctg_1a', 'pctg_1b', 'pctg_2a', 'pctg_2b', 'pctg_3a', 'pctg_3b']


var botao = document.querySelector('#botao');

botao.addEventListener("click", infreq);
/*botao.addEventListener("click", textwhatsapp);*/
botao.addEventListener("click", soma);


/*FUNÇÃO PARA CALCULAR INFREQUÊNCIA*/ 

function infreq(){

    for(i=0; i<id_alunos.length; i++){
    
        var alunos = document.getElementById(id_alunos[i]).value;
        var totalTurma = document.getElementById(id_turma[i]).value;
        //calculando infrequência do dia em cada turma
        var infreq = totalTurma - alunos;
        //calculando porcentagem de frequência de alunos do dia por turma
        var freqPorcentagem = (alunos/totalTurma)*100;
    
        //Inserir resultado no html
        document.getElementById(id_porcento[i]).innerText = freqPorcentagem.toFixed(1);
        document.getElementById(id_resultado[i]).innerText = infreq;

    }
}

//FUNÇÃO PARA CALCULAR SOMAS DA TABELA

function soma(){
    var cont = 0;
    var cont2 = 0;
    var totalPorc = 0;
//laço para calcular soma da qtd total de alunos das turmas
    for(i=0; i<id_alunos.length; i++){
    
        var qtd_alunosTurma = parseInt(document.getElementById(id_turma[i]).value);
        cont = cont + qtd_alunosTurma; 
    }
    document.getElementById('total').innerHTML = cont;
    
//laço para calcular soma dos alunos presentes do dia
    for(i=0; i<id_alunos.length; i++){
    
        var qtd_alunosPresentes = parseInt(document.getElementById(id_alunos[i]).value);
        cont2 = cont2 + qtd_alunosPresentes; 
    }

    document.querySelector('#total-presentes').innerHTML = cont2;

//Calcular soma total da infrequência do dia
    
    document.querySelector('#total-infrequencia').innerHTML = cont - cont2;

//Calculart porcentagem total de frequencia DO DIA
    totalPorc = (cont2/cont)*100;     

    document.querySelector('#total-porcento').innerHTML = totalPorc.toFixed(1);    
}


/*FUNÇÃO PARA CRIAR TEXTO P/ WHATSAPP

function textwhatsapp(){
    var lista = document.querySelector('#area-texto-whats');/*criando a variavel lista, q corresponde a area do texto a ser gerado
    var aux = [];
    
    for(i=0; i<id_alunos.length; i++){
        alunos = document.getElementById(id_alunos[i]).value;
        totalTurma = document.getElementById(id_turma[i]).value;
        infreq = totalTurma - alunos;

        
        aux[i] = infreq; /*guardando as infrequencias no array
        
        var itemLista = document.createElement('li');/*a cada ciclo um item é criado na lista
        itemLista.appendChild(document.createTextNode(aux[i]));
        lista.appendChild(itemLista);
    
    }
    
    
}*/
/*
var botao_whatsapp = document.querySelector('#botao-whatsapp');
botao_whatsapp.addEventListener("click", abrirWhatsapp);

FUNÇÃO PARA ABRIR WHATSAPPWEB

function abrirWhatsapp(){
    window.open('https://web.whatsapp.com/', target='_blank')
}*/



