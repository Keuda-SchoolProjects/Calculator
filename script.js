
function insert(num) {
  document.querySelector('input').value = document.querySelector('input').value + num
}


function clean() {
  document.querySelector('input').value = ''
}

function back() {
  let exp = document.querySelector('input').value
  document.querySelector('input').value = exp.substring(0, exp.length - 1)
}

function equal() {
  let exp = document.querySelector('input').value
  if (exp) {
    document.querySelector('input').value = eval(exp)
  }
}


document.addEventListener('keypress', e => {
  e.preventDefault()  

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