let inputDigits = '';  

function appendNumber(num) {
    
    if (inputDigits.length < 4) {
        inputDigits += num;  
        document.getElementById('display').value += '*';  
    }
}

function clearDisplay() {
    
    document.getElementById('display').value = '';
    inputDigits = '';  
}

function deleteLast() {
   
    inputDigits = inputDigits.slice(0, -1);
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
}

function checkCode() {
  
    const messageElement = document.getElementById('message');
    
    if (inputDigits === '5116') {
        
        window.location.href = 'menu.html'; 
    } else {
        
        messageElement.textContent = 'Wrong password. Try again!';
        messageElement.style.color = 'red'; 
        clearDisplay();  
    }
}

function goBack() {

    window.location.href = 'index.html'  
}

function myBaby() {

    window.location.href = 'myBaby.html';
}

function letter() {

    window.location.href = 'letter.html';
}

function flower() {
    
    window.location.href = 'flower.html';
}
function goBackMenu() {
    window.location.href = 'menu.html';  
}
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
