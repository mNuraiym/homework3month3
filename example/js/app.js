const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")
const tabContentImages = document.querySelectorAll('.tabcontent img')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
    tabContentImages.forEach((item) => {
        item.style.opacity = '0.5'
    })
}

const showTabContent = (i = 3) => {
    tabContent[i].style.display = "block"
    setTimeout(() => {
        tabContentImages[i].style.opacity = '1'
    },0)
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()

let i = 0
const autoMove = () => {
    setInterval(()=>{
        if (i <= 3){
            hideTabContent()
            showTabContent(i)
            i++
        }else{
            i = 0
        }
    },1000)
}
autoMove()

let currSlide = 0;
setInterval(() => {
    if (currSlide < 3) {
        currSlide++
        hideTabContent()
        showTabContent(currSlide)
    } else {
        currSlide = 0
        hideTabContent()
        showTabContent(currSlide)
    }
},5000);

const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"

}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}
closeModalBtn.addEventListener('click',closeModal);

let isModalOpened = false
window.onscroll = () => {
    if (document.documentElement.scrollTop >= 3400 && isModalOpened === false) {
        isModalOpened = true
        openModal();
    }
}

document.body.addEventListener('click', (e) => {
   if (e.target.classList.contains('show')) {
       closeModal();
   }
});