//button-search
const search =document.querySelector('.search');
const body = document.querySelector('body');
search.addEventListener('click',function (e) {
    e.stopPropagation();
    this.classList.add('search--active');
});
body.addEventListener('click',function () {
    search.classList.remove('search--active');
});
//menu
$( function() {
    $( ".header_burger" ).click('click', function() {
        $( ".header_burger,.header_menu" ).toggleClass( 'active');
        $('.body').toggleClass('lock');
    });
} );
