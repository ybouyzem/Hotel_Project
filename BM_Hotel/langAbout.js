const langEl = document.querySelector('.lang');
const link = document.querySelectorAll('.lang a');
const bigTitle = document.querySelector('.BigTitle');
const ContactPage = document.querySelector('.ToContactPage');
const smallTitle = document.querySelector('.SmallTitle');
const p1 = document.querySelector('.para1');
const p2 = document.querySelector('.para2');
const p3 = document.querySelector('.para3');
const p4 = document.querySelector('.para4');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        bigTitle.textContent = data[attr].BigTitle;
        ContactPage.textContent = data[attr].ToContactPage;
        smallTitle.textContent = data[attr].SmallTitle;
        p1.textContent = data[attr].para1;
        p2.textContent = data[attr].para2;
        p3.textContent = data[attr].para3;
        p4.textContent = data[attr].para4;
    });
});

var data = {
    "english":
    {
        "BigTitle": "About Us",
        "ToContactPage": "Contact Us",
        "SmallTitle": "Hotel",
        "para1":
        "The company itself is a very successful company. So where does the training run? To assume the fault of choosing the chosen one prevents everyone from following it? Here we bring the accusers who are present to be praised by those who praise her.",
        "para2":
        "The company itself is a very successful company. So where does the training run? To assume the fault of choosing the chosen one prevents everyone from following it? Here we bring the accusers who are present to be praised by those who praise her.",
        "para3":
        "The company itself is a very successful company. So where does the training run? To assume the fault of choosing the chosen one prevents everyone from following it? Here we bring the accusers who are present to be praised by those who praise her.",
        "para4":
        "The company itself is a very successful company. So where does the training run? To assume the fault of choosing the chosen one prevents everyone from following it? Here we bring the accusers who are present to be praised by those who praise her.",
    },
    "french":
    {
        "BigTitle": "A propos nous",
        "ToContactPage": "Contactez-nous",
        "SmallTitle": "Hôtel",
        "para1":
        "L'entreprise elle-même est une entreprise très prospère. Alors, où se passe la formation ? Assumer la faute de choisir l'élu empêche tout le monde de le suivre ? Ici, nous amenons les accusateurs qui sont présents pour être loués par ceux qui la louent.",
        "para2":
        "L'entreprise elle-même est une entreprise très prospère. Alors, où se passe la formation ? Assumer la faute de choisir l'élu empêche tout le monde de le suivre ? Ici, nous amenons les accusateurs qui sont présents pour être loués par ceux qui la louent.",
        "para3":
        "L'entreprise elle-même est une entreprise très prospère. Alors, où se passe la formation ? Assumer la faute de choisir l'élu empêche tout le monde de le suivre ? Ici, nous amenons les accusateurs qui sont présents pour être loués par ceux qui la louent.",
        "para4":
        "L'entreprise elle-même est une entreprise très prospère. Alors, où se passe la formation ? Assumer la faute de choisir l'élu empêche tout le monde de le suivre ? Ici, nous amenons les accusateurs qui sont présents pour être loués par ceux qui la louent.",
    },
    "arabic":
    {
        "BigTitle": "عنا",
        "ToContactPage": "راسلنا هنا",
        "SmallTitle": "الفندق",
        "para1":
        "االشركة نفسها هي شركة ناجحة للغاية. وهل يهرب منهم ليخفف من آلامهم ويتبعهم في آلامهم؟ أيمكن صدنا ذنب الذين غفر لهم ، والذين ولدوا أحرارا ومباركين؟ أعمى؟",
        "para2":
        ".الشركة نفسها هي شركة ناجحة للغاية. إذن أين يتم تشغيل التدريب؟ افتراض خطأ اختيار الشخص المختار يمنع الجميع من اتباعه؟ هنا نأتي بالمتهمين الحاضرين ليثني عليهم من يمدحها",
        "para3":
        "الشركة نفسها هي شركة ناجحة للغاية. وهل يهرب منهم ليخفف من آلامهم ويتبعهم في آلامهم؟ أيمكن صدنا ذنب الذين غفر لهم ، والذين ولدوا أحرارا ومباركين؟ أعمى؟",
        "para4":
        ".الشركة نفسها هي شركة ناجحة للغاية. إذن أين يتم تشغيل التدريب؟ افتراض خطأ اختيار الشخص المختار يمنع الجميع من اتباعه؟ هنا نأتي بالمتهمين الحاضرين ليثني عليهم من يمدحها",
    },
}