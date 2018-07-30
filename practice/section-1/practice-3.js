'use strict';

function collectSameElements(collectionA, objectB) {
  var a=Array.from(new Set(collectionA)); //自身数组去重
  var b=objectB.value;
  var b=Array.from(new Set(b)); //自身数组去重
  var array=a.concat(b);
  var object={};
  var result=[];
  for(var i=0;i<array.length;i++){
	if(object.hasOwnProperty(array[i])){
		object[array[i]]++;
	}else{
		object[array[i]]=0;
	}
  }
  for(var j in object){
	if(object[j]!=0){
		result.push(j);
	}
  }	
  return result;
}
