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
      name: "RONALDINHO AC MILAN",
      images: ["images/halfsleeve/C01-01.jpg", "images/halfsleeve/C01-02.jpg"]
    },
	{
      name: "MESSI FC BARCELONA",
      images: ["images/halfsleeve/C02-01.jpg", "images/halfsleeve/C02-02.jpg"]
    },
	{
      name: "RONALDO MANCHESTER",
      images: ["images/halfsleeve/C03-01.jpg", "images/halfsleeve/C03-02.jpg"]
    }
  ],

  collar: [
    {
      name: "ZIDAN REAL MADRID",
      images: ["images/collarNorFsleeve/A01-01.jpg", "images/collarNorFsleeve/A01-02.jpg", "images/collarNorFsleeve/A01-03.jpg"]
    },
	  {
      name: "BEKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A02-01.jpg", "images/collarNorFsleeve/A02-02.jpg", "images/collarNorFsleeve/A02-03.jpg"]
    },
	  {
      name: "BEKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A03-01.jpg", "images/collarNorFsleeve/A03-02.jpg", "images/collarNorFsleeve/A03-03.jpg"]
    },
	  {
      name: "R.CARLOS INTER MILAN",
      images: ["images/collarNorFsleeve/A04-01.jpg", "images/collarNorFsleeve/A04-02.jpg", "images/collarNorFsleeve/A04-03.jpg"]
    },
	  {
      name: "ZIDANE FRANCE",
      images: ["images/collarNorFsleeve/A05-01.jpg", "images/collarNorFsleeve/A05-02.jpg", "images/collarNorFsleeve/A05-03.jpg"]
    },
	  {
      name: "BUFFON PARMA FC",
      images: ["images/collarNorFsleeve/A06-01.jpg", "images/collarNorFsleeve/A06-02.jpg", "images/collarNorFsleeve/A06-03.jpg"]
    },
	  {
      name: "MARADONA BOCA JUNIORS",
      images: ["images/collarNorFsleeve/A07-01.jpg", "images/collarNorFsleeve/A07-02.jpg", "images/collarNorFsleeve/A07-03.jpg"]
    },
	  {
      name: "RONALDO BRAZIL",
      images: ["images/collarNorFsleeve/A08-01.jpg", "images/collarNorFsleeve/A08-02.jpg","images/collarNorFsleeve/A08-03.jpg"]
    },
	  {
      name: "RONALDO MANCHESTER UNITED",
      images: ["images/collarNorFsleeve/A09-01.jpg", "images/collarNorFsleeve/A09-02.jpg", "images/collarNorFsleeve/A09-03.jpg"]
    },
	  {
      name: "CRUYFF AJAX",
      images: ["images/collarNorFsleeve/A10-01.jpg", "images/collarNorFsleeve/A10-02.jpg","images/collarNorFsleeve/A10-03.jpg"]
    },
	  {
      name: "MALDINI ITALY",
      images: ["images/collarNorFsleeve/A11-01.jpg", "images/collarNorFsleeve/A11-02.jpg","images/collarNorFsleeve/A11-03.jpg"]
    },
	  {
      name: "BALLACK GERMANY",
      images: ["images/collarNorFsleeve/A12-01.jpg", "images/collarNorFsleeve/A12-02.jpg","images/collarNorFsleeve/A12-03.jpg"]
    },
	  {
      name: "ZIDANE",
      images: ["images/collarNorFsleeve/A13-01.jpg", "images/collarNorFsleeve/A13-02.jpg"]
    },
	  {
      name: "F.TORRES",
      images: ["images/collarNorFsleeve/A14-01.jpg", "images/collarNorFsleeve/A14-02.jpg"]
    },
	  {
      name: "R.CARLOS",
      images: ["images/collarNorFsleeve/A15-01.jpg", "images/collarNorFsleeve/A15-02.jpg"]
    },
	  {
      name: "ZIDANE",
      images: ["images/collarNorFsleeve/A16-01.jpg", "images/collarNorFsleeve/A16-02.jpg"]
    },
	  {
      name: "BEKHAM",
      images: ["images/collarNorFsleeve/A17-01.jpg", "images/collarNorFsleeve/A17-02.jpg"]
    },
	  {
      name: "MALDINI",
      images: ["images/collarNorFsleeve/A18-01.jpg", "images/collarNorFsleeve/A18-02.jpg"]
    },
	  {
      name: "RONALDO",
      images: ["images/collarNorFsleeve/A19-01.jpg", "images/collarNorFsleeve/A19-02.jpg"]
    },
	  {
      name: "MULLER",
      images: ["images/collarNorFsleeve/A20-01.jpg", "images/collarNorFsleeve/A20-02.jpg"]
    },
	  {
      name: "BECKHAM",
      images: ["images/collarNorFsleeve/A21-01.jpg", "images/collarNorFsleeve/A22-02.jpg"]
    },
	  {
      name: "MALDINI",
      images: ["images/collarNorFsleeve/A22-01.jpg", "images/collarNorFsleeve/A22-02.jpg"]
    },
	  {
      name: "F.TORRES",
      images: ["images/collarNorFsleeve/A23-01.jpg", "images/collarNorFsleeve/A23-02.jpg"]
    }
  ],

  five: [
    {
      name: "RONALDINHO PSG",
      images: ["images/fivesleeve/B01-01.jpg", "images/fivesleeve/B01-02.jpg"]
    },
	    {
      name: "RIVALDO FC BARCELONA",
      images: ["images/fivesleeve/B02-01.jpg", "images/fivesleeve/B02-02.jpg"]
    },
	    {
      name: "IBRAHIMOVIC",
      images: ["images/fivesleeve/B03-01.jpg", "images/fivesleeve/B03-02.jpg"]
    },
	    {
      name: "IBRAHIMOVIC",
      images: ["images/fivesleeve/B04-01.jpg", "images/fivesleeve/B04-02.jpg"]
    },
	    {
      name: "MESSI",
      images: ["images/fivesleeve/B05-01.jpg", "images/fivesleeve/B05-02.jpg"]
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
