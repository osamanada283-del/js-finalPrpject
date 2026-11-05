//nav start
const menuBtn=document.getElementById('menu-btn')
const sideBar=document.querySelector(".side-bar-layout")
const closeBox=document.querySelector(".close-box")
const money=document.querySelector(".money span")
const dropDownOption=document.querySelectorAll(".drop-down .option")
const userSearch=document.getElementById('search')
let searchBox=document.querySelector('.search-box')
let closeSearch=document.getElementById('close-search')
const user=document.getElementById('user')
let userBox=document.getElementById('user-box')
let closeUserInfo=document.getElementById('close-user-info')
let count=document.querySelector('nav .nav-right .actions .cart span')
let alert=document.getElementById('alert')
let cartBody =document.querySelector('#cart-body')
let totalCart=document.querySelector('.total-price')
  let prev=document.querySelector('.prev')
let next=document.querySelector('.next')
let proPrev=document.querySelector('.pro-prev')
let proNext=document.querySelector('.pro-next')
  let journPrev=document.querySelector('.journ-prev')
let journNext=document.querySelector('.journ-next')
let custPrev=document.querySelector('.cust-prev')
let custNext=document.querySelector('.cust-next')

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
 //nav end

 //hero start
 const splide = new Splide(" #hero-slider", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "20px",
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
});
splide.mount();
   prev.addEventListener("click",()=>{
    splide.go("<")
   })
next.addEventListener("click",()=>{
    splide.go(">")
   })
 //heroend
 const proContainer=document.getElementById('cont-pro')
