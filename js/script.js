const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);

        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})

//contact
const pages = document.querySelectorAll('.book-page.page-right');
const contactMe = document.querySelector('.btn.contact-me');

contactMe.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    })
}

//reverse index
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//back profile
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    })
}

//cover right
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');
setTimeout(() => {
    coverRight.classList.add('turn')
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex=-1;
}, 2800);

//cover profile or left page
setTimeout(() => {
    pageLeft.style.zIndex=20;
}, 3200);
//first page
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);
})

//for contact
const scriptURL = "https://script.google.com/macros/s/AKfycbzNslMW6Ag_vOr4goQ0LZELxlZ0_tD1g4td3RCsCf9rhc9XWJYYGt1aZJxDeRAUvNBT/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Gracias!! Mensaje enviado correctamente";
      setTimeout(function () {
        msg.innerHTML = "";
        closeDialog("popup");
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

//date
const [date, time] = formatDate(new Date()).split(' ');

const datetimeLocalInput = document.getElementById('datetime-local');
datetimeLocalInput.value = date + 'T' + time;


function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      
    ].join(':')
  );
}