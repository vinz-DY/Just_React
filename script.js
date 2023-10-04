
const button = document.getElementById('coeur');
const likecounternum = document.getElementById('counter');
let count = 5;

button.addEventListener('click', () => {
  // Incrémente le compteur
  if (count <= 5) {
     count++
  } else if (count > 5)
    count--
  
   likecounternum.textContent = count;
  
});