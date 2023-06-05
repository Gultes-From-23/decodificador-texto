const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "/+"`
// `A letra "i" é convertida para "ei**"`
// `A letra "a" é convertida para "ai*"`
// `A letra "o" é convertida para "*ao-"`
// `A letra "u" é convertida para "/oua"`

// Também foram adicionadas "chaves" para todas as consoantes e números de 0 a 9

// Não é viável usar uma encriptação com uma letra que vai ser lida posteriormente na matriz,
// por exemplo "o" = "otu", nesse caso ao digitar "o"  e clicar em encriptar retornará de forma
// incorreta "otula", comprometendo a eficiência do programa


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [
        ["e", "/+"], ["i", "ei*"], ["a", "ai"], ["o", "ao-"], ["u", "/oua"],
        ["b", "bae"], ["c", "cab"], ["d", "duo"], ["f", "fec"], ["g", "geb"],
        ["h", "hac"], ["j", "jag"], ["k", "kod"], ["l", "lab"], ["m", "mog"],
        ["n", "nkl"], ["p", "poc"], ["q", "qua"], ["r", "rua"], ["s", "sob"],
        ["t", "tuk"], ["v", "vem"], ["w", "val"], ["x", "car"], ["y", "sak"],
        ["z", "nur"], ["0", "zurg"], ["1", "brek"], ["2", "check"], ["3", "mate"],
        ["4", "lion"], ["5", "tora"], ["6", "edo"], ["7", "guioza"], ["8", "machine"],
        ["9", "number"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [
        ["e", "/+"], ["i", "ei*"], ["a", "ai"], ["o", "ao-"], ["u", "/oua"],
        ["b", "bae"], ["c", "cab"], ["d", "duo"], ["f", "fec"], ["g", "geb"],
        ["h", "hac"], ["j", "jag"], ["k", "kod"], ["l", "lab"], ["m", "mog"],
        ["n", "nkl"], ["p", "poc"], ["q", "qua"], ["r", "rua"], ["s", "sob"],
        ["t", "tuk"], ["v", "vem"], ["w", "val"], ["x", "car"], ["y", "sak"],
        ["z", "nur"], ["0", "zurg"], ["1", "brek"], ["2", "check"], ["3", "mate"],
        ["4", "lion"], ["5", "tora"], ["6", "edo"], ["7", "guioza"], ["8", "machine"],
        ["9", "number"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}
