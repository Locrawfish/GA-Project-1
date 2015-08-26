  'use strict';
  /*global $:false*/

  console.log('Welcome to Globetrotter!');

  // Hide quiz section until click the top button
  $('#quiz').hide();
  $('#win').hide();

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
    question: 'London is the capital of England, and is home to many iconic sites, including "Big Ben", pictured here. What does actually "Big Ben" refer to?',
    choices: [' The tower', ' The clock', ' The bell of the clock'],
    correctAnswer: 2,
    image: '<img src=\'images/United_Kingdom.jpg\'>'
  }, {
    country: 'Albania',
    question: 'What is the main religion in Albania?',
    choices: [' Christianity', ' Islam', ' Judaism'],
    correctAnswer: 1,
    image: '<img src=\'images/Albania.jpg\'>'
  }, {
    country: 'Andorra',
    question: 'Andorra is nestled in the Pyrénées Mountains. What country DOES NOT border Andorra?',
    choices: [' France', ' Spain', ' Germany'],
    correctAnswer: 2,
    image: '<img src=\'images/Andorra.jpg\'>'
  }, {
    country: 'Armenia',
    question: 'Interesting quite a few Armenians actually live outside of Armenia. How many Armenians live outside of Armenia?',
    choices: [' 500,000', ' 3 million', ' 8 million'],
    correctAnswer: 2,
    image: '<img src=\'images/Armenia.jpg\'>'
  }, {
    country: 'Azerbaijan',
    question: 'What sea borders Azerbaijan?',
    choices: [' Caspian Sea', ' Black Sea', ' Adriatic Sea'],
    correctAnswer: 0,
    image: '<img src=\'images/Azerbaijan.jpg\'>'
  }, {
    country: 'Belarus',
    question: 'What is the main religion in Belarus?',
    choices: [' Catholicism', ' Protestant', ' Eastern Orthodoxy'],
    correctAnswer: 2,
    image: '<img src=\'images/Belarus.jpg\'>'
  }, {
    country: 'Belgium',
    question: 'Everyone knows that Belgium has waffles. Guess what other food is from Belgium?',
    choices: [' French fries', ' Potato pancakes', ' Hot dog'],
    correctAnswer: 0,
    image: '<img src=\'images/Belgium.jpg\'>'
  }, {
    country: 'Bosnia',
    question: 'What year did Bosnia gain independence?',
    choices: [' 1918', ' 1955', ' 1992'],
    correctAnswer: 2,
    image: '<img src=\'images/Bosnia.jpg\'>'
  }, {
    country: 'Bulgaria',
    question: 'Bulgaria borders Greece, Turkey, Romania, Serbia, and Macedonia. What is its capital?',
    choices: [' Sofia', ' Burgas', ' Varna'],
    correctAnswer: 0,
    image: '<img src=\'images/Bulgaria.jpeg\'>'
  }, {
    country: 'Croatia',
    question: 'Croatia is known for its beautiful coast. What sea borders Croatia',
    choices: [' Mediterranean Sea', ' Adriatic Sea', ' Tyrrhenian Sea'],
    correctAnswer: 1,
    image: '<img src=\'images/Croatia.jpg\'>'
  }, {
    country: 'Cyprus',
    question: 'Cyprus is an island in the Mediterranean Sea. What country is closest to it?',
    choices: [' Greece', ' Syria', ' Turkey'],
    correctAnswer: 2,
    image: '<img src=\'images/Cyprus.jpg\'>'
  }, {
    country: 'Czech Republic',
    question: 'The capital of the Czech Republic is Prague, which has a famous bridge pictured here. What is the name of the bridge??',
    choices: [' Charles Bridge', ' Nusle Bridge', ' Palacky Bridge'],
    correctAnswer: 0,
    image: '<img src=\'images/CzechRepublic.jpg\'>'
  }, {
    country: 'Denmark',
    question: 'There are 443 named islands off the coast of Denmark. How many are inhabited?',
    choices: [' 137', ' 243', ' 76'],
    correctAnswer: 2,
    image: '<img src=\'images/Denmark.jpg\'>'
  }, {
    country: 'Estonia',
    question: 'This meteorite crater pictured here is caused by the biggest meteorite to ever hit land while people were around. In what city is it located?',
    choices: [' Narva', ' Kaali', ' Tartu'],
    correctAnswer: 1,
    image: '<img src=\'images/Estonia.jpg\'>'
  }, {
    country: 'Finland',
    question: 'Where does Finland rank in the number of Winter Olympic medals per capita?',
    choices: [' 1', ' 2', ' 3'],
    correctAnswer: 1,
    image: '<img src=\'images/Finland.jpg\'>'
  }, {
    country: 'France',
    question: 'Mont Saint Michel is one of the most recognizable landmarks in France. How many people live there as of 2015?',
    choices: [' 50', ' 124', ' 232'],
    correctAnswer: 0,
    image: '<img src=\'images/France.jpg\'>'
  }, {
    country: 'Georgia',
    question: 'What language is not spoken in Georgia?',
    choices: [' Russian', ' Albanian', ' Azerbaijani'],
    correctAnswer: 1,
    image: '<img src=\'images/Georgia.jpeg\'>'
  }, {
    country: 'Greece',
    question: 'Athens is the capital of Greece. What percentage of the population lives there?',
    choices: [' 25%', ' 32%', ' 40%'],
    correctAnswer: 2,
    image: '<img src=\'images/Greece.jpg\'>'
  }, {
    country: 'Hungary',
    question: 'Hungary is one of the oldest countries in Europe. When was it established?',
    choices: [' 896', ' 813', ' 962'],
    correctAnswer: 0,
    image: '<img src=\'images/Hungary.jpg\'>'
  }, {
    country: 'Iceland',
    question: 'What is the population of Iceland?',
    choices: [' 456,300', ' 329,100', ' 298,700'],
    correctAnswer: 1,
    image: '<img src=\'images/Iceland.jpg\'>'
  }, {
    country: 'Ireland',
    question: 'What animal cannot be found in Ireland?',
    choices: [' The weasel', ' The mole', ' The snake'],
    correctAnswer: 2,
    image: '<img src=\'images/Ireland.jpeg\'>'
  }, {
    country: 'Italy',
    question: 'How many pounds of pasta does the average Italian eat each year?',
    choices: [' 25kg', ' 19kg', ' 15kg'],
    correctAnswer: 0,
    image: '<img src=\'images/Italy.jpeg\'>'
  }, {
    country: 'Latvia',
    question: 'What is the most popular sport in Latvia?',
    choices: [' Ice Hockey', ' Skiing', ' Soccer'],
    correctAnswer: 0,
    image: '<img src=\'images/Latvia.jpg\'>'
  }, {
    country: 'Liechtenstein',
    question: 'When was the defense force abolished in Liechtenstein?',
    choices: [' 1918', ' 1868', ' 1886'],
    correctAnswer: 1,
    image: '<img src=\'images/Liechtenstein.jpg\'>'
  }, {
    country: 'Lithuania',
    question: 'Kaunas pictured here is the second largest city in Lithuania. What is the first largest city?',
    choices: [' Panevėžys', '  Vilnius', ' Visaginas'],
    correctAnswer: 1,
    image: '<img src=\'images/Lithuania.jpg\'>'
  }, {
    country: 'Luxembourg',
    question: 'In the small country of Luxembourg, what language do they speak?',
    choices: [' German', '  Danish', ' Luxembourgish'],
    correctAnswer: 2,
    image: '<img src=\'images/Luxembourg.jpg\'>'
  }, {
    country: 'Macedonia',
    question: 'What is the official name of Macedonia?',
    choices: [' the United Nations is the Former Yugoslav Republic of Macedonia', '  the United Nations is the Former Russian Republic of Macedonia', ' the United Nations is the Former Turkish Republic of Macedonia'],
    correctAnswer: 0,
    image: '<img src=\'images/Macedonia.jpg\'>'
  }, {
    country: 'Malta',
    question: 'Malta is an island in the Mediterranean Sea. In what year did it gain independence from the UK?',
    choices: [' 1972', ' 1964', ' 1956'],
    correctAnswer: 1,
    image: '<img src=\'images/Malta.jpeg\'>'
  }, {
    country: 'Moldova',
    question: ' What is the official language of Moldova?',
    choices: [' Russian', ' Romanian', ' Slovakian'],
    correctAnswer: 1,
    image: '<img src=\'images/Moldova.jpeg\'>'
  }, {
    country: 'Monaco',
    question: ' What is the name of the King of Monaco?',
    choices: [' Albert II', ' Ablert I', ' Albert III'],
    correctAnswer: 0,
    image: '<img src=\'images/Monaco.jpg\'>'
  }, {
    country: 'Montenegro',
    question: ' In what year did Montenegro declare independence?',
    choices: [' 1992', ' 1985', ' 2006'],
    correctAnswer: 2,
    image: '<img src=\'images/Montenegro.jpeg\'>'
  }, {
    country: 'Netherlands',
    question: 'The Netherlands has two capitals. Which city is NOT a capital?',
    choices: [' Amsterdam', '  The Hague', ' Rotterdam'],
    correctAnswer: 2,
    image: '<img src=\'images/Netherlands.jpg\'>'
  }, {
    country: 'Norway',
    question: 'What creature is most prominent in Norwegian folklore?',
    choices: [' Troll', '  Witch', ' Dragon'],
    correctAnswer: 0,
    image: '<img src=\'images/Norway.jpeg\'>'
  }, {
    country: 'Poland',
    question: 'What do the polish eat with their pizza?',
    choices: [' ketchup', '  hot sauce', ' vinegar'],
    correctAnswer: 0,
    image: '<img src=\'images/Poland.jpg\'>'
  }, {
    country: 'Portugal',
    question: 'Portugal is situated right next to Spain, and citizens speak Portuguese and this other language?',
    choices: [' Spanish', '  French', ' Mirandese'],
    correctAnswer: 2,
    image: '<img src=\'images/Portugal.jpg\'>'
  }, {
    country: 'Romania',
    question: 'This Romanian castle was the first European castle entirely lit by electrical current.',
    choices: [' Peles Castle', ' Corvin Castle', ' Săvârșin Royal Castle'],
    correctAnswer: 0,
    image: '<img src=\'images/Romania.jpeg\'>'
  }, {
    country: 'San Marino',
    question: 'San Marino is a 24 square mile country that is surrounded by Italy. Despite the size, San Marino is one of the wealthiest countries in the world. What is the population of this country?',
    choices: [' 32,000', ' 48,000', ' 23,500'],
    correctAnswer: 0,
    image: '<img src=\'images/San-Marino.jpeg\'>'
  }, {
    country: 'Serbia',
    question: 'The Temple of Saint Sava pictured here is in the capital city of Belgrade and is the largest orthodox churches in the world. When was the building completed?',
    choices: [' 1931', ' 1989', ' 1967'],
    correctAnswer: 1,
    image: '<img src=\'images/Serbia.jpg\'>'
  }, {
    country: 'Scotland',
    question: 'Scotland is a land of beautiful landscapes and a rich history. What is the current official animal?',
    choices: [' Lion', ' Stag', ' Unicorn'],
    correctAnswer: 2,
    image: '<img src=\'images/Scotland.jpg\'>'
  }, {
    country: 'Slovakia',
    question: 'Slovakia has a high rate of secondary education completion. What percentage of people in Slovakia have completed secondary education?',
    choices: [' 86%', ' 94%', ' 90%'],
    correctAnswer: 2,
    image: '<img src=\'images/Slovakia.png\'>'
  }, {
    country: 'Slovenia',
    question: 'This church is in the middle of this lake in northwestern Slovenia that shares its name with the town.',
    choices: [' Lake Bled', ' Lake Como', ' Lake Garda'],
    correctAnswer: 0,
    image: '<img src=\'images/Slovenia.jpg\'>'
  }, {
    country: 'Spain',
    question: 'What is the name of this attraction in Barcelona?',
    choices: [' Hill Montjuic', ' Park Güell', ' La Rambla'],
    correctAnswer: 1,
    image: '<img src=\'images/Spain.jpeg\'>'
  }, {
    country: 'Sweden',
    question: 'What is NOT a region in Sweden?',
    choices: [' Götaland', ' Norrland', ' Lapland'],
    correctAnswer: 2,
    image: '<img src=\'images/Sweden.jpg\'>'
  }, {
    country: 'Switzerland',
    question: 'This famous mountain in the Alps strattles Italy and Switzerland.',
    choices: [' Matterhorn', ' Mont Blanc', ' Weisshorn'],
    correctAnswer: 0,
    image: '<img src=\'images/Switzerland.jpg\'>'
  }, {
    country: 'Ukraine',
    question: 'This square in Kieve was destroyed during the riots in February 2014.',
    choices: [' Freedom Square', ' Independence Square', ' Sofiyska Square'],
    correctAnswer: 1,
    image: '<img src=\'images/Ukraine.jpg\'>'
  }, {
    country: 'Vatican City',
    question: 'Vatican City is the smallest country in the world, and many citizens live abroad. How many people have Vatican City citizenship?',
    choices: [' 550', ' 750', ' 600'],
    correctAnswer: 2,
    image: '<img src=\'images/Vatican-City.jpg\'>'
  }];

  // var quiz = $('#quiz');
  var selection;
  var randomNumber = Math.round(Math.random() * 47); //need to change the 2 to the number of questions -1
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
  }


  function updateScore() {
    numCorrect += 100;
    $('.score').html('€ ' + numCorrect);
    if (numCorrect === 500){
      alert('Great job! You leveled up to level 1!');
    }
    else if (numCorrect === 1000){
      alert('Great job! You leveled up to level 2!');
    }
    else if (numCorrect === 1500){
      alert('Great job! You leveled up to level 3!');
    }
    else if (numCorrect === 2000){
        alert('Congratulations! You win!');
        $('#quiz').hide(500);
        $('.score').hide(500);
        $('#win').show();
      }
    }

  // Show quiz section until click the top button
  $('#main-button').click(function() {
    $('#travel').hide(800);
    $('#quiz').show(1000, newQuestion());
  });

  $('#myForm input').on('change', function() {
    selection = ($('input[name="optradio"]:checked', '#myForm').val());
    // console.log('answer is ' + randomQuestion.correctAnswer);
    if (parseInt(selection) === randomQuestion.correctAnswer){
    // $('#feedback').text('You got it right!');
      alert('You are correct!');
    updateScore();
  }
    else {
      // $('#feedback').text("That's wrong. Try again.");
      alert('You are wrong. Try again.');
    }
  });

  $('#next-button').click(function() {
    randomNumber = Math.round(Math.random() * 47);
    randomQuestion = questions[randomNumber];
    $('#quiz').show(1000, newQuestion());
    $('input[name="optradio"]').attr('checked', false);
  });


  // if $('#correctAnswer')
  // if ($('.radio') == randomQuestion.correctAnswer){
  // $('#quiz').show(1000, function(New));
