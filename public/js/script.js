// index.html

// category selection | index.html
// setTimeout (function(){

//     const categories = document.querySelector('#catalog-category');
//     const categoryButtons = document.querySelectorAll('.category');
//     const firstCategory = document.querySelector('#catalog-category:first-child')
//     console.log(firstCategory)
//     console.log(categoryButtons)


// categoryButtons.forEach(function (categoryButton) {
//     categoryButton.addEventListener('click', function (e) {
//         if (e.target.classList.contains('selected') === false) {
//             categoryButtons.forEach(function (categoryButton) {
//                 categoryButton.classList.remove('selected')
//             })
//             e.target.classList.add('selected')
//         } else if (e.target.classList.contains('selected') === true) {

//             alert('refresh data');
//         }

//     })
// })

// Footer | index.html
const contacts = document.querySelectorAll('.mobile-footer__contact');
const popUps = document.querySelectorAll('.mobile-footer__pop-up');
document.body.addEventListener('click', function (e) {
    if (!e.target.nextElementSibling.classList.contains("popup")) {
        closePopUp()
    }
})

contacts.forEach(function (contact) {
    contact.addEventListener('click', function (e) {
        closePopUp()
        if (e.target.nextElementSibling.classList.contains("hidden")) {
            e.target.nextElementSibling.classList.replace("hidden", "block");
        } else {
            e.target.nextElementSibling.classList.replace("block", "hidden");
        }
    })
})

function closePopUp() {
    popUps.forEach(function (popUp) {
        popUp.classList.replace('block', 'hidden');
    })
}

// customer service | index.html

const customer = document.querySelector('.cta-button__customer');
const whatsapp = document.querySelector('.cta-button__list__whatsapp');
const message = document.querySelector('.cta-button__list__message');
const closeCustomer = document.querySelector('.cta-button__close');

function showList() {
    whatsapp.classList.remove('hideWhatsapp')
    message.classList.remove('hideMessage')
    whatsapp.classList.toggle('showWhatsapp')
    message.classList.toggle('showMessage')
}

function hideList() {
    whatsapp.classList.toggle('hideWhatsapp')
    message.classList.toggle('hideMessage')

    whatsapp.classList.remove('showWhatsapp')
    message.classList.remove('showMessage')
}

if (customer) {
    customer.addEventListener('click', function (e) {
        e.stopPropagation();
        showList()
        customer.classList.add("disappear");
        closeCustomer.classList.add("appear");

    })

    closeCustomer.addEventListener('click', function (e) {
        e.stopPropagation();
        hideList()
        closeCustomer.classList.replace("appear", "disappear");
        customer.classList.replace("disappear", "appear");

        setTimeout(function () {
            closeCustomer.classList.remove("disappear");
            customer.classList.remove("appear");
        }, 500)
    })

}
// Click and Drag to Scroll | index.html

const sliders = document.querySelectorAll('.slider');
sliders.forEach(function (slider) {

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    })
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active')
    })
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active')
    })
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return; // stop the function from running

        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;

        const walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;

    })
})

// image gallery | details.html

// Atur Jumlah | details.html

let jumlahItems = document.querySelector('.jumlah-items');




// filter  | catalog.html

const filterGroup = document.querySelector('.filter-group');
if (filterGroup) {
    const filters = document.querySelectorAll('.filter');
    const popupFilter = document.querySelector('.popup-filter');
    const greenUpButtons = document.querySelectorAll('.green-up');
    const redDownButtons = document.querySelectorAll('.red-down');
    const sortBy = document.querySelectorAll('.sortBy');

    filterGroup.addEventListener('click', function (e) {
        console.log(e.target)
        console.log(e)

        filters.forEach(function (filter) {
            if (e.target == filter) {
                popupFilter.classList.toggle('hidden')
                popupFilter.classList.toggle('flex')
            }

        })
        sortBy.forEach(function (sort) {
            greenUpButtons.forEach(function (greenUp) {
                redDownButtons.forEach(function (redDown) {
                    if (e.target == sort) {
                        console.log(redDown)
                        if (redDown.classList.contains('hidden')) {
                            greenUp.classList.replace('block', 'hidden')
                            greenUp.nextElementSibling.classList.replace('hidden', 'block')
                        } else if (greenUp.classList.contains('hidden')) {
                            redDown.classList.replace('block', 'hidden')
                            redDown.previousElementSibling.classList.replace('hidden', 'block')
                        }
                    }

                })
            })
        })

    })

}


