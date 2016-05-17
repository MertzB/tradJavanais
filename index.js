//main.js

var tradJavanais = require('./frToJavanais');

userValue = process.argv[2];

if (!userValue) {
  console.log('merci de renseigner un argument, par exemple :\nnode index.js \"Bonjour monde\"');
  return;
}

console.log(tradJavanais.translateSync(userValue));
