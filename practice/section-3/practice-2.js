'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionB=objectB.value;
  for(var i=0;i<collectionB.length;i++){
    for(var j=0;j<collectionA.length;j++){
      if(collectionA[j].key == collectionB[i]){
        if(collectionA[j].count >= 3){
          var perthree=parseInt(collectionA[j].count/3);
          collectionA[j].count -= perthree;
        }else {
          collectionA[j].count--;
        }
        break;
      }
    }
  }
  return collectionA;
}
