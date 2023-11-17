window.onload= init;

//global variables
let currentQuestion = 0;
let scoreGlobal = 0;

let tableauQuestions = [
    {
    question: "Who plays the main character in the Matrix saga?",
    answers: ["a. Keanu Reeves", "b. Laurence Fishburne", "c. Carrie-Anne Moss", "d. Hugo Weaving"],
    correctAnswer: 0,
    image: "https://fr.web.img6.acsta.net/medias/04/34/49/043449_af.jpg",
    largeurImage:"300px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "Who plays the main character in the recent Barbie movie?",
    answers: ["a. Emma Mackey", "b. Margot Robbie", "c. America Ferrera", "d. Issa Rae"],
    correctAnswer: 1,
    image: "https://media.vogue.co.uk/photos/64130ed6b969888aada448cb/master/pass/rev-1-BARBIE-TP-0002_High_Res_JPEG.jpeg",
    largeurImage:"600px",
    score:1,
    type:'singleChoice'
    },
    {
    question: "There are over 500,000 movies in existence",
    answers: ["a. True", "b. False"],
    correctAnswer: 0,
    image: "https://lonelybrand.com/wp-content/uploads/2013/12/social-media-movies-banner.png",
    largeurImage:"500px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "Who's the killer in the first Scream movie?",
    answers: ["a. Billy Loomis and Stuart Macher", "b. Roman Bridger", "c. Kieran Wilcox", "d. Emma Duval"],
    correctAnswer: 0,
    image: "https://cdna.artstation.com/p/assets/images/images/017/779/632/large/anastasiya-r-screeam-4.jpg",
    largeurImage:"400px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "Who made the Forrest Gump movie?",
    answers: ["a. Tom Hanks", "b. Gary Sinise", "c. Robin Wright", "d. Robert Zemeckis"],
    correctAnswer: 3,
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/717C4+q+CrL._AC_UF1000,1000_QL80_.jpg",
    largeurImage:"300px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "Who made the Inception movie?",
    answers: ["a. Elliot Page", "b. Tom Hardy", "c. Leonardo DiCaprio", "d. Christopher Nolan"],
    correctAnswer: 3,
    image: "https://www.odyssee-carriere.com/wp-content/uploads/2019/11/incpetion-3.jpg",
    largeurImage:"600px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "In which city the recent Joker film takes place?",
    answers: ["a. Gotham City", "b. New York City", "c. Los Angeles City", "d. Paris"],
    correctAnswer: 0,
    image: "https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_UF894,1000_QL80_.jpg",
    largeurImage:"300px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "Who made The Super Mario Bros. Movie?",
    answers: ["a. Mario and Luigi", "b. Aaron Horvath and Michael Jelenic", "c. Toadd and Yoshi", "d. Princess Peach"],
    correctAnswer: 1,
    image: "https://www.goutemesdisques.com/uploads/tx_gmdchron/pi1/1200x1200bf-60_02.jpg",
    largeurImage:"400px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "In the movie The Green Line the character named John Coffey was falsly accused and condemned to prison.",
    answers: ["a. True", "b. False",],
    correctAnswer: 0,
    image: "https://m.media-amazon.com/images/S/pv-target-images/40473ed6de760d94a9adffad6d689971ec15ef0e3ca3a0f35fc90d2d36f5ceee.jpg",
    largeurImage:"500px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "Who made the film : Chihiro's Journey?",
    answers: ["a. Hayao Miyazaki", "b. Chihiro Ogino", "c. Miyu Irino", "d. Mari Natsuki"],
    correctAnswer: 0,
    image: "https://www.maihua.fr/wp-content/uploads/2018/11/chihiro-maihua-5.png",
    largeurImage:"500px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "Who directed the film : Parasite?",
    answers: ["a. Boong Joon Ho", "b. Song Kang-Ho", "c. Park So-Dam", "d. Chang Hyae Jin"],
    correctAnswer: 0,
    image: "https://fr.web.img5.acsta.net/c_310_420/pictures/20/02/12/13/58/3992754.jpg",
    largeurImage:"300px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "What is one of the most known quote, or its variant, in the Spider-man movies.",
    answers: ["a. I have a bad feeling about this", "b. I'm Batman", "c. It's a bird! It's a plane! It's Superman", "d. With great power comes great responsability"],
    correctAnswer: 0,
    image: "https://fr.web.img5.acsta.net/medias/nmedia/00/00/00/33/spiderman.jpg",
    largeurImage:"300px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "How old is baby Yoda in the Mandalorian? Knowing that Yoda lived to the age of 900.",
    answers: ["a. 1 year old", "b. 500 years old", "c. 50 years old"],
    correctAnswer: 0,
    image: "https://hips.hearstapps.com/hmg-prod/images/the-mandalorian-chapter-14-disney-2-1607076828.jpeg",
    largeurImage:"600px",
    score:1,
    type: 'singleChoice'
    },
    {
        question: "What question does the serie Black Mirror explore?",
        answers: ["a. The future of our society ", "b. The issue of global warming", "c. The mirror-making process"],
        correctAnswer: 0,
        image: "https://media.lesechos.com/api/v1/images/view/5e5621d2d286c2759a4161c3/1280x720/15183-1559575900-black-miror.jpg",
        largeurImage:"500px",
        score:1,
        type: 'singleChoice'
        },
    {
        question: "Who is the main character the Vanda-Vision show?",
        answers: ["a. Vision", "b. Wanda Maximoff", "c. Agnes", "d. Monica Rambeau"],
        correctAnswer: 1,
        image: "https://www.lescomics.fr/wp-content/uploads/2021/01/wandavision-poster-1600668936-610x904.jpg",
        largeurImage:"300px",
        score:1,
        type: 'singleChoice'
        },
    {
        question: "Who's the main character in the One Piece anime?",
        answers: ["a. Usopp", "b. Zoro", "c. Luffy", "d. Marshall D. Teach"],
        correctAnswer: 2,
        image: "https://diveng.rosselcdn.net/sites/default/files/dpistyles/ena_16_9_extra_big/node_682/2120/public/thumbnails/image/one_piece.jpg",
        largeurImage:"500px",
        score:1,
        type: 'singleChoice'
        },
    {
        question: "The highest-grossing actor of all time is Samuel L. Jackson.",
        answers: ["a. True", "b. False"],
        correctAnswer: 0,
        image: "https://i.pinimg.com/736x/07/b6/db/07b6db9ba9f098a3457f24a6a1b207db.jpg",
        largeurImage:"400px",
        score:1,
        type: 'singleChoice'
        },
    {
        question: "Who's the main character of the Lovecraft Country show?",
        answers: ["a. Atticus Freeman", "b. Hippolyta Freeman", "c. Georges Freeman", "d. Letitia Lewis"],
        correctAnswer: 0,
        image: "https://fr.web.img6.acsta.net/pictures/23/05/17/14/35/1970081.jpg",
        largeurImage:"300px",
        score:1,
        type: 'singleChoice'
        },
    {
        question: "Who's the main character of the Spider-Man: Across the Spider-Verse movie?",
        answers: ["a. Gwen Stacy", " b. Miles Morales", "c. Peter Parker", "d. Miguel O'Hara"],
        correctAnswer: 1,
        image: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
        largeurImage:"300px",
        score:1,
        type: 'singleChoice'
        },
    {
        question: "From what game is the animated serie Arcane adapted from?",
        answers: ["a. Tetris", "b. Solitaire", "c. League Of Legends", "d. Sudoku"],
        correctAnswer: 2,
        image: "https://images.justwatch.com/poster/260775274/s332/saison-1",
        largeurImage:"300px",
        score:1,
        type: 'singleChoice'
        },
    {
        question: "Who's the main character in The Walking Dead?",
        answers: ["a. Rick Grimes", "b. Carol Peletier", "c. Maggie Rhee", "d. Daryl Dixon"],
        correctAnswer: 0,
        image: "https://4.bp.blogspot.com/-9VwkcyEzPUM/Um1OjzMM_YI/AAAAAAAAGCE/T5Ekhp3ilYU/s1600/the-walking-dead.jpg",
        largeurImage:"500px",
        score:1,
        type: 'singleChoice'
        },
    {
        question: "Who's the main character in Batman : The Dark Knight?",
        answers: ["a. Bruce Wayne", "b. Joker", "c. Alfred", "d. Gordon"],
        correctAnswer: 0,
        image: "https://images.ladepeche.fr/api/v1/images/view/5c34d2f53e454659430d33a5/large/image.jpg",
        largeurImage:"500px",
        score:1,
        type: 'singleChoice'
        },
    {
        question: "The movie Westworld (1973) was the first to use Computer Generated Imagery.",
        answers: ["a. True", "b. False"],
        correctAnswer: 0,
        image: "https://m.media-amazon.com/images/M/MV5BMWY0NzM5MDAtYTg2NC00MDZjLTgwM2UtZjdiOTEzMjQ4MjU0L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        largeurImage:"300px",
        score:1,
        type: 'singleChoice'
        },
    {	
        question: "Who plays the main character in The Marvels?",
        answers: ["a. Brie Larson", "b. Iman Vellani ", "c. Teyonah Parris ", "d. Samuel L. Jackson "],
        correctAnswer: 0,
        image: "https://www.ecranlarge.com/uploads/image/001/491/the-marvels-photo-teyonah-parris-brie-larson-iman-vellani-1491141.jpg",
        largeurImage:"500px",
        score:1,
        type: 'singleChoice'
        },
    {
        question: "Who play the main character in the saga The Guardians of the Galaxy?",
        answers: ["a. Bradley Cooper", "b. Zoe Saldana", "c. Vin Diesel", "d. Chris Pratt"],
        correctAnswer: 3,
        image: "https://pbs.twimg.com/media/F4ZTV6pWsAAK_sT?format=jpg&name=large",
        largeurImage:"300px",
        score:1,
        type: 'singleChoice'
        }, 
];

