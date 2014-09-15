var TrendyRoom = {
    init : function() {
        this.resizeContent();
        this.placeLogo();
        this.initFlexslider();
        this.initIsotope();
        jQuery('.quality-chooser a').on('click', this.qualitySelector);
        jQuery('ul.colors .color').on('click', this.colorSelector);
        jQuery('.form-checkbox-wrap a').on('click', this.customCheckbox);
        jQuery('.radio-button').on('click', this.paymentTab);
        jQuery('.product-slider').flexslider({
            animation: "slide",
            slideshow: false
        })
        jQuery('.widget.leave-feedback a').on('click', function(event) {
            jQuery('.widget.leave-feedback a.active').removeClass('active');
            jQuery(this).addClass('active');

            var isLiked =  jQuery(this).hasClass('like') ? true : false;
            jQuery("#likes").val(isLiked);
            event.preventDefault();
        });
        jQuery('select').selectBoxIt({
           autoWidth: false
        });
        jQuery('.variation-option select').selectBoxIt('destroy').chosen();
        jQuery('.write-comments #submit').addClass('btn btn-default');
        jQuery('.single .post').fitVids();
        jQuery('.slides li a').on('click', function(e) {
            if(!jQuery(this).parent().hasClass('flex-active-slide') ) {
                e.preventDefault();
            }
        });
        jQuery('.widget_teotestimonialswidget .testimonials-slider').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav : false,
            animationLoop: true,
            slideshow: true
        });
    },
    initIsotope : function() {
        var $container = jQuery('.isotope-products').isotope({
            // options
            itemSelector : '.col-sm-6',
            layoutMode : 'fitRows'
        });
        jQuery('.filters-wrapper a').click(function() {
            jQuery('.filters-wrapper').find('.active').removeClass('active');
            var $el = jQuery(this);
            $el.addClass('active');
            var selector = $el.attr('data-filter');
            $container.isotope({ filter: selector });
            return false;
        });
    },
    initFlexslider : function() {
        jQuery('.homepage-slider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav : false,
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 4000
        });
        jQuery(".homepage-slider").delegate(".slides > li", "click", function () {
            var activeIndex = jQuery(".homepage-slider li.flex-active-slide").index();
            var clickIndex = jQuery(this).index();
            if(activeIndex > clickIndex) {
                jQuery(".homepage-slider").flexslider("prev");
            }
            if(activeIndex < clickIndex) {
                jQuery(".homepage-slider").flexslider("next");
            }
        });
    },
    placeLogo : function() {
        if(jQuery(window).width() > 767) {
            jQuery('.navbar .navbar-brand').outerHeight(jQuery('.navbar .right-side').height());
        } else {
            jQuery('.navbar .navbar-brand').outerHeight(jQuery('.navbar .navbar-brand img').height());
        }
    },
    resizeContent : function() {
    },
    qualitySelector : function(event) {
        var el = jQuery(this);
        var inc = 1;
        if(el.hasClass('less')) {
            inc = -1;
        }
        var qualityValue = parseInt(jQuery('.quality-chooser input').val());
        qualityValue = qualityValue + inc;
        if(qualityValue < 1) {
            qualityValue = 1;
        }
        jQuery('.quality-chooser input').val(qualityValue);
        event.preventDefault();
    },
    colorSelector : function(event) {
        var colors = jQuery('ul.colors .color').closest('.color-chooser').find('.color');

        colors.removeClass('active');
        jQuery(this).addClass('active');

        var value = jQuery(this).attr('data-value');
        jQuery(this).prev().val(value);

        var imageUrl = jQuery(this).attr('data-image');
        var image = jQuery(this).closest('.product').find('img');
        image.attr('src', imageUrl);

        event.preventDefault();
    },
    customCheckbox : function(event) {
        var $this = jQuery(this);
        var input = $this.parent().parent().find('#same-info');
        var currentVal = input.val();
        var icon = $this.find('.fa-check');
        if(currentVal == 'true') {
            input.val('false');
            icon.css("display", "none");
        } else {
            input.val('true');
            icon.css("display", "block");
        }
        event.preventDefault();
    },
    paymentTab : function() {
        var inputValue = jQuery(this).attr('data-value');
        jQuery('#payment-type').val(inputValue);

        jQuery('.radio-button').removeClass('checked');
        jQuery(this).addClass('checked');
    }
};
jQuery(document).ready(function() {
    TrendyRoom.init();
});
jQuery(window).resize(function() {
    TrendyRoom.resizeContent();
    TrendyRoom.placeLogo();
});