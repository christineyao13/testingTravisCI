'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result=[];
  var object={};
  var object2={};
  for(var i=0;i<collectionA.length;i++){
    if(object.hasOwnProperty(collectionA[i])){
      object[collectionA[i]]++;
    }else{
      object[collectionA[i]]=1;
    }
  }
  for(var j in object){
    object2.key=j;
    object2.count=object[j];
    result.push(object2);
    object2={};
  }
  var collectionB=objectB.value;
  for(var i=0;i<collectionB.length;i++){
    for(var j=0;j<result.length;j++){
      if(result[j].key == collectionB[i]){
        if(result[j].count >= 3){
          var perthree=parseInt(result[j].count/3);
          result[j].count -= perthree;
        }else {
          result[j].count--;
        }
        break;
      }
    }
  }
  return result;
}
