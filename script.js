
const buttons = document.querySelectorAll('.fa-heart-circle-check')
let count = 5;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Incrémente le compteurcon
    const id = +button.id.split("_").pop()// ["coeur","1"]
    const likecounternum = document.getElementById(`counter_${id}`);
   
  
   
    if (button.className.includes("blueheart")) {
     likecounternum.textContent = +likecounternum.innerText +1;
     button.classList.replace("blueheart","redheart")
    } else {
      likecounternum.textContent = +likecounternum.innerText -1;
     button.classList.replace("redheart","blueheart")
}
  });
  })
