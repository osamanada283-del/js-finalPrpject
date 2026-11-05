const menuBtn=document.getElementById('menu-btn')
const sideBar=document.querySelector(".side-bar-layout")
const closeBox=document.querySelector(".close-box")
const money=document.querySelector(".money span")
const dropDownOption=document.querySelectorAll(".drop-down .option")
const alert=document.getElementById('alert')
let count=document.querySelector('nav .nav-right .actions .cart span')
let cartBody =document.querySelector('#cart-body')
const userSearch=document.getElementById('search')
let searchBox=document.querySelector('.search-box')
let closeSearch=document.getElementById('close-search')
const user=document.getElementById('user')
let userBox=document.getElementById('user-box')
let closeUserInfo=document.getElementById('close-user-info')
menuBtn.onclick=()=>{
    sideBar.classList.add("active")

}
closeBox.onclick=()=>{
    sideBar.classList.remove('active')
}
dropDownOption.forEach((option)=>{
    option.onclick= function(){
   money.innerHTML=this.innerHTML.trim();
   money.style.display='inline'
    }
})
const cartIcon=document.getElementById("cart")
const cartBox=document.querySelector(".shop-cart-box")
const closeIcon=document.getElementById("close-cart")
cartIcon.onclick=function(){
    cartBox.classList.add("open");
}
closeIcon.onclick=function(){
    cartBox.classList.remove("open");
}
userSearch.onclick= function(){
    searchBox.classList.add('active')
}
closeSearch.onclick= function(){
    searchBox.classList.remove('active')
}

user.onclick=function(){
    userBox.classList.add("open");
}
closeUserInfo.onclick=function(){
    userBox.classList.remove("open");
}



let progress = document.querySelector(".progress");
let scrollButton = document.querySelector("#scrollProgress");

let radius = 32;
let circumference = 2 * Math.PI * radius;

progress.style.strokeDasharray = circumference;

function updateProgress() {

    let scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    let scrollTop = window.scrollY;

    // Calculate exact percentage
    let percentage = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    // Make sure percentage reaches 100%
    percentage = Math.min(100, Math.max(0, percentage));

    // Calculate circle offset
    let offset = circumference * (1 - percentage / 100);

    progress.style.strokeDashoffset = offset;
}

window.addEventListener("scroll", updateProgress);

// Update when page loads
updateProgress();

// Scroll to top
scrollButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});