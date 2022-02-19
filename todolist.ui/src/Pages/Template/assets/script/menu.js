const ConfigureMenu = () => {
    const showNavbar = (toggleId, navId, bodyId, headerId, logoId) => {
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId),
        logopd = document.getElementById(logoId)

        if(toggle && nav && bodypd && headerpd && logopd) {
            toggle.addEventListener('click', ()=> {
                nav.classList.toggle('show')
                bodypd.classList.toggle('body-pd')
                headerpd.classList.toggle('header-pd')
                logopd.classList.toggle('logo-pd')
            })
        }
    }

    showNavbar('header-toggle','nav-bar','body-pd','header','logo')

    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink(){
        if(linkColor){
            linkColor.forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
        }
    }

    linkColor.forEach(l=> l.addEventListener('click', colorLink))
}

export default ConfigureMenu;