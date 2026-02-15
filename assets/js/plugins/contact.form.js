/**
 *
 * -----------------------------------------------------------------------------
 *
 * Template : Krishna Personal Portfolio HTML Template
 * Author : Krishna Mangukiya
 *
 * -----------------------------------------------------------------------------
 *
 **/

(function ($) {
    'use strict';

    var form = $('#contact-form');
    var formMessages = $('#form-messages');

    $(form).submit(function (e) {
        e.preventDefault();

        // Form data serialize + phone field যুক্ত করা
        var formData = $(form).serialize() + "&phone=" + $('#contact-phone').val();

        // Simulate form submission for demo purposes
        setTimeout(function () {
            $(formMessages).removeClass('error').addClass('success').text('Thank you! Your message has been sent (Demo).');
            $('#contact-name, #contact-email, #subject, #contact-message, #contact-phone').val('');
        }, 1000);
    });

})(jQuery);

