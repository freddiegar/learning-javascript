console.log('========== var ==========');

// var
// Allow multiple definitions (error?)
// It can be overwrite

var name = 'Jon Doe';
var age = 25;

console.log(name + ': ' + age);

var name = 'JON DOE';
var age = 50;

console.log(name + ': ' + age);

console.log('========== let ==========');

// let
// It can be overwrite but no redeclare as var
// Use context: conditions, loops

let pet = 'Tom';

console.log('Global before -> ' + pet);

if (true) {
    let pet = 'Jerry';

    console.log('Condition -> ' + pet);
}

// let pet = 'Golden'; <- Error
pet = 'Golden';

console.log('Global after -> ' + pet);

console.log('========= const =========');

// const
// Not allow modification after create
// EXCEPT in arrays and objects
// Use context: conditions, loops

const TYPE = 'GLOBAL'

if (true) {
    const TYPE = 'CONDITION'

    console.log('Condition -> ' + TYPE);
}

// TYPE = 'AFTER' <- Error

console.log('Global -> ' + TYPE);

const person = {
    alias: 'freddiegar',
    url: 'https://github.com/freddiegar',
}

console.log('Object -> ' + person);

person.age = '?'

console.log('Object -> ' + person);

const languages = [
    'php',
    'html',
    'css',
    'python',
    'c',
];

console.log('Array -> ' + languages);

languages.push('js?')

console.log('Array -> ' + languages);
