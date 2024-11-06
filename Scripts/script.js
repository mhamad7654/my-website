$(document).ready(function() {
    // Add smooth scrolling to all     git config --global user.name "Your Name"
    $("a.nav-link").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 3000, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(document).ready(function(){
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;

    function cycleItems() {
        const item = $('.carousel-item').eq(currentIndex);
        items.hide();
        item.css('display', 'block');
    }

    function nextSlide() {
        currentIndex += 1;
        if (currentIndex > itemCount - 1) {
            currentIndex = 0;
        }
        cycleItems();
    }

    setInterval(nextSlide, 3000);
});

$(document).ready(function(){
    $("#toggleInfo").click(function(){
        $("#moreInfo").toggle();
    });
});


$(document).ready(function(){
    $("#contactForm").submit(function(event){
        var isValid = true;
        if ($("#name").val().trim() === "") {
            isValid = false;
            alert("Name is required.");
        }
        if ($("#email").val().trim() === "") {
            isValid = false;
            alert("Email is required.");
        }
        if ($("#message").val().trim() === "") {
            isValid = false;
            alert("Message is required.");
        }
        if (!isValid) {
            event.preventDefault();
        }
    });
});