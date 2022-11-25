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
        "It is very important for the customer to pay attention to the adipiscing process. And so they forsook him for pleasures. What do we lead to the suppleness of the corrupt, unless pleasure flees from the architect, but with what pleasure does the blessed take pleasure when we accuse them of the duties of error? Less",
        "para2":
        "The company itself is a very successful company. So where does the training run? To assume the fault of choosing the chosen one prevents everyone from following it? Here we bring the accusers who are present to be praised by those who praise her.",
        "para3":
        "It is very important for the customer to pay attention to the adipiscing process. And so they forsook him for pleasures. What do we lead to the suppleness of the corrupt, unless pleasure flees from the architect, but with what pleasure does the blessed take pleasure when we accuse them of the duties of error? Less",
        "para4":
        "The company itself is a very successful company. So where does the training run? To assume the fault of choosing the chosen one prevents everyone from following it? Here we bring the accusers who are present to be praised by those who praise her.",
    },
    "french":
    {
        "BigTitle": "À propos nous",
        "ToContactPage": "Contactez nous",
        "SmallTitle": "Hôtel",
        "para1":
        "Il est très important que le client fasse attention au processus d'adipiscing. Et ainsi ils l'ont abandonné pour les plaisirs. Que menons-nous à la souplesse des corrompus, à moins que le plaisir ne fuie l'architecte, mais avec quel plaisir les bienheureux se complaisent-ils quand nous les accusons des devoirs de l'erreur ? Moins",
        "para2":
        "L'entreprise elle-même est une entreprise très prospère. Alors, où se passe la formation ? Assumer la faute de choisir l'élu empêche tout le monde de le suivre ? Ici, nous amenons les accusateurs qui sont présents pour être loués par ceux qui la louent.",
        "para3":
        "Il est très important que le client fasse attention au processus d'adipiscing. Et ainsi ils l'ont abandonné pour les plaisirs. Que menons-nous à la souplesse des corrompus, à moins que le plaisir ne fuie l'architecte, mais avec quel plaisir les bienheureux se complaisent-ils quand nous les accusons des devoirs de l'erreur ? Moins",
        "para4":
        "L'entreprise elle-même est une entreprise très prospère. Alors, où se passe la formation ? Assumer la faute de choisir l'élu empêche tout le monde de le suivre ? Ici, nous amenons les accusateurs qui sont présents pour être loués par ceux qui la louent.",
    },
    "arabic":
    {
        "BigTitle": "حول الفندق",
        "ToContactPage": "تواصل معنا",
        "SmallTitle": "الفندق",
        "para1":
        ".من المهم جدًا أن ينتبه العميل لعملية اشتقاق الدهون. فتركوه من أجل الملذات. ما الذي يقودنا إلى ليونة الفاسدين ، إلا إذا تفلت اللذة من المهندس المعماري ، ولكن بأي سرور يسعد المبارك عندما نتهمهم بواجبات الخطأ؟ أقل",
        "para2":
        ".الشركة نفسها هي شركة ناجحة للغاية. إذن أين يتم تشغيل التدريب؟ افتراض خطأ اختيار الشخص المختار يمنع الجميع من اتباعه؟ هنا نأتي بالمتهمين الحاضرين ليثني عليهم من يمدحها",
        "para3":
        ".من المهم جدًا أن ينتبه العميل لعملية اشتقاق الدهون. فتركوه من أجل الملذات. ما الذي يقودنا إلى ليونة الفاسدين ، إلا إذا تفلت اللذة من المهندس المعماري ، ولكن بأي سرور يسعد المبارك عندما نتهمهم بواجبات الخطأ؟ أقل",
        "para4":
        ".الشركة نفسها هي شركة ناجحة للغاية. إذن أين يتم تشغيل التدريب؟ افتراض خطأ اختيار الشخص المختار يمنع الجميع من اتباعه؟ هنا نأتي بالمتهمين الحاضرين ليثني عليهم من يمدحها",
    },
}