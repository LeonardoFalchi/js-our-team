const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//seleziono il container delle card
const cardContainer = document.querySelector(".team-container");

//creo variabile di accumulo output (stringhe)
let cards = ""
//ciclo array degli oggetti
for (let index = 0; index < teamMembers.length; index++) {
  //estrapolo ogni oggetto
  const member = teamMembers[index];
  console.log(member);

  //per ogni oggetto creo card(stringa) e la aggiungo alla variabile di accumulo
  cards += `
  <div class="team-card">
      <div class="card-image">
        <img src="${member.img}" alt="${member.name}" />
      </div>
      <div class="card-text">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <a href=${member.email}>${member.email}</a>
      </div>
  </div>`;

  console.log("iterazione sull'oggetto numero:", index, cards);


}

//output del blocco card
cardContainer.innerHTML = cards;
