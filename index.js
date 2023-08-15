const btnEl =document.getElementById("btn")
const jokeEl=document.getElementById("joke")

const apikey ="AG8Wf3KOtt6CsBQD4hUeWw==NE0tZe1hCn279NZR";

const options={
    method: "GET",
    headers: {
        "X-Api-key": apikey,
    },
};

const apiURL="https://api.api-ninjas.com/v1/jokes?limit=1"
async function getJoke(){

    try{

    } catch(error){
        
    }
   jokeEl.innerText="Updating...";
   btnEl.disabled=true;
   btnEl.innerText="Loading...";

   const response= await fetch(apiURL,options);
   const data=await response.json();

   btnEl.disabled=false;
   btnEl.innerText="Tell me a joke";


   jokeEl.innerText=data[0].joke;
}

btnEl.addEventListener("click",getJoke);