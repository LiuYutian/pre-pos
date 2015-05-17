function count_same_elements(collection) {
  //在这里写入代码
  var array = [];
  var exist = false;  // 定义标志：是否找到

  for(var i = 0; i < collection.length; i++){
    for(var j = 0; j < array.length; j++){  
        if(array[j].key == collection[i]){  // 判断是否找到
          array[j].count ++;  // 找到count++
          exist = true; // 标志为找到
        }
    }
    if(!exist){   // 找不到，创建
        var temp = {};
        temp.key = collection[i];
        temp.count = 1;
        array.push(temp);
      }
      exist = false;    // 默认找不到
    }
    return array;
}

module.exports = count_same_elements;
