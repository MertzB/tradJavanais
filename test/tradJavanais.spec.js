var tradJavanais = require('../tradJavanais');
var chai = require('chai');
var expect = chai.expect;

describe('tradJavanais.translateSync(value)', function() {
  it('Sync. traduit Bonjour à Bavonjavour',function() {
      expect(tradJavanais.translateSync('Bonjour')).to.equal('Bavonjavour');
    });
  it('Sync. traduit chante à chavantave',function() {
      expect(tradJavanais.translateSync('chante')).to.equal('chavantave');
    });
  it('Sync. traduit moyen à mavoyen',function() {
      expect(tradJavanais.translateSync('moyen')).to.equal('mavoyen');
    });
  it('Sync. traduit exemple à avexavemplave',function() {
      expect(tradJavanais.translateSync('exemple')).to.equal('avexavemplave');
    });
  it('Sync. traduit au à avau',function() {
      expect(tradJavanais.translateSync('au')).to.equal('avau');
    });
});

describe('tradJavanais.translateAsync(value)', function() {
  it('Async. traduit Bonjour à Bavonjavour',function() {
      tradJavanais.translateAsync('Bonjour').then(function(result) {
        expect(result).to.equal('Bavonjavour');
      });
    });
  it('Async. traduit chante à chavantave',function() {
      tradJavanais.translateAsync('chante').then(function(result) {
        expect(result).to.equal('chavantave');
      });
    });
  it('Async. traduit moyen à mavoyen',function() {
      tradJavanais.translateAsync('moyen').then(function(result) {
        expect(result).to.equal('mavoyen');
      });
    });
  it('Async. traduit exemple à avexavemplave',function() {
      tradJavanais.translateAsync('exemple').then(function(result) {
        expect(result).to.equal('avecavemplave');
      });
    });
  it('Async. traduit au à avau',function() {
      tradJavanais.translateAsync('au').then(function(result) {
        expect(result).to.equal('avau');
      });
    });
});
