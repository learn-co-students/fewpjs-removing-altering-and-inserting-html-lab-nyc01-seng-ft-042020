// Write your code here!
const { body } = document;
const main = document.querySelector('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';
body.append(newHeader);
console.log(document.body);