function init() {
    console.log("Page is ready, elements displayed, and ressources that can take time ready too (videos)")
    const startButton = document.querySelector('#Mixedcategory');
    startButton.onclick = Mixedcategory;
}

function Mixedcategory() {
    console.log("Mixedcategory");

    currentQuestion= 0;

    displayQuestion(currentQuestion);
}

function displayQuestion(currentQuestion) {
    //  we get the div that will be used to display the question
    let questionDiv = document.querySelector('#questionDiv');
    // we clear the div (question précédente)
    questionDiv.innerHTML = "";

    //we display the image
    let questionImage = document.createElement("img");
    questionImage.src = tableauQuestions[currentQuestion].image;
    questionImage.style.width = tableauQuestions[currentQuestion].largeurImage;
    questionDiv.appendChild(questionImage);
    questionImage.classList.add("quiz-image");

    // we display the title of the question
    let questionTitle = document.createElement('h3');
    questionTitle.innerHTML = tableauQuestions[currentQuestion].question;
    questionDiv.append(questionTitle);
    
    //add a button for each possible answer
    let answerDiv = document.createElement('div');
    answerDiv.id = "answerDiv";
    //and we add this div to the question div
    questionDiv.append(answerDiv);

    answerDiv.innerHTML = "";
    for (let i = 0; i < tableauQuestions[currentQuestion].answers.length; i++) {
        let answerButton = document.createElement('button');
        answerButton.id = i;
        //we had the class CSS answerButton
        answerButton.classList.add("answerButton");
        
        answerButton.innerHTML = tableauQuestions[currentQuestion].answers[i];
        // we get the div for the answer buttons
        answerDiv.append(answerButton);

        answerButton.onclick = (evt) => {
            //we get the button that was clicked
            let button = evt.target;
            //its id is the index of the answer in the array

            //check if this was the right answer
            if(tableauQuestions[currentQuestion].correctAnswer === parseInt(button.id)) {
                scoreGlobal++;
                //change the display of the score on screen
                let scoreDiv = document.querySelector('#divScore');
                scoreDiv.innerHTML = "Score : " +scoreGlobal;
            }

            //next question
            currentQuestion++;

            //check if other question to dislay
            if(currentQuestion < tableauQuestions.length) {
                displayQuestion(currentQuestion);
            }
            else {
                //we have finished the quiz
                gameOver();
            }
        };
    }
}

function gameOver() {
    //we get the div that will be used to display the question
    let questionDiv = document.querySelector('#questionDiv');
    //we clear the div
    questionDiv.innerHTML = "";

    questionDiv.innerHTML = "The game is over ! Your final score is : " + scoreGlobal + "/25."
    + "<br>  The actual answer were : a-b-a-a-d-d-a-b-a-a-a-a-a-a-b-c-a-a-b-c-a-a-a-a-d";
}
