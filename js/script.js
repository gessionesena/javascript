var id_alunos = ['1a', '1b', '2a', '3a', '2b', '3b'] //ou var id_alunos = Array()
var id_turma = ['_1a', '_1b', '_2a', '_3a', '_2b', '_3b']
var id_resultado = ['res_1a', 'res_1b', 'res_2a', 'res_3a', 'res_2b', 'res_3b']
var id_porcento = ['pctg_1a', 'pctg_1b', 'pctg_2a', 'pctg_3a', 'pctg_2b', 'pctg_3b']



var botao = document.querySelector('#botao');

botao.addEventListener("click", verificaNum);
botao.addEventListener("click", infreq);
botao.addEventListener("click", soma);


function verificaNum(){
    var inputs = document.querySelectorAll('.entrada');
    let teste = false; 
    for(j=0; j<inputs.length; j++)
        if(isNaN(inputs[j].value)){/*método isNaN() verifica se é um número digitado*/
            teste = true;
            inputs[j].value = 0;
        }
    if(teste == true){
        alert('Um ou mais valores não são válidos!');
    }
}

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

    document.querySelector('#total-porcento').innerHTML = totalPorc.toFixed(1);    //toFixed() indica a qtd de casas decimais
}




