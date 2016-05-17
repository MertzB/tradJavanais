//main.js

var frToJavanais = require('./frToJavanais');

userValue = process.argv[2];

if (!userValue) {
  console.log('merci de renseigner un argument, par exemple :\nnode index.js \"Bonjour monde\"');
  return;
}

console.log(frToJavanais.translateSync(userValue));
