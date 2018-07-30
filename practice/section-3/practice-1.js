'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionB=objectB.value;
  for(var i=0;i<collectionB.length;i++){
    for(var j=0;j<collectionA.length;j++){
      if(collectionA[j].key == collectionB[i]){
        collectionA[j].count --;
        break;
      }
    }
  }
  return collectionA;
}
