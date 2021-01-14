const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = (array) => {
//   let tutorials = array
//   console.log(tutorials)
//   let titleCase = tutorials.map(capitalTitle)
//   return titleCase
// }


// function capitalFirstLetter(word){
//   return(word.replace(word[0], word[0].toUpperCase()))

// }

// function capitalTitle(title){
//   let titleElement = title.split(' ').map(capitalFirstLetter)
//   return titleElement.join(' ')

// }


function titleCased (){
  let titleCase = tutorials.map(function(title){
    let titleElement = title.split(' ').map(function(word){
      return(word.replace(word[0], word[0].toUpperCase()))
    })
    return titleElement.join(' ')
  })
  return titleCase

}


