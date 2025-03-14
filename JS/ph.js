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
        newBtn.innerHTML = ` <div><button class="btn hover:bg-[#FF1F3D] hover:text-white">${element.category}</button></div>
        `
        navDiv.appendChild(newBtn);

    }

}
function loadVideo() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(ii => ii.json())
        .then(data => showVideo(data.videos))
}
function showVideo(videos) {
    const videoContainer = document.getElementById("video-container");
    videos.forEach(video => {
        const newCard = document.createElement("div");
        newCard.innerHTML = `
        <div class="card bg-base-100 ">
            <figure>
                <img class="rounded-lg m-0 w-full h-[250px] object-cover" src="${video.thumbnail}" alt="Shoes" />
            </figure>
            <div class="flex  items-start">
        
                <div>
                    <div class="avatar mt-6">
                        <div class="w-10  rounded-full ">
                          <img class="" src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div class="card-body">
                    
                    <p class="font-semibold text-sm">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    
                    <p class="text-gray-600 font-semibold flex gap-4 items-center justify-start">${video.authors[0].profile_name}<img src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" class="w-5 h-5" alt=""></p>
                    <p class="text-gray-600 font-semibold">${video.others.views} views

                    </p>

                </div>
            </div>
        </div>
        
        `
        videoContainer.appendChild(newCard);



    });
}
loadNav();
loadVideo();
// {
//     "category_id": "1001",
//     "video_id": "aaah",
//     "thumbnail": "https://i.ibb.co/hY496Db/coloer-of-the-wind.jpg",
//     "title": "Colors of the Wind",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/6r4cx4P/ethen-clack.png",
//             "profile_name": "Ethan Clark",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "233K",
//         "posted_date": "16090"
//     },
//     "description": "Ethan Clark's 'Colors of the Wind' is a vibrant musical exploration that captivates listeners with its rich, expressive melodies and uplifting rhythm. With 233K views, this song is a celebration of nature's beauty and human connection, offering a soothing and enriching experience for fans of heartfelt, nature-inspired music."
// }