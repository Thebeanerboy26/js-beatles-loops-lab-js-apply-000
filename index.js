function theBeatlesPlay(musicians,instruments) {
  var array = [];
 for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + 'plays' + instruments[i]);
 }
 return array;
}

function johnLennonFacts(array) {
  var results = [];
  var count = 0;
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  while (count < facts.length){
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(num) {
  var array = [];
  
  do{
    array.push("I love the Beatles!")
    num++;
  } 
  while (num < 15);
  return array;
}


