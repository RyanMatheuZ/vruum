const exitMenuButton = document.getElementById('exit-menu-button')
const mobileNavigationBar = document.getElementById('mobile-navigation-bar')
const mobileNavigationBarLink = document.querySelectorAll('.m-mobile-navigation-bar-link')

document.getElementById('activate-menu-button').addEventListener('click', () => {
    exitMenuButton.classList.add('is-d-inline-block')
    exitMenuButton.classList.remove('is-d-none')

    mobileNavigationBar.classList.add('is-active-animation-mobile-bar')

    mobileNavigationBarLink.forEach(element => {
        element.classList.add('is-d-inline-block')
        element.classList.remove('is-d-none')
    })
})

document.getElementById('exit-menu-button').addEventListener('click', () => {
    exitMenuButton.classList.add('is-d-none')

    mobileNavigationBar.classList.remove('is-active-animation-mobile-bar')

    mobileNavigationBarLink.forEach(element => {
        element.classList.add('is-d-none')
    })
})