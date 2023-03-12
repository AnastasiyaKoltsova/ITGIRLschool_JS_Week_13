const input1 = document.querySelector('.text-field__input1');
const paragraph1 = document.querySelector('#item-1');
const input2 = document.querySelector('.comment-box__textarea');
const paragraph2 = document.querySelector('#item-2');
const url = document.querySelector('.text-field__input2');
const paragraph3 = document.querySelector('#item-3');
const paragraphDate = document.querySelector('.time');
const checkboxYes = document.querySelector('.checkbox-yes');

function checkSpam(str) {
    return str.replace(/viagra|xxx/gi, '***');
}

function checkNameIfYes() {
    paragraph1.textContent = input1.value
        .trim()
        .toLowerCase()
        .replace(/(^|\s)\S/g, (chr) => chr.toUpperCase());
}

function checkNameIfNo() {
    paragraph1.textContent = 'user';
}

function displayTime() {
    paragraphDate.innerHTML = Date();
}

function avatar(url) {
    if (url.value.length === 0) {
        let avatarArray = ["./src/images/avatar1.jpeg", "./src/images/avatar2.jpeg", "./src/images/avatar3.jpeg", "./src/images/avatar4.jpeg", "./src/images/avatar5.jpeg"];
        let randomAvatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];
        paragraph3.setAttribute('src', randomAvatar);
    } else {
        paragraph3.setAttribute('src', url.value);
    }
}

function getComment(){
    if (checkboxYes.checked == true) {
        checkNameIfYes();
    } else {
        checkNameIfNo();
    }
    avatar(url);
    paragraph2.textContent = checkSpam(input2.value);
    displayTime();
}