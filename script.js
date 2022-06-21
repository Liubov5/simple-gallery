let folder_name = "images/"
let photos = [
    "1.jpg", "2.jpg", "3.jpg","4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"
]
//почему я не вставила название папки? потому что в будущем может поменяться и тогда придется 100 раз сменять

let current_picture = 0;
let gallery_block = document.querySelector(".gallery");
let main_photo = document.querySelector(".main_photo");
let back_arrow = document.querySelector(".arrow_back")
let forward_arrow = document.querySelector(".arrow_forward");

for(let i=0; i<photos.length; i++){
    let item = document.createElement("div");
    gallery_block.appendChild(item);
    item.classList.add("item");
    item.style.backgroundImage = `url(${folder_name + photos[i]})`
}

let all_photos = document.querySelectorAll(".item");
changePhoto();

for(let i=0; i<all_photos.length; i++){
    all_photos[i].onclick = function(){
        all_photos[current_picture].classList.remove("active")
        current_picture = i;
        changePhoto();
    }
}

function changePhoto(){
    all_photos[current_picture].classList.add("active")
    main_photo.style.backgroundImage = `url(${folder_name + photos[current_picture]})`
}

forward_arrow.onclick = function(){
    if(current_picture == photos.length - 1){
        current_picture = photos.length - 1;
    }else{
        all_photos[current_picture].classList.remove("active")
        current_picture++;
        changePhoto();
    }
}

back_arrow.onclick = function(){
    if(current_picture == 0){
        current_picture = 0;
    }else{
        all_photos[current_picture].classList.remove("active")
        current_picture--;
        changePhoto();
    }
}