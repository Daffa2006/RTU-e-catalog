const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const itemid = urlParams.get('itemid')
console.log(itemid);

let client = contentful.createClient({
    space: 'yc2c74qk5e2y',
    accessToken: 'g6mxTM8rR5Hk-1KokuoOEC7jPPP8-GcAQrQI6wLXXvM',
});

// Fetch API
function getProductByItemId () {
return client.getEntry(itemid)
    .then((entry) => entry)
    .catch(console.error)
}

// Detail product elements
function detailsEL({fields:{deskripsi, diskon, foto, harga, detail, nama}, sys}) {  
    return `
    <section id="image-gallery" class=" flex flex-col col-span-5">
            <div>
                <img class="main-gallery md:w-full md:h-[441px] w-full h-[314px] sm:h-[414px] object-cover" >
            </div>
          
            <div
                class="list-selection-gallery overflow-x-scroll flex md:justify-start md:gap-x-[20px] gap-x-[34.67px]   pt-2 pb-4 pl-4">
                ${foto.map(f => {
                  return `<img class="select-gallery  bg-gray-900 hover--scale-opacity rounded-[4px] w-[56px] h-[56px] object-cover shrink-0"
                src="${f.fields.file.url}" alt="${f.fields.description}">`
                }).join('')
            }
            </div>
        </section>

        <section id="checkout" class="md:pl-8 px-4  col-span-4">
            <div id="checkout-border"
                class="md:p-4 py-4 md:rounded-2xl md:border-[1px] md:border-darkRed border-t-[1px] border-t-primaryRed">
                <header>
                    <span class="block md:text-xl text-lg text-primaryDark font-medium">${nama}</span>
                </header>
                <div class="md:gap-y-4 flex flex-col items-between justify-center w-full  ">
                    <div class="flex flex-row md:pt-6 pt-4">
                        <span class="md:text-sm text-xs font-medium text-primaryDark shrink-0">Atur Jumlah</span>
                        <div class="flex justify-end w-full gap-x-4">
                            <span class="md:text-sm  text-xs font-medium text-primaryDark">Tersisa</span>
                            <span class="md:text-sm  text-xs font-bold text-primaryDark ">69</span>
                        </div>
                    </div>
                    <div class="md:gap-y-4  md:flex-col flex flex-row gap-y-2 pb-4">
                        <div
                            class="flex md:w-[117px] md:h-[25px] w-[104px] h-[25px] items-center  border-[1px] border-primaryDark rounded-[4px]  overflow-hidden text-center box-border">
                           <button type="button" class="kurang w-1/4" aria-label="Kurangi 1">
                                <i class="cursor-pointer fa-solid fa-minus font-semibold md:text-sm text-xs"></i>
                          </button>
                            <div class="w-2/4 border-x-[1px] border-x-primaryDark">
                                <input type="number" value="1" class="input-jumlah text-center h-96 jumlah-items w-full md:text-sm text-xs font-medium appearance-none ">
                            </div>
                            <button type="button" class="tambah w-1/4" aria-label="Tambah 1">
                                <i class="w-1/4 cursor-pointer fa-solid fa-plus font-semibold md:text-sm text-xs text-darkRed"></i>
                            </button>

                        </div>
                        <div class="flex md:justify-between justify-end w-full gap-x-2">
                            <span class="md:text-sm  text-xs font-medium text-primaryDark">Subtotal</span>
                            <span class="md:text-sm  text-xs font-medium text-darkRed">Rp 690.420</span>
                        </div>
                    </div>
                </div>

                <!-- CTA Buttons -->
                <form action="" class="md:gap-y-4 w-full flex flex-col items-center gap-y-2">
                    <button type="submit"
                        class=" w-full bg-light rounded-2xl py-[12px] text-primaryRed border-[1px] border-primaryRed font-bold">+
                        Keranjang</button>
                    <button type="submit"
                        class=" bg-primaryRed text-light flex items-center justify-center w-full gap-x-[10px] py-[12px] rounded-2xl">
                        <img src="img/whatsapp-icon.svg" alt="whatsapp-icon">
                        <span class="md:text-lg text-sm font-bold text-light">Checkout</span>
                    </button>
                </form>
            </div>
            <div class="share flex justify-center items-center gap-x-[14px] md:py-4 py-2">
                <span class="md:text-base text-sm text-primaryDark font-medium">Share</span>

                <!-- facebook -->
                <svg class="md:w-8 md:h-8 w-6 h-6" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.5 20.1117C0.5 30.055 7.72167 38.3233 17.1667 40V25.555H12.1667V20H17.1667V15.555C17.1667 10.555 20.3883 7.77833 24.945 7.77833C26.3883 7.77833 27.945 8 29.3883 8.22167V13.3333H26.8333C24.3883 13.3333 23.8333 14.555 23.8333 16.1117V20H29.1667L28.2783 25.555H23.8333V40C33.2783 38.3233 40.5 30.0567 40.5 20.1117C40.5 9.05 31.5 0 20.5 0C9.5 0 0.5 9.05 0.5 20.1117Z"
                        fill="#FF2E2E" />
                </svg>

                <!-- Whatsapp -->
                <svg class="md:w-8 md:h-8 w-6 h-6" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M37.5085 9.24976C31.525 -0.000305774 19.3087 -2.75033 9.83481 2.99972C0.610229 8.74976 -2.38153 21.2499 3.60199 30.4999L4.10061 31.2499L2.10611 38.75L9.5855 36.75L10.3334 37.25C13.5745 39 17.0649 40 20.5553 40C24.295 40 28.0347 39 31.2757 37C40.5003 30.9999 43.2427 18.7498 37.5085 9.24976ZM32.273 28.4999C31.2757 29.9999 30.0292 30.9999 28.284 31.2499C27.2867 31.2499 26.0402 31.7499 21.0539 29.7499C16.8156 27.7499 13.3252 24.4999 10.8321 20.7499C9.33618 18.9998 8.58824 16.7498 8.33893 14.4998C8.33893 12.4998 9.08687 10.7498 10.3334 9.49977C10.8321 8.99976 11.3307 8.74976 11.8293 8.74976H13.0759C13.5745 8.74976 14.0731 8.74976 14.3224 9.74977C14.8211 10.9998 16.0676 13.9998 16.0676 14.2498C16.3169 14.4998 16.3169 14.9998 16.0676 15.2498C16.3169 15.7498 16.0676 16.2498 15.8183 16.4998C15.569 16.7498 15.3197 17.2498 15.0704 17.4998C14.5718 17.7498 14.3224 18.2498 14.5718 18.7498C15.569 20.2498 16.8156 21.7499 18.0621 22.9999C19.558 24.2499 21.0539 25.2499 22.7991 25.9999C23.2977 26.2499 23.7963 26.2499 24.0456 25.7499C24.295 25.2499 25.5415 23.9999 26.0402 23.4999C26.5388 22.9999 26.7881 22.9999 27.2867 23.2499L31.2757 25.2499C31.7744 25.4999 32.273 25.7499 32.5223 25.9999C32.7716 26.7499 32.7716 27.7499 32.273 28.4999Z"
                        fill="#FF2E2E" />
                </svg>

                <!-- Instagram -->
                <svg class="md:w-8 md:h-8 w-6 h-6" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.4946 13.3305C16.8222 13.3305 13.8252 16.3275 13.8252 20C13.8252 23.6725 16.8222 26.6695 20.4946 26.6695C24.167 26.6695 27.164 23.6725 27.164 20C27.164 16.3275 24.167 13.3305 20.4946 13.3305ZM40.4978 20C40.4978 17.2381 40.5228 14.5013 40.3677 11.7444C40.2126 8.54226 39.4821 5.70034 37.1406 3.35876C34.794 1.01217 31.9572 0.286681 28.7551 0.131576C25.9932 -0.0235287 23.2564 0.00148823 20.4996 0.00148823C17.7378 0.00148823 15.001 -0.0235287 12.2442 0.131576C9.0421 0.286681 6.20023 1.01717 3.85869 3.35876C1.51215 5.70534 0.786675 8.54226 0.631574 11.7444C0.476472 14.5063 0.501488 17.2431 0.501488 20C0.501488 22.7569 0.476472 25.4987 0.631574 28.2556C0.786675 31.4577 1.51716 34.2997 3.85869 36.6412C6.20524 38.9878 9.0421 39.7133 12.2442 39.8684C15.006 40.0235 17.7428 39.9985 20.4996 39.9985C23.2614 39.9985 25.9982 40.0235 28.7551 39.8684C31.9572 39.7133 34.799 38.9828 37.1406 36.6412C39.4871 34.2947 40.2126 31.4577 40.3677 28.2556C40.5278 25.4987 40.4978 22.7619 40.4978 20ZM20.4946 30.2619C14.8159 30.2619 10.2329 25.6788 10.2329 20C10.2329 14.3212 14.8159 9.73807 20.4946 9.73807C26.1734 9.73807 30.7564 14.3212 30.7564 20C30.7564 25.6788 26.1734 30.2619 20.4946 30.2619ZM31.1766 11.7144C29.8508 11.7144 28.7801 10.6437 28.7801 9.31778C28.7801 7.99189 29.8508 6.92116 31.1766 6.92116C32.5025 6.92116 33.5732 7.99189 33.5732 9.31778C33.5736 9.63262 33.5119 9.94445 33.3916 10.2354C33.2713 10.5263 33.0948 10.7907 32.8722 11.0133C32.6495 11.236 32.3852 11.4125 32.0942 11.5328C31.8033 11.6531 31.4915 11.7148 31.1766 11.7144Z"
                        fill="#FF2E2E" />
                </svg>

                <!-- Twitter -->
                <svg class="md:w-8 md:h-8 w-6 h-6" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.5 0C9.45536 0 0.5 8.95536 0.5 20C0.5 31.0446 9.45536 40 20.5 40C31.5446 40 40.5 31.0446 40.5 20C40.5 8.95536 31.5446 0 20.5 0ZM30.1116 15.0759C30.125 15.2857 30.125 15.5045 30.125 15.7188C30.125 22.2723 25.1339 29.8214 16.0134 29.8214C13.2009 29.8214 10.5938 29.0045 8.39732 27.5982C8.79911 27.6429 9.18304 27.6607 9.59375 27.6607C11.9152 27.6607 14.0491 26.875 15.75 25.5446C13.5714 25.5 11.7411 24.0714 11.1161 22.1071C11.8795 22.2188 12.567 22.2188 13.3527 22.0179C12.2309 21.79 11.2227 21.1807 10.4992 20.2937C9.7757 19.4066 9.38164 18.2965 9.38393 17.1518V17.0893C10.0402 17.4598 10.8125 17.6875 11.6205 17.7188C10.9413 17.266 10.3842 16.6527 9.99871 15.9332C9.61323 15.2136 9.41127 14.4101 9.41072 13.5938C9.41072 12.6696 9.65179 11.8259 10.0848 11.0938C11.3299 12.6265 12.8836 13.8801 14.6449 14.7731C16.4062 15.666 18.3358 16.1784 20.308 16.2768C19.6071 12.9063 22.125 10.1786 25.1518 10.1786C26.5804 10.1786 27.8661 10.7768 28.7723 11.7411C29.8929 11.5312 30.9643 11.1116 31.9196 10.5491C31.5491 11.6964 30.7723 12.6652 29.7411 13.2768C30.7411 13.1696 31.7054 12.8929 32.5982 12.5045C31.9241 13.4955 31.0804 14.375 30.1116 15.0759Z"
                        fill="#FF2E2E" />
                </svg>

            </div>
        </section>

        <section id="product-desc" class="mt-4 md:col-span-9">
            <div class="md:px-0 flex flex-col  px-4 w-full">
                <!-- Products Details -->
                ${detail === undefined ? '' : `<span class="md:text-sm  bg-secondaryLight font-medium text-sm text-primaryDark px-[10px] py-1 ">Detail
                Produk</span>
            <div class="flex flex-col h-[85px] justify-around">
            <pre
                class="md:text-sm  font-montserrat md:col-span-12  px-[10px] text-xs font-medium text-primaryDark  whitespace-pre-line pt-[10px] ">
          ${detail}
            </pre>
            </div>` }
                

                <!-- Product Description -->
                <span
                    class="md:text-sm  bg-secondaryLight font-medium text-sm text-primaryDark px-[10px] py-1 ">Deskripsi
                    Produk</span>
                <pre
                    class="md:text-sm  font-montserrat md:col-span-12  px-[10px] text-xs font-medium text-primaryDark whitespace-pre-line pt-[10px] ">
                   ${deskripsi}
            </pre>
            </div>
        </section>`
}

