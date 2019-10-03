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

console.log('iterator')

console.log('test')

console.log(new Date())