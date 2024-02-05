let title1 = document.querySelector('#title1');
let title2 = document.querySelector('#title2');
let pescaImg = document.querySelector('#pesca-img')
let editImg = document.querySelector('#edit-img')
let texto = document.querySelector('#input-text')
let resultado = document.querySelector('#input-resultado')
let copiar = document.querySelector('.copiar')

function criptografa() {
    let texto = document.querySelector('#input-text').value;

    texto = texto
    .replace(/[EÉÈÊËeéèêë]/g, 'enter')
    .replace(/[IÍÌÎÏiíìîï]/g, 'imes')
    .replace(/[AÁÀÃÂÄaáàãâä]/g, 'ai')
    .replace(/[OÓÒÕÔÖoóòõôö]/g, 'ober')
    .replace(/[UÚÙÛÜuúùûü]/g, 'ufat');


    if (!texto) {
        
        alert('A area de texto pode estar vazio. Por favor, preencha corretamente.')

    } else {
        title1.remove();
        title2.remove();
        editImg.remove();
        resultado.removeAttribute("hidden")
        copiar.removeAttribute("hidden");

        resultado.innerHTML = texto;
    }
}

function descriptografar() {
    let textoDescrip = document.querySelector("#input-text").value;

    textoDescrip = textoDescrip
        .replaceAll(/enter/g, "e")
        .replaceAll(/imes/g, "i")
        .replaceAll(/ai/g, "a")
        .replaceAll(/ober/g, "o")
        .replaceAll(/ufat/g, "u");


    if (!textoDescrip) {

        alert('A area de texto pode estar vazio. Por favor, preencha corretamente.')

    } else {

        title1.remove();
        title2.remove();
        editImg.remove();
        resultado.removeAttribute("hidden")
        copiar.removeAttribute("hidden");

        resultado.innerHTML = textoDescrip;
    }
}

function copyText() {
    const paragraph = resultado.innerHTML;

    if (paragraph !== '') {
        navigator.clipboard.writeText(paragraph)
            .then(() => {
                alert("Texto copiado para a área de transferência!");

                
                setTimeout(() => {
                    pasteText();
                }, 100);

                clearParagraph();
            })

            texto.value = "";
    }
}