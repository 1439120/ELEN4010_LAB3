const button = document.getElementById('addButton')

button.addEventListener('click', function () {
  const paragraph = document.createElement('p') // Create <p> element
  const text = document.createTextNode('This is a student') // Create text node
  paragraph.appendChild(text) // Append the text to <p>
  document.body.appendChild(paragraph) // Append <p> to <body>
}, false)

button.addEventListener('click', function () {
  const header = document.createElement('h5')
  header.title = 'Heading for adding a link'

  const p = document.createElement('p')
  const mssg = document.createTextNode('Go to this link to access dummy ')
  p.appendChild(mssg)

  const a = document.createElement('a')
  const link = document.createTextNode('Link dummy')
  a.appendChild(link)
  a.href = 'dummy.html'

  p.appendChild(a)
  document.body.appendChild(p)
}, true)

const p = document.createElement('p')
const mssg = document.createTextNode('Message before u press the button button')
p.appendChild(mssg)
document.body.appendChild(p)
