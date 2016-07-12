$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1300);
    }
});

function looper(elements){
    var index = 0;
    window.setInterval(function(){
        var currentElement = elements[index];
        changeWord(currentElement);
        index === elements.length - 1 ? index = 0 : index++;
    }, 2000);
}

function changeWord(current){
    $(current).toggle('slide', {direction: 'left'})
              .delay(1200)
              .toggle('slide', {direction: 'left'});
}

(function(){
    var parent = document.getElementById('word_shift');
    looper(parent.children);
})();



/*
 * Replace all SVG images with inline SVG
 * http://stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement
 */
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');
        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
        // Replace image with new SVG
        $img.replaceWith($svg);
    }, 'xml');
});
