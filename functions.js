console.log('========== normal ==========');

function hi(name) {
    return 'Hi! ' + name;
}

console.log(hi('Freddie'));

console.log('========== arrow ==========');

const hello = (name) => {
    return 'Hello! ' + name;
}

console.log(hello('Freddie'));

console.log('======= arrow sugar ========');

const yeah = () => 'Yeah!'

console.log(yeah());

const bye = name => 'Bye... ' + name

console.log(bye('Freddie'));

