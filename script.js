let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* PRODUCTS */
const productsByCategory = {
  full: [
    {
      name: "Messi Barcelona",
      images: ["images/fullsleeve/D01-01.jpg", "images/fullsleeve/D01-02.jpg"]
    },
    {
      name: "Ronaldo Juvantus",
      images: ["images/fullsleeve/D02-01.jpg", "images/fullsleeve/D02-02.jpg"]
    },
	    {
      name: "Ronaldo Real Madrid",
 images: ["images/fullsleeve/D03-01.jpg", "images/fullsleeve/D03-02.jpg"]    },
	    {
      name: "Messi Barcelona",
 images: ["images/fullsleeve/D04-01.jpg", "images/fullsleeve/D04-02.jpg"]    },
	    {
      name: "Ronaldo Real Madrid",
 images: ["images/fullsleeve/D05-01.jpg", "images/fullsleeve/D05-02.jpg"]    },
	    {
      name: "Sergio Ramos Real Madrid",
 images: ["images/fullsleeve/D06-01.jpg", "images/fullsleeve/D06-02.jpg"]    },
	    {
      name: "Ronaldo Real Madrid",
 images: ["images/fullsleeve/D07-01.jpg", "images/fullsleeve/D07-02.jpg"]    }

	
  ],

  half: [
    {
      name: "Retro Street",
      images: ["images/full1_1.jpg", "images/full1_2.jpg"]
    }
  ],

  collar: [
    {
      name: "Vintage Collar Classic",
      images: ["images/full1_1.jpg", "images/full1_2.jpg"]
    }
  ],

  five: [
    {
      name: "Legend Five Sleeve",
      images: ["images/full1_1.jpg", "images/full1_2.jpg"]
    }
  ],

  sleeveless: [
    {
      name: "Basketball Bulls",
      images: ["images/sleeveless/A01-01.jpg", "images/sleeveless/A01-02.jpg"]
    },
	    {
      name: "Basketball Lakers",
      images: ["images/sleeveless/A02-01.jpg", "images/sleeveless/A02-02.jpg"]
    }
  ]
};

/* RENDER PRODUCTS */
function renderCategory(categoryKey) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  const products = productsByCategory[categoryKey];

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <div class="slider" data-index="0" data-images='${JSON.stringify(p.images)}'>
<img src="${p.images[0]}" onclick="openImageZoom(this.src)">
          <button class="arrow left" onclick="slide(this,-1)">❮</button>
          <button class="arrow right" onclick="slide(this,1)">❯</button>
        </div>

        <h4>${p.name}</h4>
        <p>${categoryKey.toUpperCase()}</p>

        <select>
          <option>S</option><option>M</option><option>L</option>
          <option>XL</option><option>XXL</option>
        </select>

        <button onclick="addToCart('${p.name}','${categoryKey}',this.previousElementSibling.value)">
          Add to Cart
        </button>
      </div>
    `;
  });
}

function openImageZoom(src) {
  const modal = document.getElementById("imageZoomModal");
  const img = document.getElementById("zoomedImage");

  img.src = src;
  modal.style.display = "flex";
}

function closeImageZoom() {
  const modal = document.getElementById("imageZoomModal");
  modal.style.display = "none";
}

/* Close when clicking outside image */
document.getElementById("imageZoomModal").addEventListener("click", function(e) {
  if (e.target.id === "imageZoomModal") {
    closeImageZoom();
  }
});


document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;
    renderCategory(category);
  });
});


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
renderCategory("full");

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
