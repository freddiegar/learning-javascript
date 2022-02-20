console.log('========= objects ===========');

const developer = {
    name: 'Freddie',
    networks: {
        github: 'https://github.com/freddiegar'
    }
}

console.log(developer.name);
console.log(developer.networks.github);

console.log('========= destructuring ===========');

const {name, networks} = developer

console.log(name);
console.log(networks.github);
