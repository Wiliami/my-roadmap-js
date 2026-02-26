/*
 * Cria um objeto ZipCode.
 *
 * Formatos aceitos para o CEP são:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * Se o argumento passado para o construtor do ZipCode não atende
 * a um desses padrões uma exceção é lançada.
 */

function ZipCode(zip) {
  zip = new String(zip);
  pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
  if (pattern.test(zip)) {
    // o valor do CEP será a primeira combinação na string
    this.value = zip.match(pattern)[0];
    this.valueOf = function () {
      return this.value;
    };
    this.toString = function () {
      return String(this.value);
    };
  } else {
    throw new ZipCodeFormatException(zip);
  }
}

function ZipCodeFormatException(value) {
  this.value = value;
  this.message = "does not conform to the expected format for a zip code";
  this.toString = function () {
    return this.value + this.message;
  };
}

/*
 * Isso poderia estar em um script que valida dados de endereços
 * para os endereços dos Estados Unidos.
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
  try {
    z = new ZipCode(z);
  } catch (e) {
    if (e instanceof ZipCodeFormatException) {
      return ZIPCODE_INVALID;
    } else {
      return ZIPCODE_UNKNOWN_ERROR;
    }
  }
  return z;
}

// a = verifyZipCode(95060); // retorna 95060
// b = verifyZipCode(9560); // retorna -1
// c = verifyZipCode("a"); // retorna -1
// d = verifyZipCode("95060"); // retorna 95060
// e = verifyZipCode("95060 1234"); // retorna 95060 1234


console.log(verifyZipCode(9560))