// DOM Logic
function galleryDOM() {
let mainGallery = document.querySelector('.main-gallery');
let selectGallery = document.querySelectorAll('.select-gallery');
let firstGallery = document.querySelector('.select-gallery:first-child')

    firstGallery.classList.add('selected-gallery')
    console.log(firstGallery)
    mainGallery.src = firstGallery.src;

    function clearAllSelection() {
        selectGallery.forEach(function (e) {
            e.classList.remove('selected-gallery');
        })
    }
    selectGallery.forEach(function (select) {
        select.addEventListener('click', function (e) {
            clearAllSelection()
            mainGallery.src = e.target.src;
            e.target.classList.add('selected-gallery');
        })
        
        select.addEventListener('mouseenter', function (e) {
            mainGallery.src = e.target.src;
            e.target.style.animation = "fade-in 0.5s forwards";

        })

        select.addEventListener('mouseleave', function (e) {
            let selectedGallery = document.querySelector('.selected-gallery')
            mainGallery.src = selectedGallery.src;
            e.target.style.animation = "fade-out 0.5s forwards ";
            setTimeout(function(){
                e.target.style.animation = "fade-in-2 0.3s forwards";
            }, 200)
        })
    })
}

function inputJumlah () {
    let input = document.querySelector('.input-jumlah')
    const tambah = document.querySelector('.tambah');
    const kurang = document.querySelector('.kurang');
    console.log(input)
    input.addEventListener('input', (e) => {
        console.log(e)
        if (e.target.value >= 69) {
           e.target.value = 69;
        }
    })
    
    tambah.addEventListener('click', () => {
     input.value = parseInt(input.value) + 1;
     if (parseInt(input.value) >= 69) {
        input.value = 69;
     }
    })

    kurang.addEventListener('click', () => {
        input.value = parseInt(input.value) - 1;
        if (parseInt(input.value) <= 1) {
            input.value = 1;
         }
    })
}

// Show UI to HTML
function detailsUI (item) {
    let details = detailsEL(item)
    const container = document.querySelector('.details-container');
    container.innerHTML = details;
    
    // run DOM
    galleryDOM()
    inputJumlah()
}

// Execute function
async function details() {
    let product = await getProductByItemId()
    console.log(product)
    detailsUI(product)
}

// run details
details()



