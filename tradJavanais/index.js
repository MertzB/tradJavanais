/**
  * tradJavanais javascript node module, le but du module est de traduire une phrase en 'javanais simplifié'.
  * @namespace tradJavanais
  */
var tradJavanais = function() {
  this.JAVANAIS_REGEXP = new RegExp('([^aeiouyAEIOUY]+)([aeiouyAEIOUY]{1})|(^[aeiouyAEIOUY])','g');
};

/** Version asynchrone
  * @memberOf tradJavanais
  * @function
  * @name translateAsync
  * @description réalise la transformation du français au javanais simplifié (asynchrone)
  * @param {string} value - chaîne de caractère à traduire
  * @returns {promise} promise - chaîne de caractère javanais
  */
tradJavanais.prototype.translateAsync = function(value) {
  var p1 = new Promise(
    function(resolve, reject) {
      var ret = value.replace(this.JAVANAIS_REGEXP,'$1av$2$3');
      return resolve(ret);
    }
  );
  return p1;
};

/** Version synchrone
  * @memberOf tradJavanais
  * @function
  * @name translateSync
  * @description réalise la transformation du français au javanais simplifié (synchrone)
  * @param {string} value - chaîne de caractère à traduire
  * @returns {string} ret - chaîne de caractère javanais
  */
tradJavanais.prototype.translateSync = function(value) {
  var ret;
  ret = value.replace(this.JAVANAIS_REGEXP,'$1av$2$3');
  return ret;
};

module.exports = new tradJavanais();
