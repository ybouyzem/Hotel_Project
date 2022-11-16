const langEl = document.querySelector('.lang');
const link = document.querySelectorAll('.lang a');
const BigTitle = document.querySelector('.BigTitle');
const miniTitle1 = document.querySelector('.miniTitle1');
const miniTitle2 = document.querySelector('.miniTitle2');
const miniTitle3 = document.querySelector('.miniTitle3');
const FormTitle = document.querySelector('.FormTitle');
const FormFullName = document.querySelector('.FormFullName');
const FormEmail = document.querySelector('.FormEmail');
const FormMessage = document.querySelector('.FormMessage');
const MediaTitle = document.querySelector('.MediaTitle');
const MediaWebInstagram = document.querySelector('.MediaWebInstagram');
const MediaWebFacebook = document.querySelector('.MediaWebFacebook');
const MediaWebYoutube = document.querySelector('.MediaWebYoutube');
const MediaWebLinkedIn = document.querySelector('.MediaWebLinkedIn');

// var submit = document.getElementById('submit');
// alert(submit);
// var english = document.getElementById('EN');
// english.addEventListener('click', function(submit) {
//     submit.value = "Send";
    
// });

// var french = document.getElementById('FR');
// french.addEventListener('click', function(submit) {
//     submit.value = "Envoyer";
// });

// var arabic = document.getElementById('AR');
// arabic.addEventListener('click', function(submit) {
//     submit.value = "haha";
// });
    


link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        BigTitle.textContent = data[attr].BigTitle;
        miniTitle1.textContent = data[attr].miniTitle1;
        miniTitle2.textContent = data[attr].miniTitle2;
        miniTitle3.textContent = data[attr].miniTitle3;
        FormTitle.textContent = data[attr].FormTitle;
        FormFullName.textContent = data[attr].FormFullName;
        FormEmail.textContent = data[attr].FormEmail;
        FormMessage.textContent = data[attr].FormMessage;
        MediaTitle.textContent = data[attr].MediaTitle;
        MediaWebInstagram.textContent = data[attr].MediaWebInstagram;
        MediaWebFacebook.textContent = data[attr].MediaWebFacebook;
        MediaWebYoutube.textContent = data[attr].MediaWebYoutube;
        MediaWebLinkedIn.textContent = data[attr].MediaWebLinkedIn;
        MediaWebLinkedIn.textContent = data[attr].MediaWebLinkedIn;
    });
});

var data = {
    "english":
    {
        "BigTitle": "Contact Us",
        "miniTitle1": "Call us",
        "miniTitle2": "Email",
        "miniTitle3": "Location",
        "FormTitle": "Get in touch",
        "FormFullName": "Full Name",
        "FormEmail": "E-mail",
        "FormMessage" : "Type your message here...",
        "MediaTitle" : "Visit us here",
        "MediaWebInstagram" : "Instagram",
        "MediaWebFacebook" : "Facebook",
        "MediaWebYoutube" : "Youtube",
        "MediaWebLinkedIn" : "Linked in",
    },
    "french":
    {
        "BigTitle": "Contactez-nous",
        "miniTitle1": "Appelez-nous",
        "miniTitle2": "Email",
        "miniTitle3": "Location",
        "FormTitle": "être en touche",
        "FormFullName": "Nom Complet",
        "FormEmail": "E-mail",
        "FormMessage" : "Ecrire votre message ici...",
        "MediaTitle" : "Visitez-nous ici",
        "MediaWebInstagram" : "Instagram",
        "MediaWebFacebook" : "Facebook",
        "MediaWebYoutube" : "Youtube",
        "MediaWebLinkedIn" : "Linked in",
    },
    "arabic":
    {
        "BigTitle": "راسلنا",
        "miniTitle1": "Call us",
        "miniTitle2": "Email",
        "miniTitle3": "Location",
        "FormTitle": "Get in touch",
        "FormFullName": "Full Name",
        "FormEmail": "E-mail",
        "FormMessage" : "Type your message here...",
        "MediaTitle" : "Visit us here",
        "MediaWebInstagram" : "Instagram",
        "MediaWebFacebook" : "Facebook",
        "MediaWebYoutube" : "Youtube",
        "MediaWebLinkedIn" : "LinkedIn",
    },
}