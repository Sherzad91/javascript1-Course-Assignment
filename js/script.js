
const listOfCountriesUrl = 'https://covid-193.p.rapidapi.com/countries'

const contents = document.getElementById("contents");

const head = {
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "358f92b4fdmsh3c15e3bb87e9ee3p10c033jsn26eba25139ad"
	}
}
async function bringstatus (country){
    const statusUrl =  `https://covid-193.p.rapidapi.com/statistics?country=${country}`
    const response = await fetch(statusUrl, head);
    const data = await response.json();
    const allinfo  = data.response ;
    console.log(allinfo)
    const continent =  allinfo [0]['continent'];
    const population = allinfo [0]['population']; 
    const deathsTotal =allinfo [0]['deaths']['total']
    const tests =allinfo [0]['tests']['total']
    const critical =allinfo [0]['cases']['critical']
    const recovered =allinfo [0]['cases']['recovered']

    contents.innerHTML = ` <h4 > ${country} in ${continent}  ,population is  ${population}  </h4> `  
    contents.innerHTML += ` <h4 > Deaths: ${deathsTotal}   </h4> ` 
    contents.innerHTML += ` <h4 > Tests : ${tests}   </h4> `  
    contents.innerHTML += ` <h4 > critical : ${critical}   </h4> `  
    contents.innerHTML += ` <h4 > recovered : ${recovered}   </h4> `  
}
function bringbycountry (country){
    contents.innerHTML = ` <h3 >Welcome to info page about  '${country}</h3> `  
    contents.innerHTML += `<h3 onclick ="bringstatus('${country}')" >Click here to get info  about  status</h3>`
}
async function Startup() {
     const number =19 
     const country = null
    contents.innerHTML = `<h1>Covide ${number}  Please select the country to show more info</h1> `   
    contents.innerHTML +=  `<ul>`

    try {
        const response = await fetch(listOfCountriesUrl, head);
        const data = await response.json();
        listOfCountries =  data.response ;
        console.log(data)

        // map from js6
        listOfCountries.map(
            function (el){
                contents.innerHTML +=  `<li title ="CLICK TO GET INFO"   onclick = "bringbycountry('${el}')"> ${el} </li>`
            }
        )
    } catch (error) {
        contents.innerHTML = ""
        contents.innerHTML = "<h1>Some thing wronge</h1>"+error   
    }
    contents.innerHTML +=  `<li>${country} </li>`
    contents.innerHTML +=  `</ul>`
}
Startup();