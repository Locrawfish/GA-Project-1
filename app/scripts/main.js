  'use strict';

  console.log('Welcome to Globetrotter!');

  // Hide quiz section until click the top button
  $('#quiz').hide();

  // Array of questions and answers
  // function countryQandAs(country, question, answer){
  //   this.country = country;
  //   this.question = question;
  //   this.answer = answer;
  // };

  var questions = [{
    country: 'Austria',
    question: 'Schönbrunn palace, shown in the picture was the summer home of the Hapsburgs. How many rooms does it have?',
    choices: [' 750', ' 1,440', ' 1,630'],
    correctAnswer: 1,
    image: '<img src=\'images/Austria.jpg\'>'
  }, {
    country: 'Germany',
    question: 'Construction of the Berlin Wall started August 13, 1961, and became the center of a divided Europe through the Cold War. When did the Berlin Wall fall?',
    choices: [' 1990', ' 1989', ' 1987'],
    correctAnswer: 1,
    image: '<img src=\'images/Germany.jpg\'>'
  }, {
    country: 'England',
    question: "London is the capital of England, and is home to many iconic sites, including 'Big Ben', pictured here. What does actually 'Big Ben' refer to?",
    choices: [' The tower', ' The clock', ' The bell of the clock'],
    correctAnswer: 2,
    image: '<img src=\'images/United_Kingdom.jpg\'>'
  }, {
    country: 'Albania',
    question: "What is the main religion in Albania?",
    choices: [' Christianity', ' Islam', ' Judaism'],
    correctAnswer: 1,
    image: '<img src=\'images/Albania.jpg\'>'
  }, {
    country: 'Armenia',
    question: "Interesting quite a few Armenians actually live outside of Armenia. How many Armenians live outside of Armenia?",
    choices: [' 500,000', ' 3 million', ' 8 million'],
    correctAnswer: 2,
    image: '<img src=\'images/Armenia.jpg\'>'
  }, {
    country: 'Belgium',
    question: "Everyone knows that Belgium has waffles. Guess what other food is from Belgium?",
    choices: [' French fries', ' Potato pancakes', ' Hot dog'],
    correctAnswer: 0,
    image: '<img src=\'images/Belgium.jpg\'>'
  }, {
    country: 'Bosnia',
    question: "What year did Bosnia gain independence?",
    choices: [' 1918', ' 1955', ' 1992'],
    correctAnswer: 2,
    image: '<img src=\'images/Bosnia.jpg\'>'
  },
  {
    country: 'Bulgaria',
    question: "Bulgaria borders Greece, Turkey, Romania, Serbia, and Macedonia. What is it's capital?",
    choices: [' Sofia', ' Burgas', ' Varna'],
    correctAnswer: 0,
    image: '<img src=\'images/Bulgaria.JPG\'>'
  },
  {
    country: 'Croatia',
    question: "Croatia is known for its beautiful coast. What sea borders Croatia",
    choices: [' Mediterranean Sea', ' Adriatic Sea', ' Tyrrhenian Sea'],
    correctAnswer: 1,
    image: '<img src=\'images/Croatia.jpg\'>'
  },
  {
    country: 'Cyprus',
    question: "Cyprus is an island in the ?",
    choices: [' Greece', ' Syria', ' Turkey'],
    correctAnswer: 2,
    image: '<img src=\'images/Cyprus.jpg\'>'
  },
  {
    country: 'Czech Republic',
    question: "The capital of the Czech Republic is Prague, which has a famous bridge pictured here. What is the name of the bridge??",
    choices: [' Charles Bridge', ' Nusle Bridge', ' Palacky Bridge'],
    correctAnswer: 0,
    image: '<img src=\'images/CzechRepublic.jpeg\'>'
  },
  {
    country: 'Denmark',
    question: "There are 443 named islands off the coast of Denmark. How many are inhabited?",
    choices: [' 137', ' 243', ' 76'],
    correctAnswer: 2,
    image: '<img src=\'images/Denmark.jpg\'>'
  },
  {
    country: 'Estonia',
    question: "This meteorite crater pictured here is caused by the biggest meteorite to ever hit land while people were around. In what city is it located?",
    choices: [' ', ' Kaali', ' '],
    correctAnswer: 1,
    image: '<img src=\'images/Estonia.jpg\'>'
  },
  {
    country: 'Finland',
    question: "Where does Finland rank in the number of Winter Olympic medals per capita?",
    choices: [' 1', ' 2', ' 3'],
    correctAnswer: 1,
    image: '<img src=\'images/Finland.jpg\'>'
  },
  {
    country: 'France',
    question: "Mont Saint Michel is one of France's most recognizable landmarks. How many people live there as of 2015?",
    choices: [' 50', ' 124', ' 232'],
    correctAnswer: 0,
    image: '<img src=\'images/France.jpg\'>'
  },
  {
    country: 'Georgia',
    question: "What language is not spoken in Georgia?",
    choices: [' Russian', ' Albanian', ' Azerbaijani'],
    correctAnswer: 1,
    image: '<img src=\'images/Georgia.jpeg\'>'
  },
  {
    country: 'Greece',
    question: "Athens is the capital of Greece. What percentage of the population lives there?",
    choices: [' 25%', ' 32%', ' 40%'],
    correctAnswer: 2,
    image: '<img src=\'images/Greece.jpg\'>'
  },
  {
    country: 'Hungary',
    question: "HUngary is one of the oldest countries in Europe. When was it established?",
    choices: [' 896', ' 813', ' 962'],
    correctAnswer: 0,
    image: '<img src=\'images/Hungary.jpg\'>'
  },
  {
    country: 'Iceland',
    question: "What is the population of Iceland?",
    choices: [' 456,300', ' 329,100', ' 298,700'],
    correctAnswer: 1,
    image: '<img src=\'images/Iceland.jpg\'>'
  },
  {
    country: 'Ireland',
    question: "What animal cannot be found in Ireland?",
    choices: [' weasel', ' mole', ' snake'],
    correctAnswer: 2,
    image: '<img src=\'images/Ireland.jpeg\'>'
  },
  {
    country: 'Italy',
    question: "How many pounds of pasta does the average Italian eat each year?",
    choices: [' 25kg', ' 19kg', ' 15kg'],
    correctAnswer: 0,
    image: '<img src=\'images/Italy.jpeg\'>'
  },
  {
    country: 'Latvia',
    question: "What is the most popular sport in Latvia?",
    choices: [' Ice Hockey', ' Skiing', ' Soccer'],
    correctAnswer: 0,
    image: '<img src=\'images/Latvia.jpg\'>'
  },
  {
    country: 'Liechtenstein',
    question: "When was the country's defense force abolished?",
    choices: [' 1918', ' 1868', ' 1886'],
    correctAnswer: 1,
    image: '<img src=\'images/Liechtenstein.jpg\'>'
  },
  {
    country: 'Lithuania',
    question: "Kaunas pictured here is the second largest city in Lithuania. What is the first largest city?",
    choices: [' Panevėžys', '  Vilnius', ' Visaginas'],
    correctAnswer: 1,
    image: '<img src=\'images/Lithuania.jpg\'>'
  }

  ];

  var quiz = $('#quiz');
  var selection;
  var randomNumber = Math.round(Math.random() * 22); //need to change the 2 to the number of questions -1
  var randomQuestion = questions[randomNumber];
  var numCorrect = 0;

  function newQuestion() {
    console.log('made it!');
    $('#country-name').text(randomQuestion.country);
    $('img').replaceWith(randomQuestion.image);
    $('#country-question').text(randomQuestion.question);
    $('#answer-one').text(randomQuestion.choices[0]);
    $('#answer-two').text(randomQuestion.choices[1]);
    $('#answer-three').text(randomQuestion.choices[2]);
  };

  function updateScore() {
    numCorrect += 100;
    $('.score').html('€ ' + numCorrect);
  };
  // Show quiz section until click the top button
  $('#main-button').click(function() {
    $('#travel').hide(800);
    $('#quiz').show(1000, newQuestion());
  });

  $('#myForm input').on('change', function() {
    selection = ($('input[name="optradio"]:checked', '#myForm').val());
    // console.log('answer is ' + randomQuestion.correctAnswer);
    if (selection == randomQuestion.correctAnswer) {
      // $('#feedback').text('You got it right!');
      alert("You're correct!");
      updateScore();
    }
    else {
      // $('#feedback').text("That's wrong. Try again.");
      alert("You're wrong. Try again.");
    }
  });

  $('#next-button').click(function() {
    randomNumber = Math.round(Math.random() * 22);
    randomQuestion = questions[randomNumber];
    $('#quiz').show(1000, newQuestion());
    $('input[name="optradio"]').attr('checked',false);
  });


  // if $('#correctAnswer')
  // if ($('.radio') == randomQuestion.correctAnswer){
  // $('#quiz').show(1000, function(New));
