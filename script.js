let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* PRODUCTS */
const fullSleeve = [
  { name:"Classic 90s Home", images:["images/full1_1.jpg","images/full1_2.jpg","images/full1_3.jpg"] },
  { name:"Retro Away Kit", images:["images/full1_1.jpg","images/full1_2.jpg"] },
    { name:"Classic 90s Home", images:["images/full1_1.jpg","images/full1_2.jpg","images/full1_3.jpg"] },
  { name:"Retro Away Kit", images:["images/full1_1.jpg","images/full1_2.jpg"] },
    { name:"Classic 90s Home", images:["images/full1_1.jpg","images/full1_2.jpg","images/full1_3.jpg"] },
  { name:"Retro Away Kit", images:["images/full1_1.jpg","images/full1_2.jpg"] },
    { name:"Classic 90s Home", images:["images/full1_1.jpg","images/full1_2.jpg","images/full1_3.jpg"] },
  { name:"Retro Away Kit", images:["images/full1_1.jpg","images/full1_2.jpg"] }
];

const halfSleeve = [
  { name:"Retro Street", images:["images/half1_1.jpg","images/half1_2.jpg"] },
  { name:"90s Fan Jersey", images:["images/half1_1.jpg","images/half1_2.jpg"] },
    { name:"Retro Street", images:["images/half1_1.jpg","images/half1_2.jpg"] },
  { name:"90s Fan Jersey", images:["images/half1_1.jpg","images/half1_2.jpg"] },
    { name:"Retro Street", images:["images/half1_1.jpg","images/half1_2.jpg"] },
  { name:"90s Fan Jersey", images:["images/half1_1.jpg","images/half1_2.jpg"] }
];

/* RENDER PRODUCTS */
function renderProducts(list, type, id) {
  const div = document.getElementById(id);
  div.innerHTML = "";

  list.forEach(p => {
    div.innerHTML += `
      <div class="card">
        <div class="slider" data-index="0" data-images='${JSON.stringify(p.images)}'>
          <img src="${p.images[0]}">
          <button class="arrow left" onclick="slide(this,-1)">❮</button>
          <button class="arrow right" onclick="slide(this,1)">❯</button>
        </div>

        <h4>${p.name}</h4>
        <p>${type}</p>

        <select>
          <option>S</option><option>M</option><option>L</option>
          <option>XL</option><option>XXL</option>
        </select>

        <button onclick="addToCart('${p.name}','${type}',this.previousElementSibling.value)">
          Add to Cart
        </button>
      </div>
    `;
  });
}

/* SLIDE FUNCTION */
function slide(btn, dir) {
  const slider = btn.parentElement;
  const images = JSON.parse(slider.dataset.images);
  let index = parseInt(slider.dataset.index);

  index += dir;
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  slider.dataset.index = index;
  slider.querySelector("img").src = images[index];
}

/* INIT */
renderProducts(fullSleeve,"Full Sleeve","full");

/* TABS */
document.getElementById("fullTab").onclick = () => {
  document.getElementById("full").classList.remove("hidden");
  document.getElementById("half").classList.add("hidden");
  renderProducts(fullSleeve,"Full Sleeve","full");
  setActive("fullTab");
};

document.getElementById("halfTab").onclick = () => {
  document.getElementById("half").classList.remove("hidden");
  document.getElementById("full").classList.add("hidden");
  renderProducts(halfSleeve,"Half Sleeve","half");
  setActive("halfTab");
};

function setActive(id){
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* CART */
function addToCart(name,type,size){
  cart.push({name,type,size});
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to cart");
}

function openCart(){
  document.getElementById("cartModal").style.display="block";
  renderCart();
}

function closeCart(){
  document.getElementById("cartModal").style.display="none";
}

function renderCart(){
  const div=document.getElementById("cartItems");
  div.innerHTML="";
  cart.forEach((c,i)=>{
    div.innerHTML+=`
      <div class="cart-item">
        <span>${c.name} (${c.size})</span>
        <button class="remove" onclick="removeItem(${i})">X</button>
      </div>`;
  });
}

function removeItem(i){
  cart.splice(i,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  renderCart();
}

/* WHATSAPP */
function checkout(){
  const name=document.getElementById("name").value;
  const mobile=document.getElementById("mobile").value;
  if(!name || !mobile || cart.length===0){
    alert("Please fill details");
    return;
  }
  let msg=`DOUTFIT SPORTS ORDER%0AName:${name}%0AMobile:${mobile}%0A%0A`;
  cart.forEach((c,i)=>msg+=`${i+1}. ${c.name} - ${c.size}%0A`);
  window.open(`https://wa.me/919947118668?text=${msg}`,"_blank");
}
