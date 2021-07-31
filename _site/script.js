// A $( document ).ready() block.
$( document ).ready(function() {
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").fadeToggle()
    });
// initialise/activate animate on scroll
    // AOS.init();
    AOS.init({
     
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        // offset: 120, // offset (in px) from the original trigger point
        // delay: 0, // values from 0 to 3000, with step 50ms
        duration: 500 // values from 0 to 3000, with step 50ms
        // easing: 'ease', // default easing for AOS animations
        // once: false, // whether animation should happen only once - while scrolling down
        // mirror: false, // whether elements should animate out while scrolling past them
        // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
});

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});

lightGallery(document.getElementById('lightgallery-2'), {
    speed: 500,
    download: false
});