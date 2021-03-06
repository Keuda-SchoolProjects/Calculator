/* Ryhmätyön 'Nelilaskin' kommentoituna script.js -osuus on riittävä koodin ymmärtämiseksi.
Osissa index.html ja style.css lähinnä säädellään laskimen ulkoasua HTML-standardin mukaisesti
Ryhmätyöprojektin tekivät Roman Seveljov, Jukka Jokinen ja Ilkka Jäppinen / KEUDA SETI19.

Toimintalogiikka perustuu aritmeettisen lausekkeen kokoamiseen näppäilyistä ja lopputuloksen
'laskemiseen' normaalitoimintoihin perustuen. Laskutoimitusta voidaan jatkaa välituloksen pohjalta. */

/* Lauseketta koostetaan näppäily kerrallaan liittämällä merkkijonon loppuun muuttujan num arvo */
function insert(num) {
  document.querySelector('input').value = document.querySelector('input').value + num
}

/* Alku- (ja mahdollisesti tarvittava väli-) initialisointi (alla) */
function clean() {
  document.querySelector('input').value = ''
}

/* Virhelyönnin peruuttamista varten on function.back(); joka poistaa viimeksi näppäillyn merkin */
function back() {
  let exp = document.querySelector('input').value
  document.querySelector('input').value = exp.substring(0, exp.length - 1)
}

/* Yhtä kuin -merkin syöttämisen jälkeen toimintaketju muuttuu, eli laskennan lopputulos ilmoitetaan */
function equal() {
  let exp = document.querySelector('input').value
  if (exp) {
    document.querySelector('input').value = eval(exp)
  }
}
/* Laskentaa voidaan jatkaa näppäilemällä merkkejä tai 'puhtaalta pöydältä' näppäilemällä C */

document.addEventListener('keypress', e => {
  e.preventDefault()  

  /* Näiden ASCII-koodien avulla näppäilyt viedään laskentajonoon. */
  if (e.keyCode === 48) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 49) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 50) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 51) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 52) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 53) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 54) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 55) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 56) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 57) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 46) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 43) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 45) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 42) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 47) {
    document.querySelector('input').value = document.querySelector('input').value + e.key
  } else if (e.keyCode === 13) {
    equal()
  }

})