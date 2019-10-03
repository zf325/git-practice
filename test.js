//iterator

function createIterator (items) {
    var i = 0;
    return function next() {
        
        var done = i >= items.length;
        var value = items[i];
        i++
        return {
            done,
            value
        }

    }
}

function sayHello (words) {
    console.log(`hello,${words}`);
}
