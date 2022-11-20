const langEl = document.querySelector('.lang');
const link = document.querySelectorAll('.lang a');
const Box1Title = document.querySelector('.Box1Title');
const Box1Descpara1 = document.querySelector('.Box1Descpara1');
const Box1Descpara2 = document.querySelector('.Box1Descpara2');
const Box1Hyperlien = document.querySelector('.Box1Hyperlien');
const Box2Title = document.querySelector('.Box2Title');
const Box2Descpara1 = document.querySelector('.Box2Descpara1');
const Box2Descpara2 = document.querySelector('.Box2Descpara2');
const Box2Hyperlien = document.querySelector('.Box2Hyperlien');
const Box3Title = document.querySelector('.Box3Title');
const Box3Descpara1 = document.querySelector('.Box3Descpara1');
const Box3Descpara2 = document.querySelector('.Box3Descpara2');
const Box3Hyperlien = document.querySelector('.Box3Hyperlien');
const Box4Title = document.querySelector('.Box4Title');
const Box4Descpara1 = document.querySelector('.Box4Descpara1');
const Box4Descpara2 = document.querySelector('.Box4Descpara2');
const Box4Hyperlien = document.querySelector('.Box4Hyperlien');
const Box5Title = document.querySelector('.Box5Title');
const Box5Descpara1 = document.querySelector('.Box5Descpara1');
const Box5Descpara2 = document.querySelector('.Box5Descpara2');
const Box5Hyperlien = document.querySelector('.Box5Hyperlien');
const Box6Title = document.querySelector('.Box6Title');
const Box6Descpara1 = document.querySelector('.Box6Descpara1');
const Box6Descpara2 = document.querySelector('.Box6Descpara2');
const Box6Hyperlien = document.querySelector('.Box6Hyperlien');
const Box7Title = document.querySelector('.Box7Title');
const Box7Descpara1 = document.querySelector('.Box7Descpara1');
const Box7Descpara2 = document.querySelector('.Box7Descpara2');
const Box7Hyperlien = document.querySelector('.Box7Hyperlien');
const Box8Title = document.querySelector('.Box8Title');
const Box8Descpara1 = document.querySelector('.Box8Descpara1');
const Box8Descpara2 = document.querySelector('.Box8Descpara2');
const Box8Hyperlien = document.querySelector('.Box8Hyperlien');


link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        Box1Title.textContent = data[attr].Box1Title;
        Box1Descpara1.textContent = data[attr].Box1Descpara1;
        Box1Descpara2.textContent = data[attr].Box1Descpara2;
        Box1Hyperlien.textContent = data[attr].Box1Hyperlien;
        Box2Title.textContent = data[attr].Box2Title;
        Box2Descpara1.textContent = data[attr].Box2Descpara1;
        Box2Descpara2.textContent = data[attr].Box2Descpara2;
        Box2Hyperlien.textContent = data[attr].Box2Hyperlien;
        Box3Title.textContent = data[attr].Box3Title;
        Box3Descpara1.textContent = data[attr].Box3Descpara1;
        Box3Descpara2.textContent = data[attr].Box3Descpara2;
        Box3Hyperlien.textContent = data[attr].Box3Hyperlien;
        Box4Title.textContent = data[attr].Box4Title;
        Box4Descpara1.textContent = data[attr].Box4Descpara1;
        Box4Descpara2.textContent = data[attr].Box4Descpara2;
        Box4Hyperlien.textContent = data[attr].Box4Hyperlien;
        Box5Title.textContent = data[attr].Box5Title;
        Box5Descpara1.textContent = data[attr].Box5Descpara1;
        Box5Descpara2.textContent = data[attr].Box5Descpara2;
        Box5Hyperlien.textContent = data[attr].Box5Hyperlien;
        Box6Title.textContent = data[attr].Box6Title;
        Box6Descpara1.textContent = data[attr].Box6Descpara1;
        Box6Descpara2.textContent = data[attr].Box6Descpara2;
        Box6Hyperlien.textContent = data[attr].Box6Hyperlien;
        Box7Title.textContent = data[attr].Box7Title;
        Box7Descpara1.textContent = data[attr].Box7Descpara1;
        Box7Descpara2.textContent = data[attr].Box7Descpara2;
        Box7Hyperlien.textContent = data[attr].Box7Hyperlien;
        Box8Title.textContent = data[attr].Box8Title;
        Box8Descpara1.textContent = data[attr].Box8Descpara1;
        Box8Descpara2.textContent = data[attr].Box8Descpara2;
        Box8Hyperlien.textContent = data[attr].Box8Hyperlien;

    });
});

