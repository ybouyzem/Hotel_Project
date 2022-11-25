const langEl = document.querySelector('.lang');
const link = document.querySelectorAll('.lang a');
const BigTitleValue = document.querySelector('.BigTitleValue');
const DescValue = document.querySelector('.DescriptionValue');
const TalkSecretary = document.querySelector('.Box1SmallTitleValue');
const Box1Desc = document.querySelector('.Box1Desc');
const support = document.querySelector('.Box2SmallTitleValue');
const Box2Desc = document.querySelector('.Box2Desc');
const toContact = document.querySelector('.toContact');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        BigTitleValue.textContent = data[attr].BigTitleValue;
        DescValue.textContent = data[attr].DescriptionValue;
        TalkSecretary.textContent = data[attr].Box1SmallTitleValue;
        Box1Desc.textContent = data[attr].Box1Desc;
        support.textContent = data[attr].Box2SmallTitleValue;
        Box2Desc.textContent = data[attr].Box2Desc;
        toContact.textContent = data[attr].toContact;
    });
});

var data = {
    "english":
    {
        "BigTitleValue": "Get in touch",
        "DescriptionValue": "Needs Help? Don't hesitate to call the center of services.",
        "Box1SmallTitleValue": "Talk to secretary",
        "Box1Desc":
        "The company itself is a very successful company. I will explain the problems that are easy to assume and the ease with which the pains of the soul are convenient, our architect!",
        "Box2SmallTitleValue":
        "Contact client support",
        "Box2Desc":
        "The company itself is a very successful company. I will explain the problems that are easy to assume and the ease with which the pains of the soul are convenient, our architect!",
        "toContact":
        "Contact Support",
    },
    "french":
    {
        "BigTitleValue": "Entrer en contact",
        "DescriptionValue": "A besoin d'aide? N'hésitez pas à appeler le centre de services.",
        "Box1SmallTitleValue": "Parlez au secrétaire",
        "Box1Desc":
        "L'entreprise elle-même est une entreprise très prospère. Je t'expliquerai les problèmes faciles à assumer et la facilité avec laquelle les peines de l'âme sont commodes, notre architecte !",
        "Box2SmallTitleValue":
        "Contacter l'assistance clientèle",
        "Box2Desc":
        "L'entreprise elle-même est une entreprise très prospère. Je t'expliquerai les problèmes faciles à assumer et la facilité avec laquelle les peines de l'âme sont commodes, notre architecte !",
        "toContact":
        "Contactez le support",
    },
    "arabic":
    {
        "BigTitleValue": "ابقى على تواصل",
        "DescriptionValue": "تحتاج للمساعده؟ لا تتردد في الاتصال بمركز الخدمات.",
        "Box1SmallTitleValue": "تحدث إلى السكرتير",
        "Box1Desc":
        "الشركة نفسها هي شركة ناجحة للغاية. سأشرح المشاكل التي يسهل تحملها والسهولة التي تلائم بها آلام الروح ، مهندسنا!",
        "Box2SmallTitleValue":
        "اتصل بدعم العملاء",
        "Box2Desc":
        "الشركة نفسها هي شركة ناجحة للغاية. سأشرح المشاكل التي يسهل تحملها والسهولة التي تلائم بها آلام الروح ، مهندسنا!",
        "toContact":
        "اتصل بالدعم",
    },
}