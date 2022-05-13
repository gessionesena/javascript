
var id_alunos = ['1a', '1b', '2a', '2b', '3a', '3b'] //ou var id_alunos = Array()
var id_turma = ['_1a', '_1b', '_2a', '_2b', '_3a', '_3b']
var id_resultado = ['res_1a', 'res_1b', 'res_2a', 'res_2b', 'res_3a', 'res_3b']



for(i=0; i<id_alunos.length; i++){
    var focus = document.getElementById(id_alunos[i])
    focus.addEventListener("change", infreq)
}

function infreq(){
    
    var alunos = document.getElementById(id_alunos[i]).value;
    var totalTurma = document.getElementById(id_turma[i]).value;

    var infreq = totalTurma - alunos;
    
    //Inserir resultado no html

    document.getElementById(id_resultado[i]).innerText = infreq;
}

