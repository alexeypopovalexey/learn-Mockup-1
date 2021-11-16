export const slick = () => {
    $(function(){
        $('.comments__wrapper').slick({
            infinite: true,
            autoplaySpeed: 3000,
            autoplay: true,
            slidesToShow: 1,
            arrows: false,
        });
    });
}