const langEl = document.querySelector('.lang');
const link = document.querySelectorAll('.lang a');
const titleEl = document.querySelector('.WelcomeTitle');
const descEl = document.querySelector('.WelcomeDescription');
const HostingEl = document.querySelector('.hostingButton');
const BookingEl = document.querySelector('.bookingButton');
const Rooms = document.querySelector('.HotelDescTitleRooms');
const Clients = document.querySelector('.HotelDescTitleClients');
const Team = document.querySelector('.HotelDescTitleTeam');
const Evaluation = document.querySelector('.HotelDescTitleEvaluation');
const ChooseUs = document.querySelector('.HotelServiceBoxTitleValueChoose');
const Reason1 = document.querySelector('.HotelServiceBoxFirstReason');
const Reason2 = document.querySelector('.HotelServiceBoxSecondReason');
const Reason3 = document.querySelector('.HotelServiceBoxThirdReason');
const Reason4 = document.querySelector('.HotelServiceBoxFourthReason');
const Amenities = document.querySelector('.HotelServiceBoxTitleValueAmenities');
const Amenitie1 = document.querySelector('.HotelServiceBoxServicesFirstAmenitie');
const Amenitie2 = document.querySelector('.HotelServiceBoxServicesSecondAmenitie');
const Amenitie3 = document.querySelector('.HotelServiceBoxServicesThirdAmenitie');
const Amenitie4 = document.querySelector('.HotelServiceBoxServicesFourthAmenitie');
const SeeMore = document.querySelector('.SeeMore');
const toVisit = document.querySelector('.toTourismTitleValue');
const AinAsserdoun1 = document.querySelector('.AinAsserdoun1');
const boxParagraph1 = document.querySelector('.itemDescParagraphValue1');
const SeeMore1 = document.querySelector('.SeeMorePara1');
const BinElOuidane1 = document.querySelector('.BinElOuidane1');
const boxParagraph2 = document.querySelector('.itemDescParagraphValue2');
const SeeMore2 = document.querySelector('.SeeMorePara2');
const AinAsserdoun2 = document.querySelector('.AinAsserdoun2');
const boxParagraph3 = document.querySelector('.itemDescParagraphValue3');
const SeeMore3 = document.querySelector('.SeeMorePara3');
const BinElOuidane2 = document.querySelector('.BinElOuidane2');
const boxParagraph4 = document.querySelector('.itemDescParagraphValue4');
const SeeMore4 = document.querySelector('.SeeMorePara4');