var data = {
    "english":
    {
        "Box1Title": "Hotel",
        "Box1Descpara1":
        "Hello, it's really a pain to be followed. Follow the services to get the most valuable! Some people will accept any expedient from others, as if they are the result of pleasures, and those whose pleasures are the result of pleasure, they must be hated! No one from the whole forsakes all the praisers of the trouble.",
        "Box1Descpara2":
        "If the customer is very smart, he or she will be able to achieve the desired result. We accuse them of pains and not easy right, training error something and the like result in it!",
        "Box1Hyperlien": "See More",

        "Box2Title": "Kitchen",
        "Box2Descpara1":
        "Hello, it's really a pain to be followed. Follow the services to get the most valuable! Some people will accept any expedient from others, as if they are the result of pleasures, and those whose pleasures are the result of pleasure, they must be hated! No one from the whole forsakes all the praisers of the trouble.",
        "Box2Descpara2":
        "If the customer is very smart, he or she will be able to achieve the desired result. We accuse them of pains and not easy right, training error something and the like result in it!",
        "Box2Hyperlien": "See More",

        "Box3Title": "Restaurant",
        "Box3Descpara1":
        "Hello, it's really a pain to be followed. Follow the services to get the most valuable! Some people will accept any expedient from others, as if they are the result of pleasures, and those whose pleasures are the result of pleasure, they must be hated! No one from the whole forsakes all the praisers of the trouble.",
        "Box3Descpara2":
        "If the customer is very smart, he or she will be able to achieve the desired result. We accuse them of pains and not easy right, training error something and the like result in it!",
        "Box3Hyperlien": "See More",

        "Box4Title": "Swimming Pool",
        "Box4Descpara1":
        "Hello, it's really a pain to be followed. Follow the services to get the most valuable! Some people will accept any expedient from others, as if they are the result of pleasures, and those whose pleasures are the result of pleasure, they must be hated! No one from the whole forsakes all the praisers of the trouble.",
        "Box4Descpara2":
        "If the customer is very smart, he or she will be able to achieve the desired result. We accuse them of pains and not easy right, training error something and the like result in it!",
        "Box4Hyperlien": "See More",

        "Box5Title": "Spa",
        "Box5Descpara1":
        "Hello, it's really a pain to be followed. Follow the services to get the most valuable! Some people will accept any expedient from others, as if they are the result of pleasures, and those whose pleasures are the result of pleasure, they must be hated! No one from the whole forsakes all the praisers of the trouble.",
        "Box5Descpara2":
        "If the customer is very smart, he or she will be able to achieve the desired result. We accuse them of pains and not easy right, training error something and the like result in it!",
        "Box5Hyperlien": "See More",

        "Box6Title": "Rooms",
        "Box6Descpara1":
        "Hello, it's really a pain to be followed. Follow the services to get the most valuable! Some people will accept any expedient from others, as if they are the result of pleasures, and those whose pleasures are the result of pleasure, they must be hated! No one from the whole forsakes all the praisers of the trouble.",
        "Box6Descpara2":
        "If the customer is very smart, he or she will be able to achieve the desired result. We accuse them of pains and not easy right, training error something and the like result in it!",
        "Box6Hyperlien": "See More",

        "Box7Title": "Parking",
        "Box7Descpara1":
        "Hello, it's really a pain to be followed. Follow the services to get the most valuable! Some people will accept any expedient from others, as if they are the result of pleasures, and those whose pleasures are the result of pleasure, they must be hated! No one from the whole forsakes all the praisers of the trouble.",
        "Box7Descpara2":
        "If the customer is very smart, he or she will be able to achieve the desired result. We accuse them of pains and not easy right, training error something and the like result in it!",
        "Box7Hyperlien": "See More",

        "Box8Title": "Maps",
        "Box8Descpara1":
        "Hello, it's really a pain to be followed. Follow the services to get the most valuable! Some people will accept any expedient from others, as if they are the result of pleasures, and those whose pleasures are the result of pleasure, they must be hated! No one from the whole forsakes all the praisers of the trouble.",
        "Box8Descpara2":
        "If the customer is very smart, he or she will be able to achieve the desired result. We accuse them of pains and not easy right, training error something and the like result in it!",
        "Box8Hyperlien": "See More",
    },
    "french":
    {
        "Box1Title": "Hôtel",
        "Box1Descpara1":
        "Bonjour, c'est vraiment pénible à suivre. Suivez les services pour obtenir le plus précieux! Certaines personnes accepteront n'importe quel expédient des autres, comme s'ils étaient le résultat de plaisirs, et ceux dont les plaisirs sont le résultat de plaisirs, ils doivent être détestés ! Personne dans l'ensemble n'abandonne tous les louanges du trouble.",
        "Box1Descpara2":
        "Si le client est très intelligent, il pourra obtenir le résultat souhaité. Nous les accusons de douleurs et pas facile à droite, erreur de formation quelque chose et ainsi de suite en résultent !",
        "Box1Hyperlien": "Voir Plus",

        "Box2Title": "Cousine",
        "Box2Descpara1":
        "Bonjour, c'est vraiment pénible à suivre. Suivez les services pour obtenir le plus précieux! Certaines personnes accepteront n'importe quel expédient des autres, comme s'ils étaient le résultat de plaisirs, et ceux dont les plaisirs sont le résultat de plaisirs, ils doivent être détestés ! Personne dans l'ensemble n'abandonne tous les louanges du trouble.",
        "Box2Descpara2":
        "Si le client est très intelligent, il pourra obtenir le résultat souhaité. Nous les accusons de douleurs et pas facile à droite, erreur de formation quelque chose et ainsi de suite en résultent !",
        "Box2Hyperlien": "Voir Plus",

        "Box3Title": "Restaurant",
        "Box3Descpara1":
        "Bonjour, c'est vraiment pénible à suivre. Suivez les services pour obtenir le plus précieux! Certaines personnes accepteront n'importe quel expédient des autres, comme s'ils étaient le résultat de plaisirs, et ceux dont les plaisirs sont le résultat de plaisirs, ils doivent être détestés ! Personne dans l'ensemble n'abandonne tous les louanges du trouble.",
        "Box3Descpara2":
        "Si le client est très intelligent, il pourra obtenir le résultat souhaité. Nous les accusons de douleurs et pas facile à droite, erreur de formation quelque chose et ainsi de suite en résultent !",
        "Box3Hyperlien": "Voir Plus",

        "Box4Title": "Piscine",
        "Box4Descpara1":
        "Bonjour, c'est vraiment pénible à suivre. Suivez les services pour obtenir le plus précieux! Certaines personnes accepteront n'importe quel expédient des autres, comme s'ils étaient le résultat de plaisirs, et ceux dont les plaisirs sont le résultat de plaisirs, ils doivent être détestés ! Personne dans l'ensemble n'abandonne tous les louanges du trouble.",
        "Box4Descpara2":
        "Si le client est très intelligent, il pourra obtenir le résultat souhaité. Nous les accusons de douleurs et pas facile à droite, erreur de formation quelque chose et ainsi de suite en résultent !",
        "Box4Hyperlien": "Voir Plus",

        "Box5Title": "SPA",
        "Box5Descpara1":
        "Bonjour, c'est vraiment pénible à suivre. Suivez les services pour obtenir le plus précieux! Certaines personnes accepteront n'importe quel expédient des autres, comme s'ils étaient le résultat de plaisirs, et ceux dont les plaisirs sont le résultat de plaisirs, ils doivent être détestés ! Personne dans l'ensemble n'abandonne tous les louanges du trouble.",
        "Box5Descpara2":
        "Si le client est très intelligent, il pourra obtenir le résultat souhaité. Nous les accusons de douleurs et pas facile à droite, erreur de formation quelque chose et ainsi de suite en résultent !",
        "Box5Hyperlien": "Voir Plus",

        "Box6Title": "Chambres",
        "Box6Descpara1":
        "Bonjour, c'est vraiment pénible à suivre. Suivez les services pour obtenir le plus précieux! Certaines personnes accepteront n'importe quel expédient des autres, comme s'ils étaient le résultat de plaisirs, et ceux dont les plaisirs sont le résultat de plaisirs, ils doivent être détestés ! Personne dans l'ensemble n'abandonne tous les louanges du trouble.",
        "Box6Descpara2":
        "Si le client est très intelligent, il pourra obtenir le résultat souhaité. Nous les accusons de douleurs et pas facile à droite, erreur de formation quelque chose et ainsi de suite en résultent !",
        "Box6Hyperlien": "Voir Plus",

        "Box7Title": "Parking",
        "Box7Descpara1":
        "Bonjour, c'est vraiment pénible à suivre. Suivez les services pour obtenir le plus précieux! Certaines personnes accepteront n'importe quel expédient des autres, comme s'ils étaient le résultat de plaisirs, et ceux dont les plaisirs sont le résultat de plaisirs, ils doivent être détestés ! Personne dans l'ensemble n'abandonne tous les louanges du trouble.",
        "Box7Descpara2":
        "Si le client est très intelligent, il pourra obtenir le résultat souhaité. Nous les accusons de douleurs et pas facile à droite, erreur de formation quelque chose et ainsi de suite en résultent !",
        "Box7Hyperlien": "Voir Plus",

        "Box8Title": "Maps",
        "Box8Descpara1":
        "Bonjour, c'est vraiment pénible à suivre. Suivez les services pour obtenir le plus précieux! Certaines personnes accepteront n'importe quel expédient des autres, comme s'ils étaient le résultat de plaisirs, et ceux dont les plaisirs sont le résultat de plaisirs, ils doivent être détestés ! Personne dans l'ensemble n'abandonne tous les louanges du trouble.",
        "Box8Descpara2":
        "Si le client est très intelligent, il pourra obtenir le résultat souhaité. Nous les accusons de douleurs et pas facile à droite, erreur de formation quelque chose et ainsi de suite en résultent !",
        "Box8Hyperlien": "Voir Plus",
    },
    "arabic":
    {
        "Box1Title": "الفندق",
        "Box1Descpara1":
        ".مرحبًا ، إنه حقًا ألم يجب اتباعه. اتبع الخدمات للحصول على أعلى قيمة! بعض الناس يقبلون أي منفعة من الآخرين ، كأنها نتيجة الملذات ، والذين تكون ملذاتهم نتيجة اللذة ، يجب أن يكرهوا! لا أحد من الكل يتخلى عن مديحي الضيق",
        "Box1Descpara2":
        ".إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. نتهمهم بالآلام وليس باليسر بالصواب ، والخطأ التدريبي بشيء وما يماثله ينتج عنه!",
        "Box1Hyperlien": "شاهد المزيد",

        "Box2Title": "المطبخ",
        "Box2Descpara1":
        ".مرحبًا ، إنه حقًا ألم يجب اتباعه. اتبع الخدمات للحصول على أعلى قيمة! بعض الناس يقبلون أي منفعة من الآخرين ، كأنها نتيجة الملذات ، والذين تكون ملذاتهم نتيجة اللذة ، يجب أن يكرهوا! لا أحد من الكل يتخلى عن مديحي الضيق.",
        "Box2Descpara2":
        ".إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. نتهمهم بالآلام وليس باليسر بالصواب ، والخطأ التدريبي بشيء وما يماثله ينتج عنه!",
        "Box2Hyperlien": "شاهد المزيد",

        "Box3Title": "المطعم",
        "Box3Descpara1":
        ".مرحبًا ، إنه حقًا ألم يجب اتباعه. اتبع الخدمات للحصول على أعلى قيمة! بعض الناس يقبلون أي منفعة من الآخرين ، كأنها نتيجة الملذات ، والذين تكون ملذاتهم نتيجة اللذة ، يجب أن يكرهوا! لا أحد من الكل يتخلى عن مديحي الضيق.",
        "Box3Descpara2":
        ".إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. نتهمهم بالآلام وليس باليسر بالصواب ، والخطأ التدريبي بشيء وما يماثله ينتج عنه!",
        "Box3Hyperlien": "شاهد المزيد",

        "Box4Title": "المسبح",
        "Box4Descpara1":
        ".مرحبًا ، إنه حقًا ألم يجب اتباعه. اتبع الخدمات للحصول على أعلى قيمة! بعض الناس يقبلون أي منفعة من الآخرين ، كأنها نتيجة الملذات ، والذين تكون ملذاتهم نتيجة اللذة ، يجب أن يكرهوا! لا أحد من الكل يتخلى عن مديحي الضيق.",
        "Box4Descpara2":
        ".إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. نتهمهم بالآلام وليس باليسر بالصواب ، والخطأ التدريبي بشيء وما يماثله ينتج عنه!",
        "Box4Hyperlien": "شاهد المزيد",

        "Box5Title": "منتجع صحي",
        "Box5Descpara1":
        "مرحبًا ، إنه حقًا ألم يجب اتباعه. اتبع الخدمات للحصول على أعلى قيمة! بعض الناس يقبلون أي منفعة من الآخرين ، كأنها نتيجة الملذات ، والذين تكون ملذاتهم نتيجة اللذة ، يجب أن يكرهوا! لا أحد من الكل يتخلى عن مديحي الضيق.",
        "Box5Descpara2":
        "إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. نتهمهم بالآلام وليس باليسر بالصواب ، والخطأ التدريبي بشيء وما يماثله ينتج عنه!",
        "Box5Hyperlien": "شاهد المزيد",

        "Box6Title": "غرف نوم",
        "Box6Descpara1":
        "مرحبًا ، إنه حقًا ألم يجب اتباعه. اتبع الخدمات للحصول على أعلى قيمة! بعض الناس يقبلون أي منفعة من الآخرين ، كأنها نتيجة الملذات ، والذين تكون ملذاتهم نتيجة اللذة ، يجب أن يكرهوا! لا أحد من الكل يتخلى عن مديحي الضيق.",
        "Box6Descpara2":
        "إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. نتهمهم بالآلام وليس باليسر بالصواب ، والخطأ التدريبي بشيء وما يماثله ينتج عنه!",
        "Box6Hyperlien": "شاهد المزيد",

        "Box7Title": "موقف السيارات",
        "Box7Descpara1":
        "مرحبًا ، إنه حقًا ألم يجب اتباعه. اتبع الخدمات للحصول على أعلى قيمة! بعض الناس يقبلون أي منفعة من الآخرين ، كأنها نتيجة الملذات ، والذين تكون ملذاتهم نتيجة اللذة ، يجب أن يكرهوا! لا أحد من الكل يتخلى عن مديحي الضيق.",
        "Box7Descpara2":
        "إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. نتهمهم بالآلام وليس باليسر بالصواب ، والخطأ التدريبي بشيء وما يماثله ينتج عنه!",
        "Box7Hyperlien": "شاهد المزيد",

        "Box8Title": "خرائط",
        "Box8Descpara1":
        "مرحبًا ، إنه حقًا ألم يجب اتباعه. اتبع الخدمات للحصول على أعلى قيمة! بعض الناس يقبلون أي منفعة من الآخرين ، كأنها نتيجة الملذات ، والذين تكون ملذاتهم نتيجة اللذة ، يجب أن يكرهوا! لا أحد من الكل يتخلى عن مديحي الضيق.",
        "Box8Descpara2":
        "إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. نتهمهم بالآلام وليس باليسر بالصواب ، والخطأ التدريبي بشيء وما يماثله ينتج عنه!",
        "Box8Hyperlien": "شاهد المزيد",
    },
}