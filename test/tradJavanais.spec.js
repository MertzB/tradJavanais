var tradJavanais = require('../tradJavanais');
var chai = require('chai');
var expect = chai.expect;

describe('tradJavanais.translateToFrSync(value)', function() {
  it('ToFrSync. traduit Bavonjavour à Bonjour',function() {
      expect(tradJavanais.translateToFrSync('Bavonjavour')).to.equal('Bonjour');
    });
  it('ToFrSync. traduit chavantave à chante',function() {
      expect(tradJavanais.translateToFrSync('chavantave')).to.equal('chante');
    });
  it('ToFrSync. traduit mavoyen à moyen',function() {
      expect(tradJavanais.translateToFrSync('mavoyen')).to.equal('moyen');
    });
  it('ToFrSync. traduit avexavemplave à exemple',function() {
      expect(tradJavanais.translateToFrSync('avexavemplave')).to.equal('exemple');
    });
  it('ToFrSync. traduit avau à au',function() {
      expect(tradJavanais.translateToFrSync('avau')).to.equal('au');
    });
});

describe('tradJavanais.translateToFrAsync(value)', function() {
  it('ToFrAsync. traduit Bavonjavour à Bonjour',function() {
      tradJavanais.translateToFrAsync('Bavonjavour').then(function(result) {
        expect(result).to.equal('Bonjour');
      });
    });
  it('ToFrAsync. traduit chavantave à chante',function() {
      tradJavanais.translateToFrAsync('chavantave').then(function(result) {
        expect(result).to.equal('chante');
      });
    });
  it('ToFrAsync. traduit mavoyen à moyen',function() {
      tradJavanais.translateToFrAsync('mavoyen').then(function(result) {
        expect(result).to.equal('moyen');
      });
    });
  it('ToFrAsync. traduit avexavemplave à exemple',function() {
      tradJavanais.translateToFrAsync('avexavemplave').then(function(result) {
        expect(result).to.equal('exemple');
      });
    });
  it('ToFrAsync. traduit avau à au',function() {
      tradJavanais.translateToFrAsync('avau').then(function(result) {
        expect(result).to.equal('au');
      });
    });
});

describe('tradJavanais.translateToJvSync(value)', function() {
  it('ToJvSync. traduit Bonjour à Bavonjavour',function() {
      expect(tradJavanais.translateToJvSync('Bonjour')).to.equal('Bavonjavour');
    });
  it('ToJvSync. traduit chante à chavantave',function() {
      expect(tradJavanais.translateToJvSync('chante')).to.equal('chavantave');
    });
  it('ToJvSync. traduit moyen à mavoyen',function() {
      expect(tradJavanais.translateToJvSync('moyen')).to.equal('mavoyen');
    });
  it('ToJvSync. traduit exemple à avexavemplave',function() {
      expect(tradJavanais.translateToJvSync('exemple')).to.equal('avexavemplave');
    });
  it('ToJvSync. traduit au à avau',function() {
      expect(tradJavanais.translateToJvSync('au')).to.equal('avau');
    });
});

describe('tradJavanais.translateToJvAsync(value)', function() {
  it('ToJvAsync. traduit Bonjour à Bavonjavour',function() {
      tradJavanais.translateToJvAsync('Bonjour').then(function(result) {
        expect(result).to.equal('Bavonjavour');
      });
    });
  it('ToJvAsync. traduit chante à chavantave',function() {
      tradJavanais.translateToJvAsync('chante').then(function(result) {
        expect(result).to.equal('chavantave');
      });
    });
  it('ToJvAsync. traduit moyen à mavoyen',function() {
      tradJavanais.translateToJvAsync('moyen').then(function(result) {
        expect(result).to.equal('mavoyen');
      });
    });
  it('ToJvAsync. traduit exemple à avexavemplave',function() {
      tradJavanais.translateToJvAsync('exemple').then(function(result) {
        expect(result).to.equal('avecavemplave');
      });
    });
  it('ToJvAsync. traduit au à avau',function() {
      tradJavanais.translateToJvAsync('au').then(function(result) {
        expect(result).to.equal('avau');
      });
    });
});
