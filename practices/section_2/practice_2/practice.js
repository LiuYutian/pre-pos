function count_same_elements(collection) {
  //在这里写入代码
  var array = [];
  var exist = false;

  for(var i = 0; i < collection.length; i++){
    for(var j = 0; j < array.length; j++){
        if(array[j].key == collection[i].substring(0, 1)){
          if(collection[i].length > 2){
              array[j].count = array[j].count
              +parseInt(collection[i].substring(collection[i].length-1));
          }else{
            array[j].count ++;
          }
          exist = true;
        }
    }
    if(!exist){
      var temp = {};
      if(collection[i].length > 2){
        temp.key = collection[i].substring(0, 1);
        temp.count = parseInt(collection[i].substring(collection[i].length-1));
        array.push(temp);
      }else{
        temp.key = collection[i];
        temp.count = 1;
        array.push(temp);
        }
      }
      exist = false;
    }
    return array;
}

module.exports = count_same_elements;
