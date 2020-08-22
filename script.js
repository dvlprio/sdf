//when user scroll, execute this function
window.onscroll = function(){
  headerSticky()
};
 const header = document.getElementById("main");

 const sticky = header.offsetTop;

 function headerSticky() {
   if (window.pageYOffset > sticky) {
     header.classList.add("sticky")
   } else {
     header.classList.remove("sticky");
   }
 }