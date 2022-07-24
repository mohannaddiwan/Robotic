

$('ul.dropdown,.select').on('mouseover', function (e) {
    if($(window).width() >991){
    $(this).parent('.col').find('ul.dropdown').css({
        height: 'auto',
        opacity: '1',
        top: '25px',
        width: 'auto',
        left: '0',
        overflow: 'visible',
        zIndex:'100'


    });
    $(this).parent().css('margin-bottom',180);
}
    
});

$('ul.dropdown,.select').on('mouseleave', function () {

    $(this).parent('.col').find('ul.dropdown').css({

        width: '105px',
        top: '11px',
        left: '67px',
        height: '35px',
        overflow: 'hidden',
        opacity: 0

    });

    $(this).parent('.col').css('margin-bottom',"4%");

});




/*-------------------- */
$('.fa-bars').on('click', function () {
    $(this).toggleClass('fa-window-close');

    if ($(this).hasClass('fa-window-close')) {
        if($(window).width() > 576){
     
        $('.fixed').toggleClass('open');

          $('body').animate({
            paddingLeft: '120px'
        }, 10);

    }else{
       
        if($('.search-smScreen').hasClass('searchShow')){
            $('.search-sm').toggleClass('fa-times');
            $('.search-smScreen').removeClass('searchShow');
        $('.fixed').toggleClass('open');
        }else{
            $('.fixed').toggleClass('open');
        }
        
    }

      


    } else {
        
        $('.fixed').toggleClass('open');

        $('body').animate({
            paddingLeft: '0'
        }, 10);
    }

});


$('.search').on('focus', function () {
    $('.fa-search.search-lg').css('display', 'none');
    $(this).css('color', 'black');
})



$('.col ').hover(function () {
    $(this).find('.select a,.go a').css(
        'background-color','#fff');
}, (function () {
    $(this).find('.select a,.go a').css('background-color', '#027f94');

}))


$('.fixedUl li,.dropdown li').hover(function(){
    $(this).addClass('arrow').siblings().removeClass('arrow');
},function(){
    $(this).removeClass('arrow');
});

$('.search-sm').on('click',function(){
    if($('.fa-bars').hasClass('fa-window-close')){
        $('.fa-bars').removeClass('fa-window-close');
        $('.fixed').removeClass('open');
        $(this).toggleClass('fa-times');
    $('.search-smScreen').toggleClass('searchShow');
    }else{
        $(this).toggleClass('fa-times');
    $('.search-smScreen').toggleClass('searchShow');
    }
    
    
});



$(window).on('load',function(){
    $('.loading').css('display','none');
});

let text1 = "In Our Website";
let text1Length = text1.length;
let n1 = 0;

let typer1 = window.setInterval(function(){
    'use strict';
    if(document.querySelector('.ourWeb') != null){
        document.querySelector('.ourWeb').innerHTML += text1[n1];
    }
    // document.querySelector('.ourWeb').innerHTML += text1[n1];
    n1=n1+1;
    if(n1 > text1Length -1){
        clearInterval(typer1);
    }
},100);

let text2 = "Welcome,";
let text2Length = text2.length;
let n2 = 0;

let typer2 = window.setInterval(function(){
    'use strict';
    if(document.querySelector('.welcome') != null){
        document.querySelector('.welcome').innerHTML += text2[n2];
    }
    n2=n2+1;
    if(n2 > text2Length -1){
        clearInterval(typer2);
    }
},100);

        
     

        let darkMode = localStorage.getItem('darkMode'); 
        let circle = document.querySelector('.circle');
     let dark = document.querySelector('.dark');



// const enableDarkMode = () => {
//   // 1. Add the class to the body
//  circle.classList.add('active');
//   // 2. Update darkMode in localStorage
//   localStorage.setItem('darkMode', 'enabled');
//   document.documentElement.style.setProperty('--body-color',"#fff");
//   document.documentElement.style.setProperty('--white-color',"#181818");
// }

// const disableDarkMode = () => {
//   // 1. Remove the class from the body
//   circle.classList.remove('active');
//   // 2. Update darkMode in localStorage 
//   localStorage.setItem('darkMode', null);
//   document.documentElement.style.setProperty('--body-color',"#101010");
//  document.documentElement.style.setProperty('--white-color',"#fff");
// }
 
// // If the user already visited and enabled darkMode
// // start things off with it on
// if (darkMode === 'enabled') {
//   enableDarkMode();
// }

// // When someone clicks the button
// if(circle){
// circle.addEventListener('click', () => {
//   // get their darkMode setting
//   darkMode = localStorage.getItem('darkMode'); 
  
//   // if it not current enabled, enable it
//   if (darkMode !== 'enabled') {
//     enableDarkMode();
//   // if it has been enabled, turn it off  
//   } else {  
//     disableDarkMode(); 
//   }
// });
// }

$(window).on('load',function(){
 
    $('.baslik p').animate(
        {
            
            "opacity":'1'
    },1000);
    $('.x1').delay(500).fadeIn(300);
    $('.x2').delay(600).fadeIn(300);
    $('.x3').delay(800).fadeIn(300);


    $('.home-icon').delay(500).fadeIn(300);
    $('.about-icon').delay(800).fadeIn(300);
    $('.contact-icon').delay(1200).fadeIn(300);
    $('.how-icon').delay(1500).fadeIn(300);
});


// $('.ff').on('click',function(){
//     $('.fa-moon,.fa-sun').toggleClass('fa-sun fa-moon');
// })



let controler = document.querySelector('.fa-moon');


const enableDarkMode = () => {
    // 1. Add the class to the body
    controler.classList.toggle('fa-sun');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
    document.documentElement.style.setProperty('--body-color',"#fff");
    document.documentElement.style.setProperty('--white-color',"#181818");
  }
  
  const disableDarkMode = () => {
    // 1. Remove the class from the body
    controler.classList.remove('fa-sun');
    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
    document.documentElement.style.setProperty('--body-color',"#101010");
   document.documentElement.style.setProperty('--white-color',"#fff");
  }
   
  // If the user already visited and enabled darkMode
  // start things off with it on
  if (darkMode === 'enabled') {
    enableDarkMode();
  }
  
  // When someone clicks the button
  if(controler){
    controler.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode'); 
    
    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
      enableDarkMode();
    // if it has been enabled, turn it off  
    } else {  
      disableDarkMode(); 
    }
  });
}