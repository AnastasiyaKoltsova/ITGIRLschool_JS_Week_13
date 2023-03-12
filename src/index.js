const commentName = document.querySelector('.text-field__input1');
const paragraph1 = document.querySelector('#item-1');
const commentBody = document.querySelector('.comment-box__textarea');
const paragraph2 = document.querySelector('#item-2');
const url = document.querySelector('.text-field__input2');
const paragraph3 = document.querySelector('#item-3');
const paragraphDate = document.querySelector('.time');
const checkboxYes = document.querySelector('.checkbox-yes');

function checkSpam(str) {
    return str.replace(/viagra|xxx/gi, '***');
}

function checkNameIfYes() {
    paragraph1.textContent = commentName.value
        .trim()
        .toLowerCase()
        .replace(/(^|\s)\S/g, (chr) => chr.toUpperCase());
}

function checkNameIfNo() {
    paragraph1.textContent = 'user';
}

function displayTime() {
    paragraphDate.innerHTML = timeConverter(Math.floor(Date.now() / 1000));
}

function avatar(url) {
    if (url.value.length === 0) {
        let avatarArray = ["./src/images/avatar1.png", "./src/images/avatar2.png", "./src/images/avatar3.png", "./src/images/avatar4.png", "./src/images/avatar5.png"];
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
    paragraph2.textContent = checkSpam(commentBody.value);
    displayTime();
}

function timeConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}