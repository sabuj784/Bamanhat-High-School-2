document.addEventListener("DOMContentLoaded", function () {
    const teachers = [
        {
            id: 1,
            name: "Mr. Dilip Karmakar",
            subject: "Geography",
            education: "Studied at University of North Bengal. Mr. Dilip Karmakar Works at Research Scholar, CoochBehar Panchanan Barma University. ",
            bio: "Dilip Karnmakar, a dedicated geography teacher at Bamanhat High School, imparts knowledge of the world, inspiring student curiosity.",
            img: "357430705_1628730614304221_5316768355475965719_n-removebg-preview.png"
        },
        {
            id: 2,
            name: "Mr. Biswajit Acharjee",
            subject: "History",
            education:"Studied B.A. History (H) at alipurduar court clg",
            bio: "Biswajit Adhikary, a passionate history teacher at Bamanhat High School, brings the past to life, engaging students with historical insights.",
            img: "329157544_5742050325849606_4624302309277911225_n__1_-removebg-preview.png"
        },
        {
            id: 3,
            name: "Mr. Ratan Barma",
            subject: "English",
            education:"",
            bio: "Mr. Ratan Barma is an inspiring English teacher at Bamanhat High School, known for his dedication to student success and language excellence.",
            img: "364725292_2635307183295090_3644548127531226454_n-removebg-preview.png"
        },
        {
            id: 4,
            name: "Mr. Hiranmay Dalai",
            subject: "Physical Education",
            education:"Studied at University of North Bengal",
            bio: "Mr. Hiranmay Dalai, the physical education teacher at Bamanhat High School, promotes fitness and sportsmanship, inspiring students to stay active.",
            img: "23215688_1992389101038820_5523962776614828174_o-removebg-preview.png"
        },
        {
            id: 5,
            name: "Mr. Raju Pandey",
            subject: "English",
            education:"Studied English language at University of North Bengal",
            bio: "Mr.Raju Pandey, an English teacher at Bamanhat High School, excels in language instruction, fostering a love for literature in students",
            img: "419435144_3753244141575041_7761321005582251149_n-removebg-preview.png"
        },
        {
            id: 6,
            name: "Mr. Biplab Brajavasi",
            subject: "Bengali",
            education:"Studied at Eastern Dooars B.Ed Training College",
            bio: "বিপ্লব ব্রজবাসী, বামনহাট উচ্চ বিদ্যালয়ের একজন বাংলা শিক্ষক, ভাষার মধ্যে ছোট্ট কথায় মহাকাব্য বোঝানোর সাহস দেখায়।",
            img: "299488864_1212633112849087_2866367371028247117_n-removebg-preview.png"
        },
        {
            id: 7,
            name: "Mr. Biplop Barman",
            subject: "Science",
            education:"",
            bio: "Mr. Biplop Barman has traveled extensively and brings a wealth of real-world experience to his geography lessons.",
            img: "422345901_1530661404379588_6931739551984365802_n-removebg-preview.png"
        },
        {
            id: 8,
            name: "Mr. Pankaj Ray",
            subject: "English",
            education:"",
            bio: "Mr. Pankaj Ray has traveled extensively and brings a wealth of real-world experience to his geography lessons.",
            img:"422345901_1530661404379588_6931739551984365808_n-removebg-preview (1).png"
        },
        {
            id: 9,
            name: "Mr. Biplob Dhr",
            subject: "English",
            education:"",
            bio: "Mr. Biplob Dhr has traveled extensively and brings a wealth of real-world experience to his english lessons.",
            img: "441240509_3749640435359072_6309907296129057899_n-removebg-preview (1).png"
        },
        {
            id: 10,
            name: "Mr. Parag Roy",
            subject: "History",
            education:"Studied at University of North Bengal",
            bio: "Mr. Parag Roy,the history maestro at Bamanhat High School, paints vivid pictures of the past, making history come alive in class",
            img: "410364353_1289879211701658_8767588105322627301_n-removebg-preview.png"
        },
        {
            id: 11,
            name: "Mrs. Chandrika Paul",
            subject: "History",
            education:"",
            bio: "Mrs. Chandrika Paul, a passionate history teacher at Bamanhat High School, illuminates the past with engaging stories and insightful lessons.",
            img: "images__2_-removebg-preview.png"
        },
        {
            id: 12,
            name: "Mrs. Kalpona Modak",
            subject: "Geography",
            education:"",
            bio: "Mrs. Kalpona Modak, the geography enthusiast at Bamanhat High School, transforms mundane maps into exciting adventures, igniting a love for exploration in her students.",
            img: "360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp-removebg-preview.png"
        },
        {
            id: 13,
            name: "Mrs. Rita Modak",
            subject: "English",
            education:"Studied at Dinhata College",
            bio: "Mrs. Rita Modak, a dedicated educator at Bamanhat High School, inspires students with her passion for teaching and commitment to excellence.",
            img: "435268033_1474475223420600_8798320216310030154_n-removebg-preview.png"
        },
        {
            id: 14,
            name: "Mrs. Sumita Mondal",
            subject: "Geeography",
            education:"Studied at Bamanhat High School",
            bio: "Mrs.Sumita Mondal, a dedicated geography teacher at Bamanhat High School, balances her role as an educator while pursuing her own studies at the same school.",
            img: "331732586_972286127268528_3423048678559544199_n-removebg-preview.png"
        },
        {
            id: 15,
            name: "Mrs. Milita Chakrabarty",
            subject: "English",
            education:"Studied at Dinhata College",
            bio: "Mrs.Milita Chakrabarty, a skilled English teacher, enriches students' language skills with her innovative teaching methods and deep understanding of literature",
            img: "447994019_984735906636659_2315364814712274076_n-removebg-preview.png"
        },

        {
            id: 16,
            name: "Mrs. Mousumi Pandit",
            subject: "Sanskrit",
            education:"",
            bio: "Mrs.Mousumi Pandit, a dedicated Sanskrit teacher, imparts the ancient language's wisdom and beauty to students at Bamanhat High School.",
            img: "312337408_1550584548732965_8212794698443504851_n-removebg-preview.png"
        }
    ];
    const teacherList = document.querySelector('.teacher-list');
    const modal = document.getElementById('teacher-details');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close');

    teachers.forEach(teacher => {
        const teacherCard = document.createElement('div');
        teacherCard.classList.add('teacher-card');
        teacherCard.innerHTML = `
            <img src="${teacher.img}" alt="${teacher.name}">
            <h3>${teacher.name}</h3>
            <p>${teacher.subject}</p>
        `;
        teacherCard.addEventListener('click', () => {
            document.getElementById('teacher-pic').src = teacher.img;
            document.getElementById('teacher-name').textContent = teacher.name;
            document.getElementById('teacher-subject').textContent = teacher.subject;
            document.getElementById('teacher-bio').textContent = teacher.bio;
            document.getElementById('teacher-education').textContent = `Education: ${teacher.education}`;
            modal.style.display = 'block';
            modalContent.classList.add('animated');
        });        
        teacherList.appendChild(teacherCard);
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
