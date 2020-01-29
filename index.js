Function theBeatlesPlay(musicians,instruments) {
  var Array = [];
 for (var i = 0; i < musicians.length; i++){
    Array.push(musicians[i] + 'plays' + instruments[i]);
 }
 return Array;
}

Function johnLennonFacts(Array) {
  var results = [];
  var count = 0;
  while (count < facts.length){
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

Function iLoveTheBeatles(num) {
  var Array = [];
  
  do{
    Array.push("I love the Beatles!")
    num++;
  } 
  while (num < 15);
  return Array;
}
