console.log('Starting app')

setTimeout(() => console.log('Inside timeout 1'), 0);
setTimeout(() => console.log('Inside timeout 2'), 2000);
setTimeout(() => console.log('Inside timeout 3'), 0);

console.log('Ending app')
