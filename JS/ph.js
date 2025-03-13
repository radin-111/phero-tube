function loadNav() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => showNav(data))
}
// {
//     "category_id": "1001",
//     "category": "Music"
// })
function showNav(navd) {
    const navDiv = document.getElementById("btn-container");
    const newArray = navd.categories;
    for (element of newArray) {
        const newBtn = document.createElement("button");
        newBtn.innerHTML=` <div><button class="btn hover:bg-[#FF1F3D] hover:text-white">${element.category}</button></div>
        `
        navDiv.appendChild(newBtn);
        
    }

}
loadNav();