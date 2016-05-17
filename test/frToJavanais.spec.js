var frToJavanais = require('../frToJavanais');
var chai = require('chai');
var expect = chai.expect;

describe('frToJavanais.translateSync(value)', function() {
  it('Sync. traduit Bonjour à Bavonjavour',function() {
      expect(frToJavanais.translateSync('Bonjour')).to.equal('Bavonjavour');
    });
  it('Sync. traduit chante à chavantave',function() {
      expect(frToJavanais.translateSync('chante')).to.equal('chavantave');
    });
  it('Sync. traduit moyen à mavoyen',function() {
      expect(frToJavanais.translateSync('moyen')).to.equal('mavoyen');
    });
  it('Sync. traduit exemple à avexavemplave',function() {
      expect(frToJavanais.translateSync('exemple')).to.equal('avexavemplave');
    });
  it('Sync. traduit au à avau',function() {
      expect(frToJavanais.translateSync('au')).to.equal('avau');
    });
});

describe('frToJavanais.translateAsync(value)', function() {
  it('Async. traduit Bonjour à Bavonjavour',function() {
      frToJavanais.translateAsync('Bonjour').then(function(result) {
        expect(result).to.equal('Bavonjavour');
      });
    });
  it('Async. traduit chante à chavantave',function() {
      frToJavanais.translateAsync('chante').then(function(result) {
        expect(result).to.equal('chavantave');
      });
    });
  it('Async. traduit moyen à mavoyen',function() {
      frToJavanais.translateAsync('moyen').then(function(result) {
        expect(result).to.equal('mavoyen');
      });
    });
  it('Async. traduit exemple à avexavemplave',function() {
      frToJavanais.translateAsync('exemple').then(function(result) {
        expect(result).to.equal('avecavemplave');
      });
    });
  it('Async. traduit au à avau',function() {
      frToJavanais.translateAsync('au').then(function(result) {
        expect(result).to.equal('avau');
      });
    });
});
