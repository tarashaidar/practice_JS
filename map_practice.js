{
    let myMap = new Map();
    myMap.set('a','string');
    myMap.set(1,'number');
    myMap.set(true,'bolean');
    myMap.set([1,2,3],'array');
    myMap.set({a:1},'object');
    myMap.has('a');
    myMap.size;
    myMap.get(1);
    myMap.forEach((item) => console.log(item))
    myMap.clear();
}


