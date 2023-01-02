
// let client = contentful.createClient({
//   space: 'yc2c74qk5e2y',
//   accessToken: 'g6mxTM8rR5Hk-1KokuoOEC7jPPP8-GcAQrQI6wLXXvM',
// });

let client = contentful.createClient({
    space: 'aiosl5ylywlg',
    accessToken: 'NKQuUYUlmPCCyKbetjFQqgxEQ3mkKOZeFDNBuVVl9Oc',
  });

// fetch API
function getProducts() {
  return client.getEntries({
    content_type: 'products'
  })
  .then(response => response.items)
  .catch(console.error)
}

function getCategory() {
  return client.getEntries({
      content_type: 'category',
    })
    .then(entries => entries.items)
    .catch(console.error)
}
function getProductBanner() {
  return client.getEntries({
    content_type: 'banner',
  })
  .then(entries => entries.items)
  .catch(console.error)
}

function getFilterProducts(category) {
  return client.getEntries({
    content_type: 'products',
    'fields.kategori.sys.id' : category
  })
  .then(entries => entries.items)
  .catch(console.error)
 }
// =============================================


// User define functions
function discount (harga, diskon) {
  let potonganHarga = (harga * diskon) / 100
  return `Rp ${harga - potonganHarga}` ;
}

function trimString (el, num) {
  let element = document.querySelectorAll("." + el)
  element.forEach ((el) => {
      let trimmedString = el.textContent.length > num ? el.textContent.substring(0, num - 3) + "..." : el.textContent.substring(0 ,num) 
      el.textContent = trimmedString;
  })
}
// ==========================================

// UI Component
function bannerEL (entry) {
  return ` <div class="swiper-slide"><img src="${entry.fields.bannerImage.fields.file.url}" alt="">
  <span class="block absolute z-30 bg-black/20  w-full h-full">
  </span>
</div>
`
}
function categoryEL(entry) {
  return `<button data-itemid="${entry.sys.id}" class="category py-2 px-6 text-primaryRed whitespace-nowrap border-[1px] border-primaryRed md:text-[18px] text-sm font-bold rounded-xl">${entry.fields.text}</button>`
}

function catalogEL({fields:{deskripsi, diskon, foto, harga, nama}, sys}) {
  // md:w-[386px] md:h-full md:max-h-[278px] h-[265px] w-[183px]
  // alert('test')
  return `
  <a href="details.html?itemid=${sys.id}">
  <div  class="catalog-list-item slider-inner md:w-[400px] md:h-[300px] w-[240px] h-[180px]   catalog__list group relative shrink-0 rounded-xl md:bg-transparent bg-light  overflow-hidden box-border">
  
  <img  class="md:p-0      px-1 py-2 block object-cover rounded-xl" src="${foto[0].fields.file.url}" alt="${foto[0].fields.description}">
  
  <div class="md:block hidden group">
      <div
          class=" flex  group-hover:opacity-100 opacity-0 group-hover:bg-black/60 ease-in-out duration-300 absolute inset-0 z-40  flex-col justify-center   after:content-[''] after:right-0 after:left-0 after:bottom-0 after:top-48 after:absolute after:bg-gradient-to-t after:from-black after:via-black/60 after:to-transparent">
          <div class="inner-wrapper px-[18px] h-[120px] mb-[39.5px]">
              <div class="flex justify-between">
                  <span class="product-title-desktop px-3 pb-2 text-light text-lg font-bold ">${nama}</span>
                  <div class="flex flex-col shrink-0">
                      <span class="px-3 text-light text-lg font-medium ">${discount(harga, diskon)}</span>
                      ${ diskon > 0 ? `<span class="px-3 text-link text-xs text-right font-medium line-through">Rp ${harga}</span>` : `` }
                  </div>
              </div>
              <div class="flex justify-between items-start shrink-0 ">
                  <p class="product-description-desktop max-w-[231px] px-3 text-light text-xs font-medium">${deskripsi}</p>
                  <img class="mx-3 w-[54px] h-[48px]" src="img/add-to-cart.svg" alt="">
              </div>
          </div>
      </div>
  </div>
  <div
      class="md:hidden z-10 relative flex flex-col  h-[145px]">
      <span class="block px-3 text-primaryDark text-sm font-bold">${discount(harga, diskon)}</span>
      ${ diskon > 0 ? `<span class="block px-3 text-secondaryRed text-xs font-bold line-through">Rp ${harga}</span>` : ``}
      <span class="product-title-mobile block px-3 text-primaryDark text-sm font-bold ">${nama}</span>
      <p class="product-description-mobile px-3 text-primaryDark text-xs font-medium">${deskripsi}</p>
      <span class="block  bg-gradient-to-t from-white/70 to-transparent absolute bottom-0 top-[90px] right-0  left-0 z-40"></span>
  </div>
</div>
</a> `
}
// ============================

// Show UI to HTML
function bannerUI (items) {
  console.log(items)
  let banners = '';
  items.forEach(item => banners += bannerEL(item))
  const container = document.querySelector('.banner-container')
  container.innerHTML = banners;

  swiperBannerDOM()
}

function categoryUI(items) {
  let categories = '';
  items.forEach(e => categories += categoryEL(e))
  const container = document.getElementById('catalog-category');
  container.innerHTML = categories;
console.log(categories)
  // run DOM logic
  categoryDOM()
}

function catalogUI (items) {
  console.log(items)
  let cards = '';
  items.forEach(item => cards += catalogEL(item));
  const container = document.querySelector('.catalog-list-container')
  container.innerHTML = cards;
  // run DOM logic
  trimString('product-description-mobile', 67)
  trimString('product-description-desktop', 192) 
  trimString('product-title-desktop', 30)
  trimString('product-title-mobile', 30)
}
// ============================

// DOM Logic
function swiperBannerDOM() {
  new Swiper(".mySwiper", {
    lazy: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        //   dynamicBullets: true,
        renderBullet: function (index, className) {
            return "<span class=" + className + "></span>";
        },
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
}
function categoryDOM() {
  const categoryButtons = document.querySelectorAll('.category');
  const firstCategory = document.querySelector('.category')
  firstCategory.classList.add('selected')
  async function selectedFirst () {
    let filterBy = firstCategory.dataset.itemid;
    console.log(filterBy)
    let filteredItems = await getFilterProducts(filterBy);
    console.log(filteredItems)
    catalogUI(filteredItems)
  }
 selectedFirst()

  categoryButtons.forEach(function (categoryButton) {
    categoryButton.addEventListener('click', async function (e) {
      if (e.target.classList.contains('selected') === false) {
        categoryButtons.forEach(function (categoryButton) {
          categoryButton.classList.remove('selected')
        })
      } 
      e.target.classList.add('selected')
        let filterBy = e.target.dataset.itemid;
        console.log(filterBy)
        let filteredItems = await getFilterProducts(filterBy);
        console.log(filteredItems)
        catalogUI(filteredItems)
        
    })
  })
}

// ============================
// Execute Functions
async function banner() {
  let banners = await getProductBanner();
  bannerUI(banners)
}

// run banner
banner()

async function category() {
  let categories = await getCategory();
  categoryUI(categories)
}

// run category 
category()

async function catalog() {
  let catalogs = await getProducts();
  console.log(catalogs)
  catalogUI(catalogs)
}

// run catalog
catalog()









