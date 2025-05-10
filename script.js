var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


function  ShowSearchBar(){
let search_bar=document.getElementById("MobileSearchBar");

if(search_bar.style.top==="-80px"){
  search_bar.style.top="80px"
}else{
  search_bar.style.top="-80px"
}

  }





  document.getElementById("menu_bar").addEventListener("click",()=>{

    let menu=document.getElementById("menu");
    let main_body=document.getElementById("main_body");

    if(menu.style.left==="-100px"){
menu.style.left="0px"
main_body.style.marginLeft="90px"


    }else{
      menu.style.left="-100px"
main_body.style.marginLeft="0px"
    }

  })