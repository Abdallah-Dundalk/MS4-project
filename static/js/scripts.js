/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function copyDetails() {
  
    document.getElementById("test").style.backgroundColor = "red";

};



// ---------------------------------------------------------------------------------------
const canvas = document.querySelector('canvas');
const form = document.querySelector('.signature-pad-form');
const clearButton = document.querySelector('.clear-button');
const ctx = canvas.getContext('2d');
let writingMode = false;



const clearPad = () => {
   ctx.clearRect(0, 0, canvas.width, canvas.height); 
}

clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    clearPad();
})

const getTargetPosition = (event) => {
    positionX = event.clientX - event.target.getBoundingClientRect().x;
    positionY = event.clientY - event.target.getBoundingClientRect().y;

    return [positionX, positionY];
}

const handlePointerMove = (event) => {
    if (!writingMode) return

    const [positionX, positionY] = getTargetPosition(event);
    ctx.lineTo(positionX, positionY);
    ctx.stroke();
}

const handlePointerUp = () => {
    writingMode =false;
}

const handlePointerDown = (event) => {
    writingMode = true;
    ctx.beginPath();

    const [positionX, positionY] = getTargetPosition(event);
    ctx.moveTo(positionX, positionY)
}
 
ctx.lineWidth = 3;
ctx.lineJoin = ctx.lineCap = 'round';

canvas.addEventListener('pointerdown', handlePointerDown, {passive: true});
canvas.addEventListener('pointerup', handlePointerUp, {passive: true});
canvas.addEventListener('pointermove', handlePointerMove, {passive: true});


const formSignatureField = document.getElementById("id_signature")
document.getElementById("confirm-signature").addEventListener("click", pasteDataURL);
document.getElementById("form-submit-btn").addEventListener("click", formSubmitAlert);

function pasteDataURL() {
    
    const imageURL = canvas.toDataURL();
    const image = document.createElement('img');
    image.src = imageURL;
    image.height = canvas.height;
    image.width = canvas.width;
    image.style.display = 'block';
   
    formSignatureField.value = imageURL
    clearPad();
}

function formSubmitAlert() {
    if (formSignatureField.innerText == "")
    alert("Ensure all fields have been completed. You must press 'Confirm Signature' before pressing 'Submit'.");
  }

document.getElementById("get_status").addEventListener("click", testStatus);

function testStatus() {
   
    document.getElementById("status").style.color = "lightblue";

}