link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        titleEl.textContent = data[attr].WelcomeTitle;
        descEl.textContent = data[attr].WelcomeDescription;
        HostingEl.textContent = data[attr].hostingButton;
        BookingEl.textContent = data[attr].bookingButton;

        Rooms.textContent = data[attr].HotelDescTitleRooms;
        Clients.textContent = data[attr].HotelDescTitleClients;
        Team.textContent = data[attr].HotelDescTitleTeam;
        Evaluation.textContent = data[attr].HotelDescTitleEvaluation;
        ChooseUs.textContent = data[attr].HotelServiceBoxTitleValueChoose;
        Reason1.textContent = data[attr].HotelServiceBoxFirstReason;
        Reason2.textContent = data[attr].HotelServiceBoxSecondReason;
        Reason3.textContent = data[attr].HotelServiceBoxThirdReason;
        Reason4.textContent = data[attr].HotelServiceBoxFourthReason;
        Amenities.textContent = data[attr].HotelServiceBoxTitleValueAmenities;
        Amenitie1.textContent = data[attr].HotelServiceBoxServicesFirstAmenitie;
        Amenitie2.textContent = data[attr].HotelServiceBoxServicesSecondAmenitie;
        Amenitie3.textContent = data[attr].HotelServiceBoxServicesThirdAmenitie;
        Amenitie4.textContent = data[attr].HotelServiceBoxServicesFourthAmenitie;
        SeeMore.textContent = data[attr].SeeMore;
        toVisit.textContent = data[attr].toTourismTitleValue;
        AinAsserdoun1.textContent = data[attr].AinAsserdoun1;
        boxParagraph1.textContent = data[attr].boxParagraph1;
        SeeMore1.textContent = data[attr].SeeMore1;
        BinElOuidane1.textContent = data[attr].BinElOuidane1;
        boxParagraph2.textContent = data[attr].boxParagraph2;
        SeeMore2.textContent = data[attr].SeeMore2;
        AinAsserdoun2.textContent = data[attr].AinAsserdoun2;
        boxParagraph3.textContent = data[attr].boxParagraph3;
        SeeMore3.textContent = data[attr].SeeMore3;
        BinElOuidane2.textContent = data[attr].BinElOuidane2;
        boxParagraph4.textContent = data[attr].boxParagraph4;
        SeeMore4.textContent = data[attr].SeeMore4;
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
        "HotelDescTitleRooms" : "Rooms",
        "HotelDescTitleClients" : "Clients",
        "HotelDescTitleTeam" : "Our Team",
        "HotelDescTitleEvaluation" : "Evaluation",
        "HotelServiceBoxTitleValueChoose" : "Why choose us?",
        "HotelServiceBoxFirstReason" : "Surrender to a well-deserved holiday.",
        "HotelServiceBoxSecondReason" : "Special offers for corporate clients.",
        "HotelServiceBoxThirdReason" : "Tasty dishes prepared with love and attention.",
        "HotelServiceBoxFourthReason" : "Welcome and feel free to enjoy, our super service are waiting for you!",
        "HotelServiceBoxTitleValueAmenities" : "MAIN AMENITIES",
        "HotelServiceBoxServicesFirstAmenitie" : "Free Wifi",
        "HotelServiceBoxServicesSecondAmenitie" : "Swimming Pool",
        "HotelServiceBoxServicesThirdAmenitie" : "Parking",
        "HotelServiceBoxServicesFourthAmenitie" : "Restaurant",
        "SeeMore" : "See More",
        "toTourismTitleValue" : "To Visit",
        "AinAsserdoun1" : "Ain Asserdoun",
        "BinElOuidane1" : "Bin ElOuidane",
        "AinAsserdoun2" : "Ain Asserdoun",
        "BinElOuidane2" : "Bin ElOuidane",
        "boxParagraph1" : "If the customer is very smart, he or she will be able to achieve the desired result. By not rejecting the distinction from the providence and the like, we accuse him of laboring at the time of the elders!",
        "SeeMore1" : "See More",
        "boxParagraph2" : "If the customer is very smart, he or she will be able to achieve the desired result. By not rejecting the distinction from the providence and the like, we accuse him of laboring at the time of the elders!",
        "SeeMore2" : "See More",
        "boxParagraph3" : "If the customer is very smart, he or she will be able to achieve the desired result. By not rejecting the distinction from the providence and the like, we accuse him of laboring at the time of the elders!",
        "SeeMore3" : "See More",
        "boxParagraph4" : "If the customer is very smart, he or she will be able to achieve the desired result. By not rejecting the distinction from the providence and the like, we accuse him of laboring at the time of the elders!",
        "SeeMore4" : "See More",
    },
    "french":
    {
        "WelcomeTitle": "Hôtel",
        "WelcomeDescription":
        "L'entreprise elle-même est une entreprise très prospère. Alors, où se passe la formation ? Assumer la faute de choisir l'élu empêche tout le monde de le suivre ? Ici, nous amenons les accusateurs qui sont présents pour être loués par ceux qui la louent.",
        "hostingButton" : "Aller à l'hébergement",
        "bookingButton" : "Réservez maintenant",
        "HotelDescTitleRooms" : "Chambres",
        "HotelDescTitleClients" : "Clients",
        "HotelDescTitleTeam" : "Notre Equipe",
        "HotelDescTitleEvaluation" : "Evaluation",
        "HotelServiceBoxTitleValueChoose" : "Pourquoi vous devriez nous choisir?",
        "HotelServiceBoxFirstReason" : "Abandonnez-vous à des vacances bien méritées.",
        "HotelServiceBoxSecondReason" : "Offres spéciales pour les entreprises clientes.",
        "HotelServiceBoxThirdReason" : "Des plats savoureux préparés avec amour et attention.",
        "HotelServiceBoxFourthReason" : "Bienvenue et n'hésitez pas à en profiter, notre super service vous attend!",
        "HotelServiceBoxTitleValueAmenities" : "COMMODITÉS PRINCIPALES",
        "HotelServiceBoxServicesFirstAmenitie" : "Wifi gratuit",
        "HotelServiceBoxServicesSecondAmenitie" : "Piscine",
        "HotelServiceBoxServicesThirdAmenitie" : "Parking",
        "HotelServiceBoxServicesFourthAmenitie" : "Restaurant",
        "SeeMore" : "Voir Plus",
        "toTourismTitleValue" : "Pour Visiter",
        "AinAsserdoun1" : "Ain Asserdoun",
        "BinElOuidane1" : "Bin ElOuidane",
        "AinAsserdoun2" : "Ain Asserdoun",
        "BinElOuidane2" : "Bin ElOuidane",
        "boxParagraph1" : "Si le client est très intelligent, il pourra obtenir le résultat souhaité. En ne rejetant pas la distinction de la providence et autres, nous l'accusons de travailler au temps des anciens !",
        "SeeMore1" : "Voir Plus",
        "boxParagraph2" : "Si le client est très intelligent, il pourra obtenir le résultat souhaité. En ne rejetant pas la distinction de la providence et autres, nous l'accusons de travailler au temps des anciens !",
        "SeeMore2" : "Voir Plus",
        "boxParagraph3" : "Si le client est très intelligent, il pourra obtenir le résultat souhaité. En ne rejetant pas la distinction de la providence et autres, nous l'accusons de travailler au temps des anciens !",
        "SeeMore3" : "Voir Plus",
        "boxParagraph4" : "Si le client est très intelligent, il pourra obtenir le résultat souhaité. En ne rejetant pas la distinction de la providence et autres, nous l'accusons de travailler au temps des anciens !",
        "SeeMore4" : "Voir Plus",
    },
    "arabic":
    {
        "WelcomeTitle": "الفندق",
        "WelcomeDescription":
        ".الشركة نفسها هي شركة ناجحة للغاية. إذن أين يتم تشغيل التدريب؟ افتراض خطأ اختيار الشخص المختار يمنع الجميع من اتباعه؟ هنا نأتي بالمتهمين الحاضرين ليثني عليهم من يمدحها",
        "hostingButton" : "اذهب إلى الاستضافة",
        "bookingButton" : "احجز الان",
        "HotelDescTitleRooms" : "غرف",
        "HotelDescTitleClients" : "العملاء",
        "HotelDescTitleTeam" : "فريق العمل",
        "HotelDescTitleEvaluation" : "تقييم",
        "HotelServiceBoxTitleValueChoose" : "لماذا يجب أن تختارنا؟",
        "HotelServiceBoxFirstReason" : "استسلم لقضاء عطلة مستحقة.",
        "HotelServiceBoxSecondReason" : "عروض خاصة لعملاء الشركات.",
        "HotelServiceBoxThirdReason" : "أطباق لذيذة محضرة بحب واهتمام.",
        "HotelServiceBoxFourthReason" : "مرحبًا بكم ولا تتردد في الاستمتاع ، خدمتنا الفائقة في انتظارك!",
        "HotelServiceBoxTitleValueAmenities" : "وسائل الراحة الرئيسية",
        "HotelServiceBoxServicesFirstAmenitie" : "واي فاي مجاني",
        "HotelServiceBoxServicesSecondAmenitie" : "مسبح",
        "HotelServiceBoxServicesThirdAmenitie" : "موقف سيارات",
        "HotelServiceBoxServicesFourthAmenitie" : "مطعم",
        "SeeMore" : "شاهد المزيد",
        "toTourismTitleValue" : "للزيارة",
        "AinAsserdoun1" : "عين اسردون",
        "boxParagraph1" : "إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. بعدم رفض التفريق بين العناية الإلهية وما في حكمها ، نتهمه بالعمل وقت الشيوخ!",
        "SeeMore1" : "شاهد المزيد",
        "BinElOuidane1" : "بن الويدان",
        "boxParagraph2" : "إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. بعدم رفض التفريق بين العناية الإلهية وما في حكمها ، نتهمه بالعمل وقت الشيوخ!",
        "SeeMore2" : "شاهد المزيد",
        "AinAsserdoun2" : "عين اسردون",
        "boxParagraph3" : "إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. بعدم رفض التفريق بين العناية الإلهية وما في حكمها ، نتهمه بالعمل وقت الشيوخ!",
        "SeeMore3" : "شاهد المزيد",
        "BinElOuidane2" : "بن الويدان",
        "boxParagraph4" : "إذا كان العميل ذكيًا جدًا ، فسيكون قادرًا على تحقيق النتيجة المرجوة. بعدم رفض التفريق بين العناية الإلهية وما في حكمها ، نتهمه بالعمل وقت الشيوخ!",
        "SeeMore4" : "شاهد المزيد",
    },
}