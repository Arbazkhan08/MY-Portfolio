setTimeout(()=>{
    alert("Welcome to My Protfolio")
},2000)
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('MenuBtn');
    const navList = document.querySelector('ul');
    let menuVisible = false;

    menuBtn.addEventListener('click', function () {
        if (!menuVisible) {
            navList.classList.add('show');
            menuVisible = true;
        } else {
            navList.classList.remove('show');
            menuVisible = false;
        }
    });

    document.addEventListener('click', function (event) {
        const isMenuBtn = event.target.closest('#MenuBtn');
        const isNavList = event.target.closest('ul');

        if (!isMenuBtn && !isNavList) {
            navList.classList.remove('show');
            menuVisible = false;
        }
        else{
            setTimeout(()=>{
             navList.classList.remove('show');
            menuVisible = false; 
            }, 4000)
        }
    });
});
