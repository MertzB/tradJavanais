//main.js

var tradJavanais = require('./tradJavanais');

args = process.argv;
option = args[2];
phrase = args[3];

if ((option === '-fr' && !phrase) ||
   (option === '-jv' && !phrase)) {
  console.log(['Syntaxe : node index.js [option] [argument]',
                '\n*\t-fr\ttraduit le javanais simplifié au francais',
                '\n*\t-jv\ttraduit le francais au javanais simplifié',
                '\n*\t--test\t teste le dictionnaire de valeurs dans le dossier ressources'].join(''));
  return;
}

switch (option) {
  case '-fr':
    console.log(tradJavanais.translateToFrSync(phrase));
    break;
  case '-jv':
    console.log(tradJavanais.translateToJvSync(phrase));
    break;
  case '--test':
    _testWithDic();
    break;
}

function _testWithDic() {

  var lineReader = require('line-reader');
  var count = {};
  count.error = 0;
  count.total = 0;

  lineReader.eachLine('ressources/scrabble.txt', function(line, last) {
    if (line !== tradJavanais.translateToFrSync(tradJavanais.translateToJvSync(line))) {
      count.error++;
    }
    count.total++;
    if (last) {
      console.log(count.error / count.total + '% d\'erreurs\n',count.total,'mots testés\n',count.error,'erreurs rencontrés');
    }
  });
}
