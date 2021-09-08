import './scss/main.scss';

console.debug('Started');

// test how does it work
async function start(params) {
    return await Promise.resolve(params);
}

start('Ээээ').then(console.log);