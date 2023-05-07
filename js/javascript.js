// const searchIcon = document.getElementById('search-icon');
// const searchBox = document.getElementById('search-box');

// // Hiển thị ô tìm kiếm khi nhấp vào biểu tượng kính lúp
// searchIcon.addEventListener('click', function() {
//   searchBox.style.display = 'block';
// });

// // Ẩn ô tìm kiếm khi bấm ra ngoài vùng ô đó
// document.addEventListener('click', function(e) {
//   if (e.target !== searchBox && e.target !== searchIcon) {
//     searchBox.style.display = 'none';
//   }
// });

let display_image = document.getElementById("display_image");
function nex(n){
  if(n==1){
    display_image.src = 'https://img.freepik.com/free-psd/food-menu-restaurant-web-banner-template_120329-1771.jpg?w=1060&t=st=1683265441~exp=1683266041~hmac=d2837023e71e76c0b18f12d57b2cf583a961dd2cc266ec721ede237a330f3a38'
  }else if(n==2){
    display_image.src = 'https://img.freepik.com/free-psd/web-banner-template-japanese-restaurant_23-2148203259.jpg?w=1380&t=st=1683270003~exp=1683270603~hmac=0fbb28a90e822e03a0f5a9ee7a88a97b001dc4f8a9e6dbde66f35f4048a57255';
  }else if(n==3){
    display_image.src = 'https://img.freepik.com/free-vector/flat-design-organic-food-sale-banner-template_23-2149112289.jpg?w=1380&t=st=1683270136~exp=1683270736~hmac=93a5bbbb8284fd40456a2a47882a69f2160fa787d163aaee2ac46f36c7737ad4';
  }
}
let number_next = 0;
setInterval(function(){
  number_next++;
  if(number_next>3){
    number_next=1;
  }
  nex(number_next);
},2000);

// =============================== BUY NOW ================================= //
if(window.matchMedia("(max-width: 800px)").matches){
  document.getElementById("of").textContent = "Quanlity";
}