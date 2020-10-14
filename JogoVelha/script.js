//posições escolhidas de x e o
let X = [];
let O = [];
let pontosX = 0;
let pontosO = 0;

let vez = 'X'; //vez eh o simbolo da jogada --  pode representar X ou O(le-se bolinha)
let espaco = window.document.querySelectorAll("div");
const respostas = [
    ['d1', 'd2', 'd3'],
    ['d4', 'd5', 'd6'],
    ['d7', 'd8', 'd9'],
    ['d1', 'd4', 'd7'],
    ['d2', 'd5', 'd8'],
    ['d3', 'd6', 'd9'],
    ['d1', 'd5', 'd9'],
    ['d3', 'd5', 'd7']
];



function comparar(vez) {
    let jogada = [];
    if (vez == 'X') {
        jogada = X;
    } else {
        jogada = O;
    }

    let resultado = 0;
    for (let res in respostas) {

        resultado = 0;
        for (let i in respostas[res]) {

            for (let lugar in jogada) {

                if (jogada[lugar] == respostas[res][i]) {
                    resultado++;
                }

            }

            if (resultado >= 3) {
                ganhou(vez);
            }
        }
    }
}

function ganhou(vez) {
    setTimeout(() => {
        alert(`${vez} Ganhou!`);
    }, 200);

    if(vez == 'X'){
        pontosX++;
        document.getElementById('X').innerHTML = pontosX;
    }else{
        pontosO++;
        document.getElementById('O').innerHTML = pontosO;
    }
    X = [];
    O = [];

    setTimeout(() => {
        for (let d of espaco) {
            d.style.backgroundImage = '';
        }
    }, 400);

}

//quando clicado no espaço
function simbolo(event) {

    if(event.target.style.backgroundImage == ''){

        event.target.style.backgroundImage = `url(imagens/${vez}.png)`;

        if (vez == 'X') {
            X.push(event.target.id);
            if (X.length >= 3) {
                comparar(vez);
            }
            vez = 'O';
        } else if (vez == 'O') {
            O.push(event.target.id);
            if (O.length >= 3) {
                comparar(vez);
            }
            vez = 'X';
        }

    }

    if(X.length >= 4 && O.length >= 4){
        setTimeout(() => {
        alert('Deu velha!! ninguem ganhou.');
        },400);

        X = [];
        O = [];

        setTimeout(() => {
            for (let d of espaco) {
                d.style.backgroundImage = '';
            }
        }, 400);
    }
}

for (let d of espaco) {
    d.onclick = simbolo;
}
