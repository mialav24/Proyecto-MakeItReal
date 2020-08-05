/* const $chat = document.querySelector(".chat-container");
const messages = [
  {
    time: '10:00',
    content: 'Hola buenos dias',
    author: {
      name: 'Michael Alean',
      image: 'Foto1.jpg'
    },
  },
  {
    time: '10:01',
    content: 'Qué tal como van',
    author: {
      name: 'Diego Ramon',
      image: 'Foto2.jpg'
    },
  },
  {
    time: '10:02',
    content: 'Primero que todo, buenos dias',
    author: {
      name: 'Juan David Giraldo',
      image: 'Foto3.jpg'
    },
  },
];

function printMessage(message) {
  const {author, time, content} = message
  const template = `<div class="conversation-active">
  <img src="${author.image}">
  <div class="box-message">
  <p class="name">${author.name}</p>
  <span class="time-message">${time}</span>
  <div class="message">
  <p>${content}</p>
  </div>        
  </div>`;
  $chat.innerHTML = template;
}

for (let i = 0; i< messages.length; i++){
  printMessage(messages[i])
} */