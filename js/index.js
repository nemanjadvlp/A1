
    var elem = document.querySelector('.main-carousel');
    var elemFull = document.querySelector('.carousel-full');
    var flkty = new Flickity( elem, {
        contain: true,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        pageDots: false
    });
    var flktyFull = new Flickity( elemFull, {
    });

    // previous
    var previousButton = document.querySelector('.button--previous');
        previousButton.addEventListener( 'click', function() {
        flkty.previous();
    });
    // next
    var nextButton = document.querySelector('.button--next');
        nextButton.addEventListener( 'click', function() {
        flkty.next();
    });

    function toggleMobileMenu() {
        var element = document.getElementsByClassName("header-mobile-container")[0];
        element.classList.toggle('opened');
    };

    function showTabItems(itemVal) {
        var element = document.getElementsByClassName("tab-list-items-"+itemVal)[0];
        var allTabs = document.getElementsByClassName("tab-list-items");
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].classList.remove('active');
        }
        element.classList.add('active');

        var itemElementOne = document.getElementsByClassName("section-2-price-item-1")[0];
        var itemElementTwo = document.getElementsByClassName("section-2-price-item-2")[0];
        var itemElementThree = document.getElementsByClassName("section-2-price-item-3")[0];

        if(itemVal === 1) {
            itemElementOne.querySelector('.section-2-price-old-price').innerHTML = '<del>2.899</del>';
            itemElementOne.querySelector('.price-item').innerHTML = '2.399';
            itemElementTwo.querySelector('.price-item').innerHTML = '2.099';
            itemElementThree.querySelector('.price-item').innerHTML = '1.799';
        } else {
            itemElementOne.querySelector('.section-2-price-old-price').innerHTML = '<del>1.999</del>';
            itemElementOne.querySelector('.price-item').innerHTML = '1.499';
            itemElementTwo.querySelector('.price-item').innerHTML = '1.599';
            itemElementThree.querySelector('.price-item').innerHTML = '1.299';
        }

    }