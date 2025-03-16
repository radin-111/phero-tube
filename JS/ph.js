function loadNav() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => showNav(data))
}
const loadDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(dat => showDetails(dat))

}
// {
//     "category_id": "1001",
//     "video_id": "aaad",
//     "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
//     "title": "Smells Like Teen Spirit",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//             "profile_name": "Oliver Harris",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "5.4K",
//         "posted_date": "1672656000"
//     },
//     "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
// }
let showDetails = (details) => {
    console.log(details)
    const modal = document.getElementById("my_modal_3");
    // modal.innerHTML=`
    // <dialog id="my_modal_3" class="modal">
    //     <div class="modal-box">

    //         <form method="dialog">
    //             <button id="btn"
    //                 class="btn hover:bg-[#FF1F3D] hover:text-white  btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>
    //         </form>
    //         <div class="card bg-base-100 m-4 w-96 image-full  shadow-sm">
    //             <figure>
    //                 <img src="${details.thumbnail}"
    //                     alt="Shoes" />
    //             </figure>
    //             <div class="card-body">
    //                 <h2 class="card-title">${details.title}</h2>
    //                 <p>A card component has a figure, a body part, and inside body there are title and actions parts
    //                 </p>
    //                 <div class="card-actions justify-end">

    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </dialog>
    
    
    // `
    modal.showModal();
    

}

function dddd() {
    const cbtn = document.getElementById("btn");
    cbtn.classList.add("active");
    showVideo(data.category);
}
document.getElementById("btn").addEventListener("click", function () {
    const activeBtn = document.getElementsByClassName("btn-all");
    for (let btn of activeBtn) {
        btn.classList.remove("active");
    }
})
function removeColor() {
    const activeBtn = document.getElementsByClassName("btn-all");
    for (let btn of activeBtn) {
        btn.classList.remove("active");
    }
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
        newBtn.innerHTML = ` <div><button id="btn-${element.category_id}" onclick="loadCatV(${element.category_id})" class="btn hover:bg-[#FF1F3D] hover:text-white btn-all">${element.category}</button></div>
        `
        navDiv.appendChild(newBtn);

    }

}
function loadVideo() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(ii => ii.json())
        .then(data => showVideo(data.videos))
}
const loadCatV = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeColor();
            const cbtn = document.getElementById(`btn-${id}`)
            cbtn.classList.add("active");
            showVideo(data.category);
        })


}

function showVideo(videos) {
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = "";

    if (videos.length === 0) {
        videoContainer.innerHTML = `
        <div class="py-20 my-22 col-span-full flex flex-col justify-center items-center text-center">
            <img class="w-[120px]" src="./assets/Icon.png" alt="" />
            <h2 class="text-2xl font-bold">
                Oops!! Sorry, There is no content here
            </h2>
        </div>`;
        return;
    }


    videos.forEach(video => {
        const newCard = document.createElement("div");

        newCard.innerHTML = `
        <div class="card bg-base-100 ">
            <figure>
                <img class="rounded-lg m-0 w-full h-[250px] object-cover" src="${video.thumbnail}" alt="Shoes" />
                <div class="absolute text-xl text-white bg-black rounded p-1 font-semibold bottom-44 sm:bottom-40 right-2">
                    <p>3hrs 56 min ago</p>
                </div>
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
        <div><button class="btn btn-block" onclick="loadDetails('${video.video_id}')" >View Details</button></div>
        
        
        `
        videoContainer.appendChild(newCard);



    })

        ;
}

// dddd();
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