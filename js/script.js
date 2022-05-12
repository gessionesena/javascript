
function mostrar(){
    var id_alunos = document.getElementById('1a').id;
    console.log(id_alunos)
}
/*
switch(id_alunos){
    case '1a':
        text_area.addEventListener('change',infreq_1a);
}
*/










function infreq_1a(){
    
    var alunos = document.getElementById('1a').value;
    var totalTurma = document.getElementById('_1a').value;

    var infreq = totalTurma - alunos;
    
    //Inserir resultado no html

    document.getElementById('res_1a').innerText = infreq;
}

function infreq_1b(){
    
    var alunos = document.getElementById('1b').value;
    var totalTurma = document.getElementById('_1b').value;

    var infreq = totalTurma - alunos;
    
    //Inserir resultado no html

    document.getElementById('res_1b').innerText = infreq;
}
