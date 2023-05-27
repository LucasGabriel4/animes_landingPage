const bullets = document.querySelectorAll('.nav-btn')
const slides = document.querySelectorAll('.slide-img')
const contentSlide = document.querySelectorAll('.content')
const btnMobile = document.querySelector('.btn-mobile')
const menuMobile = document.querySelector('.bg')
const containerContent = document.getElementById('content')
const trailerModal = document.querySelector('.trailer')
const activeClass = 'active';
let currentIndex = 0;
const srcTrailers = ['img/jujutsuKaisen.mp4','img/TokyoGhoul.mp4','img/DragonBallSuper.mp4']



btnMobile.addEventListener('click', () => {
   btnMobile.classList.toggle(activeClass)
   menuMobile.classList.toggle(activeClass)
})


// Modal Trailers

const hideModal = () => {
    const hideModal = document.querySelector('.hideTrailer')
    hideModal.addEventListener('click', () => {
       trailerModal.classList.remove(activeClass)
    })
}


const showModalTrailers = (event) => {
    event.preventDefault()
    const dataTrailer = event.target.dataset.trailer
    const elementVideo = `<div class="hideTrailer"><i class="ph ph-x"></i></div>
    <video class="video" src="${srcTrailers[currentIndex]}" controls></video>`


  

    if(dataTrailer === 'jujutsuKensei'){
        trailerModal.classList.add(activeClass)
        trailerModal.innerHTML = elementVideo
        hideModal()
    }

    if(dataTrailer === 'tokyoGhoul'){
        trailerModal.classList.add(activeClass)
        trailerModal.innerHTML = elementVideo
        hideModal()
    }
    
    if(dataTrailer === 'dragonBall'){
        trailerModal.classList.add(activeClass)
        trailerModal.innerHTML = elementVideo
        hideModal()
    }
}

containerContent.addEventListener('click', showModalTrailers)








// Slide //


const hideSlides = () => {
    contentSlide.forEach((content) => {
        content.classList.remove(activeClass)
    })
    bullets.forEach((bullet) => {
        bullet.classList.remove(activeClass)
    })
    slides.forEach((slide) => {
        slide.classList.remove(activeClass)
    })
}

const showSlide = () =>{
 slides[currentIndex].classList.add(activeClass)
 bullets[currentIndex].classList.add(activeClass)
 contentSlide[currentIndex].classList.add(activeClass)

}

const nextSlideShow = () => {
  const lastSlide = slides.length - 1;
  hideSlides()
  if(currentIndex === lastSlide){
    currentIndex = 0;
  }else{
    currentIndex++
  }

  showSlide()
}


showSlide()


const bulletsNavigation = (bullet,index) =>{
    bullet.addEventListener("click", () => {
        currentIndex = index
        hideSlides()
        showSlide()

     })
     
}


bullets.forEach(bulletsNavigation)


setInterval(nextSlideShow, 4000)


