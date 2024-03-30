/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = new Array;

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(element => {
        const article = document.createElement('article');
        const temple_name = document.createElement('h3');
        temple_name.innerText = element.templeName;
        const temple_image = document.createElement('img');
        temple_image.setAttribute('src', element.imageurl);
        temple_image.setAttribute('alt', element.location);
        article.appendChild(temple_name);
        article.appendChild(temple_image);
        templesElement.appendChild(article);
        
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok){
        const temple_list = await response.json();
        templeList = temple_list;
        filterTemples(templeList);
    }
}

/* reset Function */
function reset(){
    while (templesElement.firstChild){
        templesElement.removeChild(templesElement.lastChild)
    }
}

/* filterTemples Function */
function filterTemples(temples) {
    console.log('Filtering temple page');
    reset();
    let filter = document.getElementById('filtered').value;
    switch (filter) {
        case'utah':
        let utahTemples = temples.filter(temple => temple.location.toLowerCase().includes('utah'));
        displayTemples(utahTemples);
        break;
        case'notutah':
        let notUtahTemples = temples.filter(temple => !temple.location.toLowerCase().includes('utah'));
        displayTemples(notUtahTemples);
        break;
        case'older':
        let oldDate = new Date(1950, 0, 1);
        let older = temples.filter(temple =>{
            
            let date = new Date(temple.dedicated);
            return oldDate > date;
        }
        );

        displayTemples(older);
        break;
        case'all':
        displayTemples(templeList);
        break;
        default:
        displayTemples(templeList);
    }

}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });