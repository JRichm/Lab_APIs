let form = document.getElementById('inputForm');
let planetInput = document.getElementById('numInput');
let residentsList = document.getElementById('residentList');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    axios.get(`https://swapi.dev/api/planets/${planetInput.value}/`).then(res => {
        console.log(`residents:`);
        console.log(res.data.residents);

        document.getElementById('planetName').textContent= res.data.name;
        document.getElementById('planetClimate').textContent= res.data.climate;
        document.getElementById('planetTerrain').textContent= res.data.terrain;
        document.getElementById('planetGravity').textContent= res.data.gravity;
        document.getElementById('planetPopulation').textContent= res.data.population;

        while (residentsList.firstChild) {
            residentsList.removeChild(residentsList.firstChild);
        }

        for (let i = 0; i < res.data.residents.length; i++) {
            let newResident = document.createElement('li');
            newResident.textContent = res.data.residents[i];
            residentsList.appendChild(newResident);
        }

        console.log(res.data);
    })
})