import './scss/main.scss';

console.debug('Started');

async function start(params) {
    return await Promise.resolve(params);
}

start('Ээээ').then(console.log);
