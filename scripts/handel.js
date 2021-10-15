// grabing Elements form DOM
const breeds = document.querySelector("datalist");
const card = document.querySelector(".card");
const breedname = document.querySelector(".breedname");
const image = document.querySelector(".image");
const details = document.querySelector(".details");
const catbreeds = document.querySelector("form");

const c1 = new cats();

//Add breeds to input list options
c1.getCatBreeds().then((resolve) => {
    Array.from(resolve)
        .forEach((cat) => {
            breeds.innerHTML += `<option value="${cat.name}">`;
        });
});


// listen submit events
catbreeds.addEventListener("submit", (e) => {
    
    e.preventDefault();

    let target = catbreeds.getinput.value.trim();
    catbreeds.reset();
    catbreeds.childNodes[1].blur();

    updateUI(target);
})

//update UI with information
const updateUI = (target) => {

    //convert JSON to Array
    const catdata = Array.from(c1.catinfo);

    //filter out non selected cat data
    const targetcat = catdata.filter((cat) => {
        return cat.name == target;
    });

    //handle card Hide/Display
    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }

    //cat Details HTML template
    const inject = `
    <p class="origin">Origin - ${targetcat[0]['origin']}</p>
    <p class="desc">${targetcat[0]['description']}</p>
    <p>Weight: ${targetcat[0]['weight']['metric']}kg</p>
    <p>Life span: ${targetcat[0]['life_span']} years</p>
    <div class="meters">
    Affectionate:
    <meter value="${targetcat[0]['affection_level']}" min="0" max="5"></meter>
    Energy level:
    <meter value="${targetcat[0]['energy_level']}" min="0" max="5"></meter>
    Fur shedding:
    <meter value="${targetcat[0]['shedding_level']}" min="0" max="5"></meter>
    intellegence:
    <meter value="${targetcat[0]['intelligence']}" min="0" max="5"></meter>
    dog friendly:
    <meter value="${targetcat[0]['dog_friendly']}" min="0" max="5"></meter>
    child friendly:
    <meter value="${targetcat[0]['child_friendly']}" min="0" max="5"></meter>`;

    //Inject Data
    image.setAttribute('src', targetcat[0]['image']['url']);
    breedname.innerHTML = targetcat[0]['name'];
    details.innerHTML = inject;

}