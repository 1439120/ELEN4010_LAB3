function setCookie (cname, cvalue) {
  document.cookie = cname + '=' + cvalue + ';expires=Thu,28 Dec 2020 23:59:00 UTC; path=/'
}

function getCookie (cname) {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function checkCookie () {
  var user = getCookie('username')
  if (user != '') {
    const x = document.getElementById('person')
    const para = document.createElement('p')

    const mssg = document.createTextNode('Hello ' + user)

    para.appendChild(mssg)
    x.appendChild(para)
  } else {
    user = prompt('Please enter your name:', '')
    if (user != '' && user != null) {
      setCookie('username', user)
    }
  }
}
