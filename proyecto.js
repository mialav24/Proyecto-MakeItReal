let today = new Date();
let timeNow = today.getHours() + ":" + today.getMinutes();
const $chat = document.querySelector(".js-chat-container");
const $sendButton = document.querySelector(".js-send-button");
const $textarea = document.querySelector(".js-textarea");
 const messages = [
  {
    time: timeNow,
    content: 'Bueno días',
    author: {
      name: 'Angelica Perez',
      image: 'Foto3.png'
    },
  },
  {
    time: '10:01',
    content: 'Hola',
    author: {
      name: 'Carolina Perez',
      image: 'Foto2.png'
    },
  },
  {
    time: '10:02',
    content: '¿Qué tal?',
    author: {
      name: 'Michael Alean',
      image: 'Foto1.png'
    },
  },
  ];



/* function printMessage(message) {
  const {author, time, content} = message
  const template = `<div class="conversation-active">
  <img src="${author.image}" alt="Avatar">
  <div class="box-message">
  <p class="name">${author.name}</p>
  <span class="time-message">${time}</span>
  <div class="message">
  <p class="whote">${content}</p>
  </div>        
  </div>`;
  $chat.innerHTML += template;
}


 for (let i=0; i<messages.length; i++){
  printMessage(messages[i])
}  */

 const onSend = () => {
  const textareaValue = $textarea.value;

  if (textareaValue !== '') {
    const template = `<div class="conversation-active">
    <img src="Foto1.png" alt="Avatar">
    <div class="box-message">
    <p class="name">Michael Alean</p>
    <span class="time-message">${timeNow}</span>
    <div class="message">
    <p>${textareaValue}</p>
    </div>        
    </div>`;
    $chat.innerHTML += template;
    $textarea.value = '';
  } 
}

 $sendButton.addEventListener('click', onSend);




