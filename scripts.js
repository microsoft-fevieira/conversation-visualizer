const jsonFileInput = document.getElementById('jsonFile');  
const chatContainer = document.getElementById('chat-container');  
  
jsonFileInput.addEventListener('change', (event) => {  
  const file = event.target.files[0];  
  if (file) {  
    const reader = new FileReader();  
    reader.onload = (e) => {  
      const data = JSON.parse(e.target.result);  
      displayChat(data);  
    };  
    reader.readAsText(file);  
  }  
});  
  
function displayChat(data) {  
  chatContainer.innerHTML = ''; // Clear the previous chat content  
  
  data.messages.forEach(message => {  
    const messageElement = document.createElement('div');  
    messageElement.className = `message ${message.role}`;  
    messageElement.innerText = message.content;  
    chatContainer.appendChild(messageElement);  
  });  
}  
