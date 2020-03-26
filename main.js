console.log('hello les gens');

const title = document.querySelector("contries");
const BASE_URL = "https://covid19.mathdro.id/api"

let info = "";
const infoDiv = document.querySelector(".info");

let error = null;
const errorDiv = document.querySelector(".error");

function getCounties(){
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
getCounties().then(data =>{
    console.log("ca marche");
})


