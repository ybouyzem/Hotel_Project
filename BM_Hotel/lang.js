const langEl = document.querySelector('.lang');
const link = document.querySelectorAll('.lang a');
const titleEl = document.querySelector('.WelcomeTitle');
const descEl = document.querySelector('.WelcomeDescription');
const HostingEl = document.querySelector('.hostingButton');
const BookingEl = document.querySelector('.bookingButton');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        titleEl.textContent = data[attr].WelcomeTitle;
        descEl.textContent = data[attr].WelcomeDescription;
        HostingEl.textContent = data[attr].hostingButton;
        BookingEl.textContent = data[attr].bookingButton;
    });
});

var data = {
    "english":
    {
        "WelcomeTitle": "Hotel",
        "WelcomeDescription":
        "The company itself is a very successful company. So where does the training run? To assume the fault of choosing the chosen one prevents everyone from following it? Here we bring the accusers who are present to be praised by those who praise her.",
        "hostingButton" : "Go to Hosting",
        "bookingButton" : "Reserve now",
    },
    "french":
    {
        "WelcomeTitle": "Hôtel",
        "WelcomeDescription":
        "L'entreprise elle-même est une entreprise très prospère. Alors, où se passe la formation ? Assumer la faute de choisir l'élu empêche tout le monde de le suivre ? Ici, nous amenons les accusateurs qui sont présents pour être loués par ceux qui la louent.",
        "hostingButton" : "Aller à l'hébergement",
        "bookingButton" : "Réservez maintenant",
    },
    "arabic":
    {
        "WelcomeTitle": "الفندق",
        "WelcomeDescription":
        ".الشركة نفسها هي شركة ناجحة للغاية. إذن أين يتم تشغيل التدريب؟ افتراض خطأ اختيار الشخص المختار يمنع الجميع من اتباعه؟ هنا نأتي بالمتهمين الحاضرين ليثني عليهم من يمدحها",
        "hostingButton" : "اذهب إلى الاستضافة",
        "bookingButton" : "احجز الان",
    },
}