let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* PRODUCTS */
const productsByCategory = {
  full: [
    {
      name: "D01:Messi Barcelona",
      images: ["images/fullsleeve/D01-01.jpg", "images/fullsleeve/D01-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
    {
      name: "D02:Ronaldo Juvantus",
      images: ["images/fullsleeve/D02-01.jpg", "images/fullsleeve/D02-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "D03:Ronaldo Real Madrid",
 images: ["images/fullsleeve/D03-01.jpg", "images/fullsleeve/D03-02.jpg"]  ,
sizes: ["S","M","L","XL"] },
	    {
      name: "D04:Messi Barcelona",
 images: ["images/fullsleeve/D04-01.jpg", "images/fullsleeve/D04-02.jpg"] ,
sizes: ["S","M","L","XL"] },
	    {
      name: "D05:Ronaldo Real Madrid",
 images: ["images/fullsleeve/D05-01.jpg", "images/fullsleeve/D05-02.jpg"] ,
sizes: ["S","M","L","XL"] },
	    {
      name: "D06:Sergio Ramos Real Madrid",
 images: ["images/fullsleeve/D06-01.jpg", "images/fullsleeve/D06-02.jpg"]  ,
sizes: ["S","M","L","XL"] },
	    {
      name: "D07:Ronaldo Real Madrid",
 images: ["images/fullsleeve/D07-01.jpg", "images/fullsleeve/D07-02.jpg"]   ,
sizes: ["S","M","L","XL"] }

	
  ],

  half: [
    {
      name: "C01:RONALDINHO AC MILAN",
      images: ["images/halfsleeve/C01-01.jpg", "images/halfsleeve/C01-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C02:MESSI FC BARCELONA",
      images: ["images/halfsleeve/C02-01.jpg", "images/halfsleeve/C02-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C03:RONALDO MANCHESTER",
      images: ["images/halfsleeve/C03-01.jpg", "images/halfsleeve/C03-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C04:C.RONALDO MACHESTER",
      images: ["images/halfsleeve/C04-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C05:C.RONALDO REAL MADRID",
      images: ["images/halfsleeve/C05-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C06:C.RONALDO  JUVANTUS",
      images: ["images/halfsleeve/C06-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C07:MESSI FC BARCELONA",
      images: ["images/halfsleeve/C07-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C08:LAMINE YAMAL BARCELONA",
      images: ["images/halfsleeve/C08-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C09:LAMINE YAMAL BARCELONA",
      images: ["images/halfsleeve/C09-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C10:MBAPPE REAL MADRID",
      images: ["images/halfsleeve/C10-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C11:MBAPPE REAL MADRID",
      images: ["images/halfsleeve/C11-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C12:C.RONALDO SPORTING",
      images: ["images/halfsleeve/C12-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C13:BECKHAM ENGLAND",
      images: ["images/halfsleeve/C13-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C14:R.CARLOS REAL MADRID",
      images: ["images/halfsleeve/C14-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C15:C.RONALDO MACHESTER",
      images: ["images/halfsleeve/C15-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C16:GERRARD LIVERPOOL FC",
      images: ["images/halfsleeve/C16-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C17:MESSI FC BARCELONA",
      images: ["images/halfsleeve/C17-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C18:C.RONALDO SPORTING",
      images: ["images/halfsleeve/C18-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C19:MALDINI ENGLAND",
      images: ["images/halfsleeve/C19-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C20:C.RONALDO  JUVANTUS",
      images: ["images/halfsleeve/C20-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C21:BECKHAM MANCHESTER",
      images: ["images/halfsleeve/C21-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C22:MESSI FC BARCELONA",
      images: ["images/halfsleeve/C22-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C23:C.RONALDO MACHESTER",
      images: ["images/halfsleeve/C23-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C24:C.RONALDO PORTUGAL",
      images: ["images/halfsleeve/C24-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C25:CASILLAS READL MADRID GK",
      images: ["images/halfsleeve/C25-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C26:NEYMER SANTOS",
      images: ["images/halfsleeve/C26-01.jpg"],
	  sizes: ["S","M","L","XL"]
    }
  ],

  collar: [
    {
      name: "A01:ZIDAN REAL MADRID",
      images: ["images/collarNorFsleeve/A01-01.jpg", "images/collarNorFsleeve/A01-02.jpg", "images/collarNorFsleeve/A01-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A02:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A02-01.jpg", "images/collarNorFsleeve/A02-02.jpg", "images/collarNorFsleeve/A02-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A03:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A03-01.jpg", "images/collarNorFsleeve/A03-02.jpg", "images/collarNorFsleeve/A03-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A04:R.CARLOS INTER MILAN",
      images: ["images/collarNorFsleeve/A04-01.jpg", "images/collarNorFsleeve/A04-02.jpg", "images/collarNorFsleeve/A04-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A05:ZIDANE FRANCE",
      images: ["images/collarNorFsleeve/A05-01.jpg", "images/collarNorFsleeve/A05-02.jpg", "images/collarNorFsleeve/A05-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A06:BUFFON PARMA FC",
      images: ["images/collarNorFsleeve/A06-01.jpg", "images/collarNorFsleeve/A06-02.jpg", "images/collarNorFsleeve/A06-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A07:MARADONA BOCA JUNIORS",
      images: ["images/collarNorFsleeve/A07-01.jpg", "images/collarNorFsleeve/A07-02.jpg", "images/collarNorFsleeve/A07-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A08:RONALDO BRAZIL",
      images: ["images/collarNorFsleeve/A08-01.jpg", "images/collarNorFsleeve/A08-02.jpg","images/collarNorFsleeve/A08-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A09:RONALDO MANCHESTER UNITED",
      images: ["images/collarNorFsleeve/A09-01.jpg", "images/collarNorFsleeve/A09-02.jpg", "images/collarNorFsleeve/A09-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A10:CRUYFF AJAX",
      images: ["images/collarNorFsleeve/A10-01.jpg", "images/collarNorFsleeve/A10-02.jpg","images/collarNorFsleeve/A10-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A11:MALDINI ITALY",
      images: ["images/collarNorFsleeve/A11-01.jpg", "images/collarNorFsleeve/A11-02.jpg","images/collarNorFsleeve/A11-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A12:BALLACK GERMANY",
      images: ["images/collarNorFsleeve/A12-01.jpg", "images/collarNorFsleeve/A12-02.jpg","images/collarNorFsleeve/A12-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A13:ZIDANE FRANCE",
      images: ["images/collarNorFsleeve/A13-01.jpg", "images/collarNorFsleeve/A13-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A14:F.TORRES",
      images: ["images/collarNorFsleeve/A14-01.jpg", "images/collarNorFsleeve/A14-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A15:R.CARLOS",
      images: ["images/collarNorFsleeve/A15-01.jpg", "images/collarNorFsleeve/A15-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A16:ZIDANE",
      images: ["images/collarNorFsleeve/A16-01.jpg", "images/collarNorFsleeve/A16-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A17:BECKHAM",
      images: ["images/collarNorFsleeve/A17-01.jpg", "images/collarNorFsleeve/A17-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A18:MALDINI",
      images: ["images/collarNorFsleeve/A18-01.jpg", "images/collarNorFsleeve/A18-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A19:RONALDO",
      images: ["images/collarNorFsleeve/A19-01.jpg", "images/collarNorFsleeve/A19-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A20:MULLER",
      images: ["images/collarNorFsleeve/A20-01.jpg", "images/collarNorFsleeve/A20-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A21:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A21-01.jpg", "images/collarNorFsleeve/A22-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A22:MALDINI",
      images: ["images/collarNorFsleeve/A22-01.jpg", "images/collarNorFsleeve/A22-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A23:F.TORRES",
      images: ["images/collarNorFsleeve/A23-01.jpg", "images/collarNorFsleeve/A23-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A25:C. RONALDO PORTUGAL",
      images: ["images/collarNorFsleeve/A25-01.jpg", "images/collarNorFsleeve/A25-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A26:LAMPARD CHELSEA",
      images: ["images/collarNorFsleeve/A26-01.jpg", "images/collarNorFsleeve/A26-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A27:KAKA AC MILAN",
      images: ["images/collarNorFsleeve/A27-01.jpg", "images/collarNorFsleeve/A27-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A28:MARADONA ARGENTINA",
      images: ["images/collarNorFsleeve/A28-01.jpg", "images/collarNorFsleeve/A28-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A29:RONALDINHO BARCELONA",
      images: ["images/collarNorFsleeve/A29-01.jpg", "images/collarNorFsleeve/A29-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A30:ZIDAN FRANCE",
      images: ["images/collarNorFsleeve/A30-01.jpg", "images/collarNorFsleeve/A30-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A31:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A31-01.jpg", "images/collarNorFsleeve/A31-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A32:BECKHAM MANCHESTER UNITED",
      images: ["images/collarNorFsleeve/A32-01.jpg", "images/collarNorFsleeve/A32-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A33:OWEN NEW CASTLE",
      images: ["images/collarNorFsleeve/A33-01.jpg", "images/collarNorFsleeve/A33-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A34:BECKHAM MANCHESTER UNITED",
      images: ["images/collarNorFsleeve/A34-01.jpg", "images/collarNorFsleeve/A35-02.jpg"],
	  sizes: ["S","M","L","XL"]
    }
  ],

  five: [
    {
      name: "B01:RONALDINHO PSG",
      images: ["images/fivesleeve/B01-01.jpg", "images/fivesleeve/B01-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B02:RIVALDO FC BARCELONA",
      images: ["images/fivesleeve/B02-01.jpg", "images/fivesleeve/B02-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B03:IBRAHIMOVIC",
      images: ["images/fivesleeve/B03-01.jpg", "images/fivesleeve/B03-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B04:IBRAHIMOVIC",
      images: ["images/fivesleeve/B04-01.jpg", "images/fivesleeve/B04-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B05:MESSI",
      images: ["images/fivesleeve/B05-01.jpg", "images/fivesleeve/B05-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B06:BALLACK GERMANY",
      images: ["images/fivesleeve/B06-01.jpg", "images/fivesleeve/B06-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B07:GERMANY RETRO",
      images: ["images/fivesleeve/B07-01.jpg", "images/fivesleeve/B07-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B08:BECKENBAUER GERMANY",
      images: ["images/fivesleeve/B08-01.jpg", "images/fivesleeve/B08-02.jpg"],
	  sizes: ["S","M","L","XL"]
    }
	
  ],

  sleeveless: [
    {
      name: "A01:Basketball Bulls",
      images: ["images/sleeveless/A01-01.jpg", "images/sleeveless/A01-02.jpg"],
	  sizes: ["S","M","L","XL","XXL"]
    },
	    {
      name: "A02:Basketball Lakers",
      images: ["images/sleeveless/A02-01.jpg", "images/sleeveless/A02-02.jpg"],
	  sizes: ["S","M","L","XL","XXL"]
    }
  ]
};

function renderCategory(categoryKey) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  const products = productsByCategory[categoryKey];

  products.forEach(p => {
    const sizes = p.sizes && p.sizes.length ? p.sizes : DEFAULT_SIZES;

    const sizeOptions = sizes
      .map(s => `<option value="${s}">${s}</option>`)
      .join("");

    container.innerHTML += `
      <div class="card">
        <div class="slider" data-index="0" data-images='${JSON.stringify(p.images)}'>
          <img src="${p.images[0]}" onclick="openImageZoom(this.src)">
          <button class="arrow left" onclick="slide(this,-1)">❮</button>
          <button class="arrow right" onclick="slide(this,1)">❯</button>
        </div>

        <h4>${p.name}</h4>
        <p>${categoryKey.toUpperCase()}</p>

        <select class="size-select">
          ${sizeOptions}
        </select>

        <button onclick="addToCart(
          '${p.name}',
          '${categoryKey}',
          this.previousElementSibling.value
        )">
          Add to Cart
        </button>
      </div>
    `;
  });
}

/***********************
 * IMAGE SLIDER
 ***********************/
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

/***********************
 * IMAGE ZOOM MODAL
 ***********************/
function openImageZoom(src) {
  document.getElementById("zoomedImage").src = src;
  document.getElementById("imageZoomModal").style.display = "flex";
}

function closeImageZoom() {
  document.getElementById("imageZoomModal").style.display = "none";
}

document.getElementById("imageZoomModal").addEventListener("click", e => {
  if (e.target.id === "imageZoomModal") closeImageZoom();
});

/***********************
 * TABS
 ***********************/
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderCategory(tab.dataset.category);
  });
});

/***********************
 * CART
 ***********************/
function addToCart(name, type, size) {
  cart.push({ name, type, size });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function openCart() {
  document.getElementById("cartModal").style.display = "block";
  renderCart();
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

function renderCart() {
  const div = document.getElementById("cartItems");
  div.innerHTML = "";

  cart.forEach((c, i) => {
    div.innerHTML += `
      <div class="cart-item">
        <span>${c.name} (${c.size})</span>
        <button class="remove" onclick="removeItem(${i})">X</button>
      </div>
    `;
  });
}

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

/***********************
 * WHATSAPP CHECKOUT
 ***********************/
function checkout() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;

  if (!name || !mobile || cart.length === 0) {
    alert("Please fill details and add items");
    return;
  }

  let msg = `DOUTFIT SPORTS ORDER%0AName: ${name}%0AMobile: ${mobile}%0A%0A`;

  cart.forEach((c, i) => {
    msg += `${i + 1}. ${c.name} - ${c.size}%0A`;
  });

  window.open(
    `https://wa.me/919947118668?text=${msg}`,
    "_blank"
  );
}

/***********************
 * INIT
 ***********************/
renderCategory("full");

window.onload = function () {
  document.getElementById("cartModal").style.display = "none";
};

// Show info modal on page load (once)
window.addEventListener("load", () => {
  if (!localStorage.getItem("infoSeen")) {
    document.getElementById("infoModal").style.display = "flex";
  }
});

function closeInfoModal() {
  document.getElementById("infoModal").style.display = "none";
  localStorage.setItem("infoSeen", "yes");
}
