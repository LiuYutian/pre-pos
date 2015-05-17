function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var array = [];
  var exist = false;

  for(var i = 0; i < collection_a.length; i++){
    for(var j = 0; j < array.length; j++){
        if(array[j].key == collection_a[i].substring(0, 1)){
          if(collection_a[i].length > 2){
              array[j].count = array[j].count
              +parseInt(collection_a[i].substring(collection_a[i].length-1));
          }else{
            array[j].count ++;
          }
          exist = true;
        }
    }

    if(!exist){
      var temp = {};
      if(collection_a[i].length > 2){
        temp.key = collection_a[i].substring(0, 1);
        temp.count = parseInt(collection_a[i].substring(collection_a[i].length-1));
        array.push(temp);
      }else{
        temp.key = collection_a[i];
        temp.count = 1;
        array.push(temp);
        }
      }
      exist = false;
    }

    for(var i  = 0; i < object_b.value.length; i++){
      for(var j = 0; j < array.length; j++){
        if(object_b.value[i] == array[j].key){
          array[j].count = array[j].count - Math.floor(array[j].count/3);
        }
      }
    }
    return array;
}

module.exports = create_updated_collection;
