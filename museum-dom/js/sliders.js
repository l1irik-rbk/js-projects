$('.welcom__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  prevArrow: `<button class="slick-btn slick-prev"><svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="welcom__slider-path" d="M5.72254 8C3.90173 6.31339 1.99422 5.08262 0 4.30769V3.69231C1.99422 2.89459 3.90173 1.66382 5.72254 0H7.23988C6.37283 1.4359 5.53468 2.52991 4.72543 3.28205H30V4.71795H4.72543C5.53468 5.47009 6.37283 6.5641 7.23988 8H5.72254Z" fill="white"/>
    </svg></button>`,
  nextArrow: `<button class="slick-btn slick-next"><svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="welcom__slider-path" d="M24.2775 1.97284e-06C26.0983 1.68661 28.0058 2.91738 30 3.69231L30 4.30769C28.0058 5.10541 26.0983 6.33618 24.2775 8L22.7601 8C23.6272 6.5641 24.4653 5.47009 25.2746 4.71795L3.48964e-07 4.71795L5.01636e-07 3.28205L25.2746 3.28205C24.4653 2.52992 23.6272 1.4359 22.7601 1.86378e-06L24.2775 1.97284e-06Z" fill="white"/>
    </svg></button>`,
});
$('.welcom__slider').on('afterChange', function (event, slick, currentSlide) {
  let i = (currentSlide ? currentSlide : 0) + 1;
  $('.changed__number').text(`0${i}`);
});

$('.video__inner').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  prevArrow: `<button class="video__slick-btn slick-prev"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="video__slider-path" fill-rule="evenodd" clip-rule="evenodd" d="M5.4777 0.219168C5.87773 0.564178 5.94259 1.19347 5.62256 1.62473L2.37578 6.00004L5.62256 10.3753C5.94259 10.8066 5.87773 11.4359 5.4777 11.7809C5.07766 12.1259 4.49394 12.056 4.17391 11.6247L0 6.00004L4.17391 0.375342C4.49394 -0.0559202 5.07766 -0.125842 5.4777 0.219168ZM9.65184 0.219168C10.0519 0.564178 10.1167 1.19347 9.7967 1.62473L6.54992 6.00004L9.7967 10.3753C10.1167 10.8066 10.0519 11.4359 9.65184 11.7809C9.2518 12.1259 8.66808 12.056 8.34805 11.6247L4.17414 6.00004L8.34805 0.375342C8.66808 -0.0559202 9.2518 -0.125842 9.65184 0.219168Z" fill="#999999"/>
    </svg></button>`,
  nextArrow: `<button class="video__slick-btn slick-next"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="video__slider-path" fill-rule="evenodd" clip-rule="evenodd" d="M0.348163 0.219168C0.748196 -0.125842 1.33192 -0.0559202 1.65195 0.375342L5.82586 6.00004L1.65194 11.6247C1.33192 12.056 0.748195 12.1259 0.348162 11.7809C-0.0518709 11.4359 -0.116729 10.8066 0.203297 10.3753L3.45008 6.00004L0.203298 1.62473C-0.116728 1.19347 -0.05187 0.564177 0.348163 0.219168ZM4.5223 0.219168C4.92234 -0.125841 5.50606 -0.0559197 5.82609 0.375342L10 6.00004L5.82609 11.6247C5.50606 12.056 4.92234 12.1259 4.5223 11.7809C4.12227 11.4359 4.05741 10.8066 4.37744 10.3753L7.62422 6.00004L4.37744 1.62473C4.05741 1.19347 4.12227 0.564178 4.5223 0.219168Z" fill="#999999"/>
    </svg></button>`,
  asNavFor: '.main-video__inner',
})
$('.main-video__inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  swipe: false,
  asNavFor: '.video__inner',
})

$('.video__inner').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  $('.slick-current iframe').attr('src', $('.slick-current iframe').attr('src'));
});


