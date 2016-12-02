// var hand = ['1d', '2h', '2s', '10c', '3c'];

var valueArrayF = function(hand) {
  var valueArray = hand.map(function(value) {
    var item = parseInt(value.slice(0, value.length - 1));
    if(item === 1) {
      item = 14;
    }
    return item;
  });
  return valueArray;
};

var suiteArrayF = function(hand) {
  var suiteArray = hand.map(function(value){
    return value.slice(value.length - 1);
  });
  return suiteArray;
};

var sortedValueArrayF = function(valueArray) {
  return valueArray.sort(function(a, b) {
    return a > b;
  });
};

var isFlush = function(suiteArray) {
  for(var i = 0; i < suiteArray.length - 1; i++) {
    if(suiteArray[i] !== suiteArray[i + 1]) {
      return false;
    }    
  }
  return true;
}

var isStraight = function(sortedValueArray) {
  for(var i = 0; i < sortedValueArray.length - 1; i++) {
    if(sortedValueArray[i] !== sortedValueArray[i + 1] - 1) {
      return false;
    }
  }
  return true;
}

var isStraightRoyalFlush = function(sortedValueArray, suiteArray) {
  if(!isFlush(suiteArray) || sortedValueArray[0] !== 10) {
    return false;
  }
  return isStraight(sortedValueArray);
}

var isStraightFlush = function(sortedValueArray, suiteArray) {
  if(!isFlush(suiteArray)) {
    return false;
  }
  return isStraight(sortedValueArray);
}

var nOfAKind = function(sortedValueArray) {
  var nOfAKindObj = {};
  for(var i = 0; i < sortedValueArray.length - 1; i++) {
    if(sortedValueArray[i] === sortedValueArray[i + 1]) {
      if(!nOfAKindObj[sortedValueArray[i]]) {
        nOfAKindObj[sortedValueArray[i]] = 2;
      }
      else {
        nOfAKindObj[sortedValueArray[i]]++; 
      }
    }
  }
  return nOfAKindObj;
};

var fourOfAKind = function(sortedValueArray) {
  nOfAKindObj = nOfAKind(sortedValueArray);
  for(var key in nOfAKindObj) {
    if(nOfAKindObj[key] === 4) {
      return true;
    }
  }
  return false;
};

var twoAndThreeOfAKind = function(sortedValueArray) {
  var count = 0;
  nOfAKindObj = nOfAKind(sortedValueArray);
  for(var key in nOfAKindObj) {
    if(nOfAKindObj[key] === 3) {
      count += 3;
    }
    if(nOfAKindObj[key] === 2) {
      count += 2;
    }
  }
  return count === 5 ? true : false;
};

var threeOfAKind = function(sortedValueArray) {
  nOfAKindObj = nOfAKind(sortedValueArray);
  for(var key in nOfAKindObj) {
    if(nOfAKindObj[key] === 3) {
      return true;
    }
  }
  return false;
};

var twoOfAKind = function(sortedValueArray) {
  nOfAKindObj = nOfAKind(sortedValueArray);
  for(var key in nOfAKindObj) {
    if(nOfAKindObj[key] === 2) {
      return true;
    }
  }
  return false;
};

var twoAndTwoOfAKind = function(sortedValueArray) {
  var count = 0;
  nOfAKindObj = nOfAKind(sortedValueArray);
  for(var key in nOfAKindObj) {
    if(nOfAKindObj[key] === 2) {
      count += 2;
    }
  }
  return count === 4 ? true : false;
};

var highestCard = function(sortedValueArray) {
  var cardValue = sortedValueArray[sortedValueArray.length - 1];
  if(cardValue === 11) {
    cardValue = 'J';
  }
  if(cardValue === 12) {
    cardValue = 'Q';
  }
  if(cardValue === 13) {
    cardValue = 'K';
  }
  if(cardValue === 14) {
    cardValue = 'A';
  }
  return cardValue;
};

var result = function(hand) {
  if(!hand) {
    var resultString = "";
    var hand = [];
    for(var i = 0; i < 5; i++) {
      hand[i] = document.getElementById('card-number' + i).value
    }
  }
  var valueArray = valueArrayF(hand);
  var suiteArray = suiteArrayF(hand);
  var sortedValueArray = sortedValueArrayF(valueArray);

  if(isStraightRoyalFlush(sortedValueArray, suiteArray)) {
    resultString = "Hand is: straight Royal flush";
  }
  else if(isStraightFlush(sortedValueArray, suiteArray)) {
    resultString = "Hand is: straight flush";
  }
  else if(fourOfAKind(sortedValueArray)) {
    resultString = "Hand is: Four of a Kind";
  }
  else if(twoAndThreeOfAKind(sortedValueArray)) {
    resultString = "Hand is: Full House";
  }
  else if(isFlush(suiteArray)) {
    resultString = "Hand is: Flush";
  }
  else if(isStraight(sortedValueArray)) {
    resultString = "Hand is: Straight";
  }
  else if(threeOfAKind(sortedValueArray)) {
    resultString = "Hand is: Three of a Kind";
  }
  else if(twoAndTwoOfAKind(sortedValueArray)) {
    resultString = "Hand is: Two pairs";
  }
  else if(twoOfAKind(sortedValueArray)) {
    resultString = "Hand is: One pair";
  }
  else { 
    resultString = "Hand is: Highest card is " + highestCard(sortedValueArray) 
  }
  if(!arguments[0]){
    document.getElementById('result').innerHTML = resultString;
  }
  return resultString;
};


// module.exports = { valueArrayF, suiteArrayF, sortedValueArrayF, isFlush, isStraight, isStraightRoyalFlush, isStraightFlush, nOfAKind, fourOfAKind, twoAndThreeOfAKind, threeOfAKind, twoAndTwoOfAKind, twoOfAKind, highestCard, result
// };
