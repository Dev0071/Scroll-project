// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggleBtn.addEventListener('click', () => {
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);

    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
});


const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
    const navHeight  = navBar.getBoundingClientRect().height;
    const scrolledHeight = window.pageYOffset;
    if( scrolledHeight > navHeight){
        navBar.classList.add('fixed-nav');
    } else {
        navBar.classList.remove('fixed-nav');
    }

    if(scrolledHeight > 500){
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // prevent default scroll-behavior
        e.preventDefault();
        // navigate to sopecific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');
        let elementPosition = element.offsetTop - navHeight;
        if(!fixedNav){
            elementPosition -= navHeight;
        }
        if(navHeight > 82){
            elementPosition += containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: elementPosition,
        })
        linksContainer.style.height = 0;
    });
});
