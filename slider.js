$('#right-arrow').click(function() {
    var currentSlide = $('.background-right.active');
    var nextSlide = currentSlide.next();

    currentSlide.fadeOut(300).removeClass('active');
    nextSlide.fadeIn(300).addClass('active');

    if(nextSlide.length == 0) {
        $('.background-right').first().fadeIn(300).addClass('active');
    }
});

$('#left-arrow').click(function() {
    var currentSlide = $('.background-right.active');
    var prevSlide = currentSlide.prev();

    currentSlide.fadeOut(300).removeClass('active');
    prevSlide.fadeIn(300).addClass('active');

    if(prevSlide.length == 0) {
        $('.background-right').last().fadeIn(300).addClass('active');
    }
    
});