//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title');
const sexy = document.querySelector('.sexy img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 8;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 8;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(200px) rotateZ(0deg)";
    sexy.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(150px) rotateZ(0deg)";
    sizes.style.transform = "translateZ(150px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(150px) rotateZ(0deg)";
});


//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px) rotateZ(0deg)";
    sexy.style.transform = "translateZ(0px) rotate(0deg)";
    description.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizes.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px) rotateZ(0deg)";


});