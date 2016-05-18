/**
  * tradJavanais javascript node module, le but du module est de traduire une phrase en 'javanais simplifié'.
  * @namespace tradJavanais
  */
var tradJavanais = function() {
  this.TO_JAVANAIS_REGEXP = new RegExp('([^aeiouyAEIOUY]+)([aeiouyAEIOUY])|(^[aeiouyAEIOUY])','g');
  this.TO_FRANCAIS_REGEXP = new RegExp('([^aeiouyAEIOUY])av([aeiouyAEIOUY])|^av([aeiouyAEIOUY])','g')  
};

/** Version asynchrone
  * @memberOf tradJavanais
  * @function
  * @name translateToJvAsync
  * @description réalise la transformation du français au javanais simplifié (asynchrone)
  * @param {string} value - chaîne de caractère à traduire
  * @returns {promise} promise - chaîne de caractère javanais
  */
tradJavanais.prototype.translateToJvAsync = function(value) {
  var p1 = new Promise(
    function(resolve, reject) {
      var ret = value.replace(this.TO_JAVANAIS_REGEXP,'$1av$2$3');
      return resolve(ret);
    }
  );
  return p1;
};

/** Version asynchrone
  * @memberOf tradJavanais
  * @function
  * @name translateToFrAsync
  * @description réalise la transformation du javanais simplifié au français (asynchrone)
  * @param {string} value - chaîne de caractère à traduire
  * @returns {promise} promise - chaîne de caractère en français
  */
tradJavanais.prototype.translateToFrAsync = function(value) {
  var p1 = new Promise(
    function(resolve, reject) {
      var ret = value.replace(this.TO_FRANCAIS_REGEXP,'$1$2$3');
      return resolve(ret);
    }
  );
  return p1;
};

/** Version synchrone
  * @memberOf tradJavanais
  * @function
  * @name translateToJvSync
  * @description réalise la transformation du français au javanais simplifié (synchrone)
  * @param {string} value - chaîne de caractère à traduire
  * @returns {string} ret - chaîne de caractère javanais
  */
tradJavanais.prototype.translateToJvSync = function(value) {
  var ret;
  ret = value.replace(this.TO_JAVANAIS_REGEXP,'$1av$2$3');
  return ret;
};

/** Version synchrone
  * @memberOf tradJavanais
  * @function
  * @name translateToFrSync
  * @description réalise la transformation du javanais simplifié au français (synchrone)
  * @param {string} value - chaîne de caractère à traduire
  * @returns {string} ret - chaîne de caractère en français
  */
tradJavanais.prototype.translateToFrSync = function(value) {
  var ret;
  ret = value.replace(this.TO_FRANCAIS_REGEXP,'$1$2$3');
  return ret;
}

module.exports = new tradJavanais();
