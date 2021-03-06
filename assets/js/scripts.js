// Sticky menu
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("js-header");

window.addEventListener('scroll', function (e) {
    last_scroll_position = window.scrollY;

    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 40) {
        header.classList.remove("is-visible");
        header.classList.add("is-hidden");

        // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
        header.classList.remove("is-hidden");
        header.classList.add("is-visible");
    }

    if (last_scroll_position < 1) {
        header.classList.remove("is-visible");
    }

    new_scroll_position = last_scroll_position;
});


// Toggle menu
  var toggle = document.querySelector(".js-toggle");
  
      toggle.addEventListener("click", function() {   
          toggle.classList.toggle("is-active");      
             var el = document.getElementById("js-navbar-menu");   
             el.classList.toggle("is-visible");
  });

// Pop-up
(function () {
    
   // close popup
    var closeHandlers = document.querySelectorAll('.popup .popup-close');

    if (closeHandlers.length) {
        for (var i = 0; i < closeHandlers.length; i++) {
            closeHandlers[i].addEventListener('click', function () {
                this.parentNode.classList.add('is-fade-out');

                setTimeout(() => {
                    this.parentNode.classList.remove('is-fade-out');
                    this.parentNode.classList.remove('is-visible');
                }, 690);
            });
        }
    }
    
    // contact popup
    let contactButtons = document.querySelectorAll('.js-contact-cta');
    let contactPopup = document.querySelector('.js-contact');

    if (contactButtons.length) {
        contactPopup.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        for (let i = 0; i < contactButtons.length; i++) {
            contactButtons[i].addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                contactPopup.classList.toggle('is-visible');
            });
        }

        document.body.addEventListener('click', function () {
            contactPopup.classList.remove('is-visible');
        });
    }
    
    
    // share popup
    let shareButton = document.querySelector('.js-portfolio-cta');
    let sharePopup = document.querySelector('.js-portfolio');

    if (shareButton) {
        sharePopup.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        shareButton.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            sharePopup.classList.toggle('is-visible');
        });

        document.body.addEventListener('click', function () {
            sharePopup.classList.remove('is-visible');
        });
    }

    // link selector and pop-up window size
    var Config = {
        Link: ".js-share",
        Width: 500,
        Height: 500
    };
    // add handler links
    var slink = document.querySelectorAll(Config.Link);
    for (var a = 0; a < slink.length; a++) {
        slink[a].onclick = PopupHandler;
    }
    // create popup
    function PopupHandler(e) {
        e = (e ? e : window.event);
        var t = (e.target ? e.target : e.srcElement);
        // hide share popup
        if (sharePopup) {
            sharePopup.classList.remove('is-visible');
        }
        // popup position
        var px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
            py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);
        // open popup
        var link_href = t.href ? t.href : t.parentNode.href;
        var popup = window.open(link_href, "social",
            "width=" + Config.Width + ",height=" + Config.Height +
            ",left=" + px + ",top=" + py +
            ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
        if (popup) {
            popup.focus();
            if (e.preventDefault) e.preventDefault();
            e.returnValue = false;
        }

        return !!popup;
    }
})();


