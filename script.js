let category = document.querySelectorAll(".row-1 .tabs .menu");
let content = document.querySelectorAll(".tab-content");

category.forEach((menu, index)=>{
    menu.addEventListener("click",()=>{
        content.forEach((content)=>{
            content.classList.remove("active");
        });
        category.forEach((menu)=>{
            menu.classList.remove("active");
        });
        content[index].classList.add("active");
        category[index].classList.add("active");
    });
    
});

let characterBar=document.querySelectorAll(".character");
let characterContent = document.querySelectorAll(".character-content");

characterBar.forEach((character,index)=>{
    character.addEventListener("click",()=>{
        characterContent.forEach((characterContent)=>{
            characterContent.classList.remove("active");
        });
        characterBar.forEach((characterBar)=>{
            characterBar.classList.remove("active");
        });
        characterBar[index].classList.add("active");
        characterContent[index].classList.add("active");

    });


});