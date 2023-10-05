
const buttons = document.querySelectorAll('.fa-heart-circle-check');
let count = 5;

let comments = 2;

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
      button.classList.replace("redheart", "blueheart")
      
    }
  });
})

const postNewCard = () => {
  comments++;
  let text = document.getElementById("textCard").value;
  // Etape 1 = Sélection de la div
  let div = document.getElementById("feed-container");

  let newArticle = document.createElement("article");
  newArticle.setAttribute("class", "feed-card-1")

  let date = new Date().toDateString();

  let newCard = `<div class="card-header" >

     

      <div class="feed-card-header2" >
          <img src="image/vincent.jpg" alt="photo de l'utilisateur" class="photo-profil-1">
          <div class="feed-card-username">
              <h1>Vinz D-Y</h1>
              <p class="date">${date}</p>
          </div>
      </div>
       <div class="like-count" >
        <i class="fa-sharp fa-solid fa-heart-circle-bolt"></i><!-- icon like count -->
        <p id="counter_${comments}" class="like-count-num" ></p>
       </div>
  </div>
  <div>
      <p class="fdc-content" >
          ${text}
      </p>
  </div>
  <div class="footer-card" >
      <div class="left-buttons" >
          <i id="coeur_${comments}" class="fa-solid fa-heart-circle-check blueheart" ></i> <!--icon like-->
      </div>
      <div class="left-b"> 
          <i class="fa-solid fa-id-card"></i><!--icon cardfolio-->
      </div>
      <div class="right-buttons" >
          <i class="fa-regular fa-comments"></i> <!--icon like-->
      </div>
      <div class="right-b"> 
          <i class="fa-solid fa-square-share-nodes"></i><!--icon cardfolio-->
      </div>
      
      
  </div>`;

  newArticle.innerHTML = newCard;

  // Etape 2 = Récupération des enfants de div
  let enfantsDiv = div.children;

  enfantsDiv = Array.from(enfantsDiv);

  // Etape 4 = Réinsérer les enfants dans la div
  for(let element of enfantsDiv){
    div.appendChild(element);
  }

  div.prepend(newArticle)
  const buttons = document.querySelectorAll('.fa-heart-circle-check');
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
}

let inputKey = document.getElementById("textCard");

inputKey.addEventListener('keydown', function postNewCardInput(event) {
  
  if(event.key != "Enter"){
    return;
  }

  comments++;

  let text = document.getElementById("textCard").value;
  // Etape 1 = Sélection de la div
  let div = document.getElementById("feed-container");

  let newArticle = document.createElement("article");
  newArticle.setAttribute("class", "feed-card-1")

  let date = new Date().toDateString();

  let newCard = `<div class="card-header" >
     

      <div class="feed-card-header2" >
          <img src="image/vincent.jpg" alt="photo de l'utilisateur" class="photo-profil-1">
          <div class="feed-card-username">
              <h1>Vinz D-Y</h1>
              <p class="date"> ${date}</p>
          </div>
      </div>
       <div class="like-count" >
        <i class="fa-sharp fa-solid fa-heart-circle-bolt"></i><!-- icon like count -->
        <p id="counter_${comments}" class="like-count-num" ></p>
       </div>
  </div>
  <div>
      <p class="fdc-content" >
          ${text}
      </p>
  </div>
  <div class="footer-card" >
      <div class="left-buttons" >
          <i id="coeur_${comments}" class="fa-solid fa-heart-circle-check blueheart" ></i> <!--icon like-->
      </div>
      <div class="left-b"> 
          <i class="fa-solid fa-id-card"></i><!--icon cardfolio-->
      </div>
      <div class="right-buttons" >
          <i class="fa-regular fa-comments"></i> <!--icon like-->
      </div>
      <div class="right-b"> 
          <i class="fa-solid fa-square-share-nodes"></i><!--icon cardfolio-->
      </div>
      
      
  </div>`;

  newArticle.innerHTML = newCard;

  // Etape 2 = Récupération des enfants de div
  let enfantsDiv = div.children;

  enfantsDiv = Array.from(enfantsDiv);

  // Etape 4 = Réinsérer les enfants dans la div
  for(let element of enfantsDiv){
    div.appendChild(element);
  }

  div.prepend(newArticle)
  const buttons = document.querySelectorAll('.fa-heart-circle-check');
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
})

const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);

