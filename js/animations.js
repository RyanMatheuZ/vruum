const activateMenuButton = document.getElementById('activate-menu-button')
activateMenuButton.addEventListener('click', () => {
    document.getElementById('mobile-navigation-bar').style.visibility = 'visible'
})
const exitMenuButton = document.getElementById('exit-menu-button')
exitMenuButton.addEventListener('click', () => {
    document.getElementById('mobile-navigation-bar').style.visibility = 'hidden'
})