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
      question: 'What is the capital of Austria?',
      choices: ['Salzburg', 'Vienna', 'Linz'],
      correctAnswer: 1,
      image: '<img src=\'images/Austria.jpg\'>'
    },{
      country: 'Germany',
      question: 'When did the Berlin Wall fall?',
      choices: ['1990','1989','1987'],
      correctAnswer: 1,
      image: '<img src=\'images/Germany.jpg\'>'
    },{
      country: 'United Kingdom',
      question: "Using the picture to the right, what does 'Big Ben' refer to?",
      choices: ['The tower', 'The clock', 'The bell of the clock'],
      correctAnswer: 2,
      image: '<img src=\'images/United_Kingdom.jpg\'>'
    }];

    var quiz = $('#quiz');
    var score = 0;

// Show quiz section until click the top button
$('#main-button').click(function(){
  $('#travel').hide(800);
  $('#quiz').show(1000, function(New){
    var randomNumber = Math.round(Math.random()*2);
    var randomQuestion = questions[randomNumber];
    $('#country-name').text(randomQuestion.country);
    $('img').replaceWith(randomQuestion.image);
    $('#country-question').text(randomQuestion.question);
    $('#answer-one').text(randomQuestion.choices[0]);
    $('#answer-two').text(randomQuestion.choices[1]);
    $('#answer-three').text(randomQuestion.choices[2]);
  });
});


// if $('#correctAnswer')



