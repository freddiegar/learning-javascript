console.log('========= template ===========');

const template = (name) => `Hello from template ${name}`

console.log(template('Freddie'));

const template_extra = (name, surname) => `Hello from template ${name + ' ' + surname}`

console.log(template_extra('Freddie', 'Gar'));
