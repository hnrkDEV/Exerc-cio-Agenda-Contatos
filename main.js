const form = document.getElementById("form")
const thead = document.getElementById("thead")
let linhas = ''; 
const nomes = []
const numeros = []

    form.addEventListener("submit", function(e){
    e.preventDefault()
    adicionarLinha()
    atualizaTabela()
    document.getElementById('table').style.display = 'inline-block'
    })

 function adicionarLinha(){
    const nome = document.getElementById("input-nome")
    const numero = document.getElementById("input-telefone")

    let linha = "<tr>";
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${numero.value}</td>`;
    linha += "</tr>";
    linhas += linha

    nomes.push(nome.value)
    numeros.push(numero.value)

    nome.value = ""
    numero.value = ""
    } 

function atualizaTabela(){
    const corpoTabela = document.getElementById("tbody");
    corpoTabela.innerHTML = linhas; 
    }



