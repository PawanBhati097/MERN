
const div = document.querySelector('div');

setInterval(()=>{
   let time = new Date();
   div.textContent = time.toLocaleTimeString();
},1000)