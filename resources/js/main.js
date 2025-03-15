const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./resources/img/aprovado.png" alt=""></img>';
const imgReprovado = '<img src="./resources/img/reprovado.png" alt=""></img>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';


let linhas = '';
let linhaResultado = '';



form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    adicionaLinha();
    calculaMedia();
    atualizaTabela();

    

    
    nomeAtividade.focus();
})

function adicionaLinha(){
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');
    
    if(notas.includes(nomeAtividade.value)){
        alert('Atividade já inserida anteriormente');
        return;
    }else{
        atividades.push(nomeAtividade.value);
        notas.push(parseFloat(notaAtividade.value));
    
        linha = '<tr>';
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    nomeAtividade.value = '';
    notaAtividade.value = '';
}

function calculaMedia(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerText = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;

}

function calculaMediaFinal(){
    let somaNotas = 0

    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }
    
    const media = somaNotas / notas.length;

    return media;
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}