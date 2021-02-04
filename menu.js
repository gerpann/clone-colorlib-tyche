const body = document.body

const responsiveMenu = () => {
    const mobileMenuTrigger = document.getElementById('mobile-menu-trigger')
    const desktopMenu = document.getElementById('desktop-menu')
    const mobileMenu = document.getElementById('mobile-menu')

    mobileMenuTrigger.addEventListener('click', () => {
        if (mobileMenu.style.display === 'none') {
            mobileMenu.style.display = 'block'
        } else {
            mobileMenu.style.display = 'none'
        }
    })

    if (window.innerWidth <= 991) {
        desktopMenu.style.display = 'none'
        mobileMenuTrigger.style.display = 'block'
    } else {
        desktopMenu.style.display = 'block'
        mobileMenuTrigger.style.display = 'none'
    }
}

responsiveMenu()
body.onresize = function () {responsiveMenu()}