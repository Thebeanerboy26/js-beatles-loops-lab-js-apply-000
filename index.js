// add solution here

Function theBeatlesPlay(musicians, instruments);{
  var array = [];
 for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + 'plays' + instruments[i]);
 }
 return array;
}

Function johnLennonFacts(facts);{
  var results = [];
  var count = 0;
  while (count < facts.length){
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

Function iLoveTheBeatles(num);{
  var array = [];
  
  do{
    array.push("I love the Beatles!")
    num++;
  } 
  while (num < 15);
  return array;
}