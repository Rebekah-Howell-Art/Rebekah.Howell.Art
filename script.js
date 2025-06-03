$(document).ready(function() {
    $('nav a').on('click', function(e) {
        const href = $(this).attr('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = $(href);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
            }
        }
    });


    $('.instagram-gallery img, .instagram-images img, .gallery img').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    
    $('form').on('submit', function(e) {
        const name = $(this).find('input[name="name"]').val().trim();
        const email = $(this).find('input[name="email"]').val().trim();
        const message = $(this).find('textarea[name="message"]').val().trim();

        let errors = [];

        if (name.length < 2) {
            errors.push("Name must be at least 2 characters.");
        }
        if (!email.includes('@') || !email.includes('.')) {
            errors.push("Please enter a valid email address.");
        }
        if (message === "") {
            errors.push("Message cannot be empty.");
        }

        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
    });

    
    const year = new Date().getFullYear();
    $('footer p').each(function() {
        const text = $(this).text();
        const updatedText = text.replace(/\d{4}/, year);
        $(this).text(updatedText);
    });

    
    $(window).on('scroll', function() {
        $('.fade-in').each(function() {
            const bottom_of_window = $(window).scrollTop() + $(window).height();
            const bottom_of_object = $(this).offset().top + $(this).outerHeight() / 4;
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('visible');
            }
        });
    });

    
    $('body').append('<div id="back-to-top" style="display:none; position:fixed; bottom:40px; right:40px; background:#595f39; color:white; padding:10px 15px; border-radius:5px; cursor:pointer; z-index:1000;">↑ Top</div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    
    const nav = $('nav');
    const navOffset = nav.offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() > navOffset) {
            nav.addClass('sticky');
        } else {
            nav.removeClass('sticky');
        }
    });

    
    $('.instagram-gallery img, .instagram-images img').wrap('<div class="insta-wrapper"></div>');
    $('.insta-wrapper').append('<div class="shimmer"></div>');

    
    $('body').prepend('<div id="loader" style="position:fixed; top:0; left:0; width:100%; height:100%; background:white; z-index:2000; display:flex; align-items:center; justify-content:center;"><div class="spinner"></div></div>');
    $(window).on('load', function() {
        $('#loader').fadeOut(500);
    });
});
