'use strict';

function countSameElements(collection) {
  var result=[];
  var object={};
  var object2={};
  for(var i=0;i<collection.length;i++){
    if(object.hasOwnProperty(collection[i])){
      object[collection[i]]++;
    }else{
      if(collection[i].length>1){
        if(object.hasOwnProperty(collection[i][0])){
          object[collection[i][0]] += parseInt(collection[i][2]);
        }else{
          object[collection[i][0]]=parseInt(collection[i][2]);
        }
      }else{
        object[collection[i]]=1;
      }
    }
  }
  for(var j in object){
    object2.key=j;
    object2.count=object[j];
    result.push(object2);
    object2={};
  }
  return result;
}