const data = [
    {
        id: 1,
        name: "Wireless Noise Cancelling Headphones",
        price: 129,
        category: "Audio",
        description: "Premium wireless headphones with active noise cancellation, deep bass, and long battery life.",
        image_1: "https://i.ibb.co/5WSR2d39/Product-images-1-1-min.jpg",
        image_2: "https://i.ibb.co/bj3Jb2FZ/Product-images-2-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 99,
        category: "Wearables",
        description: "Smart fitness watch with activity tracking, heart rate monitoring, notifications, and multiple sports modes.",
        image_1: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/mVwd0st9/Product-images-10-1-min-690x690.jpg"
    },
    {
        id: 3,
        name: "Mechanical Gaming Keyboard",
        price: 79,
        category: "Gaming",
        description: "RGB mechanical gaming keyboard with responsive switches, durable keys, and customizable lighting.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg",
        image_3: "https://i.ibb.co/sJzdXcnG/Product-images-8-1-min.jpg"
    },
    {
        id: 4,
        name: "Portable Bluetooth Speaker",
        price: 59,
        category: "Audio",
        description: "Compact Bluetooth speaker delivering powerful sound with a portable design and long battery life.",
        image_1: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_2: "https://i.ibb.co/TMg1jQLz/Product-images-7-1-min.jpg",
        image_3: "https://i.ibb.co/sJzdXcnG/Product-images-8-1-min.jpg"
    },
    {
        id: 5,
        name: "4K Smart LED Monitor",
        price: 249,
        category: "Computers",
        description: "High-resolution 4K LED monitor with vibrant colors, sharp details, and a modern slim design.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 6,
        name: "Wireless Gaming Mouse",
        price: 69,
        category: "Gaming",
        description: "High-performance wireless gaming mouse with adjustable DPI, fast response time, and ergonomic design.",
        image_1: "https://i.ibb.co/dwCNm5qK/Product-images-9-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/BKKxXkmH/Product-images-9-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg"
    },
    {
        id: 7,
        name: "Smartphone Pro Max",
        price: 899,
        category: "Smart Phones",
        description: "Powerful smartphone featuring a high-resolution display, advanced camera system, and fast processor.",
        image_1: "https://i.ibb.co/60XkDLWN/Product-images-15-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/gLtQJxNh/Product-images-15-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/LXSBrBw4/Product-images-5-1-min.jpg"
    },
    {
        id: 8,
        name: "USB-C Fast Charger",
        price: 35,
        category: "Smart Phones",
        description: "Fast USB-C charger designed to provide safe and efficient charging for compatible smartphones and tablets.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 9,
        name: "Wireless Earbuds Pro",
        price: 89,
        category: "Audio",
        description: "True wireless earbuds with clear audio, touch controls, noise reduction, and a compact charging case.",
        image_1: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 10,
        name: "Gaming Laptop",
        price: 1199,
        category: "Computers",
        description: "High-performance gaming laptop with a powerful processor, dedicated graphics, fast SSD, and high-refresh display.",
        image_1: "https://i.ibb.co/B5TPjpkG/Product-images-12-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/pBGjMNxN/Product-images-13-1-min-690x690.jpg"
    },
    {
        id: 11,
        name: "Smart Home Security Camera",
        price: 75,
        category: "Smart Home",
        description: "Smart security camera with HD video, motion detection, night vision, and mobile app connectivity.",
        image_1: "https://i.ibb.co/sv0Shgzt/Product-images-4-1-min-768x768.jpg",
        image_2: "https://i.ibb.co/LXSBrBw4/Product-images-5-1-min.jpg",
        image_3: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg"
    },
    {
        id: 12,
        name: "Smart Health Tracker",
        price: 119,
        category: "Wearables",
        description: "Advanced wearable device for monitoring daily activity, sleep, heart rate, and fitness performance.",
        image_1: "https://i.ibb.co/pBGjMNxN/Product-images-13-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    }
];
data.forEach((product,index)=>{
proContainer.innerHTML+=`<div class="splide__slide">
      <div class="card">
                <div class="pro-image">
                    <img src="${product.image_1}">
                <button  onclick="addToCart(${index})">
                    <img src="./assets/images/image (10).svg">
                    add to cart</button>
                </div>
    
                <b>${product.name}</b>
                <p>${product.description}</p>
                <p class="price">$${product.price}</p>
                <div class="product-images">
                    <img onClick="handleChangeImage(this)" src="${product.image_1}" class="active">
                    <img onClick="handleChangeImage(this)" src="${product.image_2}">
                    <img onClick="handleChangeImage(this)" src="${product.image_3}">

                </div>
            </div>
            </div>`
})
let cart= JSON.parse(localStorage.getItem('cartItems')) || []
displayCartItems()
function addToCart(number){
    let cartFullInfo={
        ...data[number],
        amount:1
    }
 cart.push(cartFullInfo)
 count.innerHTML=`${cart.length}`
 displayCartItems()
 alert.classList.add('active')
 setTimeout(()=>{
 alert.classList.remove('active')

 },1000)
}
function displayCartItems(){
    if(cart.length>0){
    let items=``
let totalPrice=0;

    totalCart.classList.add('active')
    cart.forEach((product,index)=>{
        totalPrice+=product.price * product.amount;
        items+=` <div class="cart-item">
        <div class="delete-product" onClick='deleteCartItem(${index})'>
    <i class="fa-solid fa-xmark"></i>
</div>
        <div class="image">
            <img src="${product.image_1}">
        </div>
        <div class="cart-detail">
            <p>${product.name}</p>
            <div class="cart-price">
                <div>
                <button  onclick="handleItemAmount(${index},'min')"><i class="fa-solid fa-minus"></i>  </button>
                <span>${product.amount}</span>
                <button onclick="handleItemAmount(${index},'plus')">
                <i class="fa-solid fa-plus"></i></button>
            </div>
            <div>
               <span>x  ${product.price}$</span> 
            </div>
        </div>
    </div>
    </div>`
    })
   cartBody.innerHTML=items;
   span.innerHTML=`$${totalPrice.toFixed(2)}`;
}else{
     cartBody.innerHTML=`<div id="cart-body">
        <p>No products in the cart.</p>
        <a href="./shop.html"> return to shop</a>
       </div>`
    totalCart.classList.remove('active')

}
localStorage.setItem('cartItems',JSON.stringify(cart))
}
function deleteCartItem(number){
cart.splice(number,1)
 count.innerHTML=`${cart.length}`
displayCartItems()

}
function handleItemAmount(number,action){
 if(action==='plus'){
    ++(cart[number].amount)
 }
 else{
 if(cart[number].amount >1){
    --(cart[number].amount)
}
 }
 displayCartItems()
}
 function handleChangeImage(image){
  allImage=image.parentElement.querySelectorAll('img')
  allImage.forEach((img)=>{
  img.classList.remove('active')
  }
)
image.classList.add('active')
let mainImage=image.closest(".card").querySelector(' .pro-image img')
mainImage.src=image.src
 }





const proSplide = new Splide(" #pro-slider", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    gap: "20px",
    arrows:false,
    pagination: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    breakpoints: {
        992:{
            perPage:3,
        },
    768: {
        perPage: 2,
    },
    565:{
        perPage:1,
    }
}
});

