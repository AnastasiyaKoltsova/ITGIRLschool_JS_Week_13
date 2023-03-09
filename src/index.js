const input1 = document.querySelector('.text-field__input1');
const paragraph1 = document.querySelector('#item-1');
const input2 = document.querySelector('.comment-box__textarea');
const paragraph2 = document.querySelector('#item-2');
const input3 = document.querySelector('.text-field__input2');
const paragraph3 = document.querySelector('#item-3');

function checkSpam(str) {
    return str.replace(/viagra|xxx/gi, '***');
}

function checkName() {
    paragraph1.textContent = input1.value
        .trim()
        .toLowerCase()
        .replace(/(^|\s)\S/g, (chr) => chr.toUpperCase());
}

function getComment(){
    paragraph3.setAttribute('src', input3.value);
    paragraph2.textContent = checkSpam(input2.value);
}