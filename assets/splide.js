// 
var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ] ).mount();
}
// 
  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );
//  Auto-Scroll Slide 
new Splide( '.splide',{
    type   : 'loop',
    autoScroll: {
      speed: 2,
      autoStart: boolean = true,
      height: '50%',
      pauseOnHover: boolean = false,
      
    },
  } ).mount( window.splide.Extensions );
// img-carousel
new Splide( '.splide', {
  type       : 'loop',
  height     : '9rem',
  perPage    : 2,
  breakpoints: {
    640: {
      height: '6rem',
    },
  },
} );
// Gallery Carousel
var splide = new Splide( '#main-carousel', {
  pagination: false,
} );


var thumbnails = document.getElementsByClassName( 'thumbnail' );
var current;


for ( var i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}


function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    splide.go( index );
  } );
}


splide.on( 'mounted move', function () {
  var thumbnail = thumbnails[ splide.index ];


  if ( thumbnail ) {
    if ( current ) {
      current.classList.remove( 'is-active' );
    }


    thumbnail.classList.add( 'is-active' );
    current = thumbnail;
  }
} );


splide.mount();