proSplide.mount();

 proPrev.addEventListener("click",()=>{
    proSplide.go("<")
   })
proNext.addEventListener("click",()=>{
    proSplide.go(">")
   })
//product end
new Splide('#marquee', {

    type: 'loop',
  
    drag: 'free',

    focus: 'center',

    autoWidth: true,

    arrows: false,

    pagination: false,

    autoScroll: {
        speed: 1,
        pauseOnHover: false
    }

}).mount(window.splide.Extensions)


const compact = new Splide(" #compact", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "20px",
    arrows:false,
    pagination: false,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
});

compact.mount();


let pagination = document.querySelector(".custom-pagination");

let slidesCount = compact.Components.Slides.getLength();


for (let i = 0; i < 2; i++) {

    let button = document.createElement("button");

    button.setAttribute("data-number", i + 1);

    button.addEventListener("click", () => {

        compact.go(i);

    });

    pagination.appendChild(button);

}



function updatePagination() {

    let buttons = pagination.querySelectorAll("button");

    buttons.forEach((button, index) => {

        button.classList.toggle(
            "is-active",
            index === mySlider.index
        );

    });
}

/*jounal */
const journal = new Splide(" #journal", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "20px",
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    breakpoints: {
        992:{
            perPage:2,
        },
    768: {
        perPage: 1,
    }
}
});

journal.mount();

journPrev.addEventListener("click",()=>{
 journal.go("<")
   })
journNext.addEventListener("click",()=>{
    journal.go(">")
   })
//customer service
const customerServ = new Splide(" #customer-serv", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "20px",
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
});
customerServ.mount();

 custPrev.addEventListener("click",()=>{
    customerServ.go("<")
   })
custNext.addEventListener("click",()=>{
    customerServ.go(">")
   })
//customer service
//foot start
const choose=document.querySelectorAll('footer .foot-center .lang a div p')
const content=document.querySelector('footer .foot-center .lang span')
choose.forEach((option)=>{
    option.onclick= function(){
   content.innerHTML=this.innerHTML.trim();
    }
})
//footer end
//counter
let endDate = new Date();

endDate.setDate(endDate.getDate() + 30);

let counter = setInterval(function () {

    let now = new Date().getTime() 
    let end = endDate.getTime();
    let distance = end -now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    let minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    let seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );
    document.getElementById("days").textContent = `${days}  :`;
    document.getElementById("hours").textContent =`${hours}  :`;
    document.getElementById("minutes").textContent = `${minutes}  : `;
    document.getElementById("seconds").textContent = seconds;


    // لو العرض انتهى
    if (distance < 0) {

        clearInterval(counter);

        document.querySelector("#count-down").innerHTML =
            "<h2>Offer Expired!</h2>";

    }

}, 1000);


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
console.log(alert)