
const navImage = $('#navImg');
const closeMenu = $('#closeImg');
const navTexts = $('.nav-text');


navImage.click(function (e) { 

    navTexts.css('display', 'flex');
    closeMenu.css('display', 'inline-block');
    $(this).css('display', 'none');

    closeMenu.click(function (e) { 
        navTexts.css('display', 'none');
        closeMenu.css('display', 'none');
        navImage.css('display', 'inline-block');
        e.preventDefault();    
    });
    
    e.preventDefault();
    
});