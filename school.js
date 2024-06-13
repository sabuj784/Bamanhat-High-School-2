function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar-lists") {
        x.className += " responsive";
    } else {
        x.className = "navbar-lists";
    }
}

const scrollLinks = document.querySelectorAll('.navbar-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
            const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with id '${targetId.substring(1)}' not found.`);
            }
        } else {
            console.error('No href attribute found.');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var readMoreLink = document.getElementById("readmore-link");
    var readLessLink = document.getElementById("readless-link");
    var moreText = document.getElementById("more-text");

    readMoreLink.addEventListener("click", function(event) {
        event.preventDefault();
        moreText.style.display = "block";
        readMoreLink.style.display = "none";
    });

    readLessLink.addEventListener("click", function(event) {
        event.preventDefault();
        moreText.style.display = "none";
        readMoreLink.style.display = "inline";
    });
});
