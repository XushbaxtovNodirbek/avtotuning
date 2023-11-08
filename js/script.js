window.addEventListener('DOMContentLoaded',() => {
    const header = document.querySelector('header');
    const brand = document.querySelector('.brand');
    const navigation = document.querySelector('.navigation');
    const menuBtn = document.querySelector('.menu-btn');
    const navButtons = document.querySelectorAll('.navigation a')

    window.addEventListener('scroll',() => {
        
        header.classList.toggle('sticy',window.scrollY > 50);
        brand.classList.toggle('sticy',window.scrollY > 50);
        
        
    })

    menuBtn.addEventListener('click',function()  {
        console.log(menuBtn)
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })

    navButtons.forEach((button) =>{
        button.addEventListener('click',()=>{
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })

})