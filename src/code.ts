const headerImage = document.querySelector('header > img') as HTMLImageElement
const headerText = document.querySelector('.header-text') as HTMLDivElement

window.addEventListener('scroll', (): void => {
    headerImage.style.transform = `translateY(${-window.scrollY}px)`
    headerText.style.transform = `translateY(${-window.scrollY}px)`
})

const textObserver : IntersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opaque')
        } else {
            entry.target.classList.remove('opaque')
        }
    })
})

const fadeInElements = document.querySelectorAll('h1, p, .pixel-art-showcase img, #itch-embed')

fadeInElements.forEach((element) => {
    textObserver.observe(element)
})
