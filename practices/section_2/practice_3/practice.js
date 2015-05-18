function count_same_elements(collection) {
        //在这里写入代码
        var array = [];

        for(var i = 0; i < collection.length; i++) {
                var exist = false;
                var char = collection[i].length>2 ? collection[i].substring(0, 1) : collection[i];
                var summary = collection[i].length>2 ? parseInt(collection[i].substring(2)) : 1;

                for(var j = 0; j < array.length; j++) {
                        if(array[j].name === char) {
                                array[j].summary = array[j].summary + summary;
                                exist = true;
                        }
                }

                if(!exist) {
                        var temp = {};
                        temp.name = char;
                        temp.summary = summary;
                        array.push(temp);
                }
        }
        return array;
}

module.exports = count_same_elements;
