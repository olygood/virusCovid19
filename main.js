console.log('hello les gens');

const countriesSelect = document.querySelector("contries");
const BASE_URL = "https://covid19.mathdro.id/api"

let info = "";
const infoDiv = document.querySelector(".info");

let error = null;
const errorDiv = document.querySelector(".error");

function getCountries(){
    return new Promise((resolve,reject) => {
        fetch(`${BASE_URL}/countries`)
        .then(data => data.json())
        .then(countries => {
            console.log("countries",countries);
            resolve(countries);
        })
        .catch(err => {
            reject(eror);
            errorDiv.innerHTML = "impssible de se connecter aux pays"
        });
    });
}
getCountries().then(data =>{
    let option;
    Object.entries(data.countries).forEach(country =>{
        console.log("country",country)
    });
});


