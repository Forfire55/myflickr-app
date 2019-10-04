let currentPage = 1;

document.getElementById(`MyInput1`).addEventListener(`keypress`, async (e) => {
    if (e.which == 13) {
    currentPage=1;
    text = document.getElementById(`MyInput1`).value;
    let images = await getImages(text);
    updateUI(images);
    document.querySelector("main").style.display = "grid";
    document.body.style.background = "#DDDDDD";
    document.getElementById("cool_frase").style.display = "none";
    document.getElementById("previous").style.display = "flex";
    document.getElementById("next").style.display = "flex";
    }
})

document.getElementById(`MyInput2`).addEventListener(`keypress`, async (e) => {
    if (e.which == 13) {
    currentPage=1;
    text = document.getElementById(`MyInput2`).value;
    let images = await getImages(text);
    updateUI(images);
    document.querySelector("main").style.display = "grid";
    document.body.style.background = "#DDDDDD";
    document.getElementById("cool_frase").style.display = "none";
    document.getElementById("previous").style.display = "flex";
    document.getElementById("next").style.display = "flex";
}
})

document.querySelector(`.Sports1`).addEventListener(`click`, async () => {
    currentPage=1;
    text = "sport";
    let images = await getImages(text);
    updateUI(images);
    document.querySelector("main").style.display = "grid";
    document.body.style.background = "#DDDDDD";
    document.getElementById("cool_frase").style.display = "none";
    document.getElementById("previous").style.display = "flex";
    document.getElementById("next").style.display = "flex";
});

document.querySelector(`.Skyscraper1`).addEventListener(`click`, async () => {
    currentPage=1;
    text = "skyscraper";
    let images = await getImages(text);
    updateUI(images);
    document.querySelector("main").style.display = "grid";
    document.body.style.background = "#DDDDDD";
    document.getElementById("cool_frase").style.display = "none";
    document.getElementById("previous").style.display = "flex";
    document.getElementById("next").style.display = "flex";
});

document.querySelector(`.Food1`).addEventListener(`click`, async () => {
    currentPage=1;
    text = "breakfast";
    let images = await getImages(text);
    updateUI(images);
    document.querySelector("main").style.display = "grid";
    document.body.style.background = "#DDDDDD";
    document.getElementById("cool_frase").style.display = "none";
    document.getElementById("previous").style.display = "flex";
    document.getElementById("next").style.display = "flex"; 
});

document.querySelector(`.Landscapes1`).addEventListener(`click`, async () => {
    currentPage=1;
    text = "landscape";
    let images = await getImages(text);
    updateUI(images);
    document.querySelector("main").style.display = "grid";
    document.body.style.background = "#DDDDDD";
    document.getElementById("cool_frase").style.display = "none";
    document.getElementById("previous").style.display = "flex";
    document.getElementById("next").style.display = "flex";
});

document.querySelector(`.Sports2`).addEventListener(`click`, async () => {
    currentPage=1;
    text = "sport";
    let images = await getImages(text);
    updateUI(images);
    document.querySelector("main").style.display = "grid";
    document.body.style.background = "#DDDDDD";
    document.getElementById("cool_frase").style.display = "none";
    document.getElementById("previous").style.display = "flex";
    document.getElementById("next").style.display = "flex";
});

document.querySelector(`.Skyscraper2`).addEventListener(`click`, async () => {
    currentPage=1;
    text = "skyscraper";
    let images = await getImages(text);
    updateUI(images);
    document.querySelector("main").style.display = "grid";
    document.body.style.background = "#DDDDDD";
    document.getElementById("cool_frase").style.display = "none";
    document.getElementById("previous").style.display = "flex";
    document.getElementById("next").style.display = "flex";
});

document.querySelector(`.Food2`).addEventListener(`click`, async () => {
    currentPage=1;
    text = "breakfast";
    let images = await getImages(text);
    updateUI(images);
    document.querySelector("main").style.display = "grid";
    document.body.style.background = "#DDDDDD";
    document.getElementById("cool_frase").style.display = "none";
    document.getElementById("previous").style.display = "flex";
    document.getElementById("next").style.display = "flex"; 
});

document.querySelector(`.Landscapes2`).addEventListener(`click`, async () => {
    currentPage=1;
    text = "landscape";
    let images = await getImages(text);
    updateUI(images);
    document.querySelector("main").style.display = "grid";
    document.body.style.background = "#DDDDDD";
    document.getElementById("cool_frase").style.display = "none";
    document.getElementById("previous").style.display = "flex";
    document.getElementById("next").style.display = "flex";
});

document.querySelector(`.overlay`).addEventListener(`click`, () => {
    document.querySelector(`.overlay`).innerHTML = ``;
    document.querySelector(`.overlay`).classList.remove(`show`);
});


function getLarge(img){
    if (img.farm !==0){
    let el = document.createElement(`img`);
    el.setAttribute(`src`, imgUrl(img, `large`));
    el.setAttribute(`alt`, img.title);
    let section = document.querySelector(`.overlay`);
    section.appendChild(el);
    }
}

function run(interval, frames) {
    var int = 1;
    function func() { 
        document.body.id = "img"+int;
        int++;
        if(int === frames) { int = 1; }    
    }
    var swap = window.setInterval(func, interval);
}
run(3500, 5);

document.querySelector(`a#next`).addEventListener(`click`, async () => {
    currentPage++;
    let images = await getImages(text);
    updateUI(images);
});

document.querySelector(`a#previous`).addEventListener(`click`, async () => {
    if (currentPage != 1) {
        currentPage--;
        let images = await getImages(text);
        updateUI(images);
    }   
});

document.querySelector("#navicon")
.addEventListener("click", () => {
    document.querySelector("nav.mobile").classList.toggle("show");
})


async function getImages(text) {
    const apiKey =`2af54aca22ccb9c902078adc64b47907`;
    let method = `flickr.photos.search`;
    const baseUrl = `https://api.flickr.com/services/rest`;
    let url = `${baseUrl}?api_key=${apiKey}&method=${method}&text=${text}&page=${currentPage}&per_page=${250}&format=json&nojsoncallback=1`
    console.log(url)
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data);
        return await data;
    }
    catch (err){
        console.error(err);
    }
}

function imgUrl(img, size) {
    let imgSize = `z`
    if (size == `square`){imgSize= `q`}
    if (size == `large`){imgSize= `b`} 
    let url =`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_${imgSize}.jpg`
    return url;
}


function updateUI(data){
    let section = document.querySelector(`.gallery`);
    section.innerHTML= ``;
    data.photos.photo.forEach(img => {
    if (img.farm !==0){
    let el = document.createElement(`img`);
    el.setAttribute(`src`, imgUrl(img, `square`));
    el.setAttribute(`alt`, img.title);
    section.appendChild(el);
    el.addEventListener(`click`, () => {
        document.querySelector(".overlay").innerHTML = ``
        getLarge(img);
        document.querySelector(".overlay").classList.add(`show`);
        document.querySelector(`.overlay`).classList.remove(`hide`);   
    });
    }
});
}