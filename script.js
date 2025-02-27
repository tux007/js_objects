let myObject = {
    'name': 'Tom',
    'age': 48,
    'logJob': function (number) {
        console.log('Developer' + number);
    },
    'good_guy': true,
};

myObject.logJob(999);
//console.log(myObject);
console.table(myObject);