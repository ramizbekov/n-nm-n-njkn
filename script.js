const countries = [
  {
    name: "Uzbekistan",
    flag: "https://flagcdn.com/w320/uz.png",
    mapLink: "https://www.google.com/maps/place/Uzbekistan/"
  },
  {
    name: "USA",
    flag: "https://flagcdn.com/w320/us.png",
    mapLink: "https://www.google.com/maps/place/USA/"
  },
  {
    name: "Japan",
    flag: "https://flagcdn.com/w320/jp.png",
    mapLink: "https://www.google.com/maps/place/Japan/"
  },
  {
    name: "Brazil",
    flag: "https://flagcdn.com/w320/br.png",
    mapLink: "https://www.google.com/maps/place/Brazil/"
  }
];

const container = document.getElementById('flagsContainer');
const searchInput = document.getElementById('search');

function showFlags(data) {
  container.innerHTML = "";
  data.forEach(country => {
    const card = document.createElement('div');
    card.className = "flag-card";
    card.innerHTML = `
      <img src="${country.flag}" alt="${country.name}">
      <p>${country.name}</p>
    `;
    card.onclick = () => {
      window.open(country.mapLink, "_blank");
    };
    container.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  const filtered = countries.filter(c => c.name.toLowerCase().includes(val));
  showFlags(filtered);
});

showFlags(countries);
