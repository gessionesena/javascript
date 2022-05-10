function calcularInfreq(qtdAlunoPresente, qtdAlunoTurma){
    var infreq = qtdAlunoTurma - qtdAlunoPresente;
    
    return infreq;
}

var qtdAlunoPresente = prompt('Qtd de alunos presentes na sala: ');
var qtdAlunoTurma = prompt('Qtd de alunos da turma: ');

var infreq = calcularInfreq(qtdAlunoPresente, qtdAlunoTurma);
