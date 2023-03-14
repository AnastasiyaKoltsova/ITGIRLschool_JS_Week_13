const wrapper = document.querySelector('.wrapper');
const commentName = document.querySelector('.text-field__input1');
const commentBody = document.querySelector('.comment-box__textarea');
const avatarLink = document.querySelector('.text-field__input2');
const checkboxYes = document.querySelector('.checkbox-yes');

function getImage() {
    const avatarArray = ["./src/images/avatar1.png", "./src/images/avatar2.png", "./src/images/avatar3.png", "./src/images/avatar4.png", "./src/images/avatar5.png"];
    const randomAvatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];
    return randomAvatar;
}

function updateName() {
    const newName = commentName.value
        .trim()
        .toLowerCase()
        .replace(/(^|\s)\S/g, (chr) => chr.toUpperCase());
    return newName;
}

function convertTime(UNIX_timestamp){
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + 'at' + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

function checkSpam(str) {
    return str.replace(/viagra|xxx/gi, '***');
}

function getComment(){
    let post = document.createElement('div');
    post.classList.add('post-item'); 
    wrapper.append(post);

    let container = document.createElement('div');
    container.classList.add('container'); 
    post.append(container);

    const messageAvatar = document.createElement('img');
    if (avatarLink.value !== '' && avatarLink.value.includes(".jpg") || avatarLink.value.includes(".png"))  { 
        messageAvatar.setAttribute('src', avatarLink.value);
    } else {
        messageAvatar.setAttribute('src', getImage());
        }
    container.append(messageAvatar);

    const messageUserName = document.createElement('p');
    container.append(messageUserName);
    if (checkboxYes.checked && commentName.value.length > 0) { 
        messageUserName.textContent = updateName();
    } else {
        messageUserName.textContent = "Username";
    }

    const messageDate = document.createElement('div');
    messageDate.classList.add('post-item--date');
    container.append(messageDate);  
    messageDate.textContent = convertTime(Math.floor(Date.now() / 1000));

    const messageComment = document.createElement('div');
    messageComment.textContent = checkSpam(commentBody.value);
    post.append(messageComment);

    document.querySelector('.main-form').reset();
}