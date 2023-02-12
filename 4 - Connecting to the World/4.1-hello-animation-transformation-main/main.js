// progression bar function
window.onload = move = () =>  {
    const elem = document.getElementById("myBar");  
    const text = document.getElementById("text"); 
    let height = 0; // starting 
    const id = setInterval(frame, 25); // progression speed
    
    function frame() {
      if (height >= 100) {
        clearInterval(id);
      } else {
        height++; 
        // text.style.color = "red";
        elem.style.height = height + '%';
        elem.style.backgroundColor = "#b3b3b3";
        // elem.innerHTML = height * 1  + '%';
        text.innerHTML = height * 1  + '%';
        // text.style.color = 'black';
        // text.style.fontSize = '20px';
        // text.style.padding = '1rem';
        // text.style.fontWeight = '600';
        // text.style.fontFamily = 'Montserrat';
      }
    }
  }

