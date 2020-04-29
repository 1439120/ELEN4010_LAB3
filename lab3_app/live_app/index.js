/** ***********   These are my students ****************** */
'use strict'

const electiveOne = { courseCode: 'ELEN4010', yearOffered: 4 }
const electiveTwo = { courseCode: 'ELEN4001', yearOffered: 4 }
const electiveThree = { courseCode: 'ELEN4020', yearOffered: 4 }
const electiveFour = { courseCode: 'ELEN4017', yearOffered: 4 }

var students = [{ name: 'Bonga', studentNumber: 453528, yearOfStudy: 4, electives: [electiveOne, electiveTwo, electiveThree] },
  { name: 'Pieter', studentNumber: 454345, yearOfStudy: 3, electives: [electiveOne, electiveTwo, electiveFour] },
  { name: 'Jade', studentNumber: 678345, yearOfStudy: 4, electives: [electiveTwo, electiveThree, electiveFour] },
  { name: 'Kiren', studentNumber: 567893, yearOfStudy: 4, electives: [electiveOne, electiveTwo, electiveThree] }]

/*****************Selection choices *********************** */
let filter_choice = document.getElementById('mySelect')
let option1 = document.createElement('option')
let option2 = document.createElement('option')
option1.value = 'filter by name'
option1.innerHTML = 'By name'
option2.value = 'filter by student number'
option2.innerHTML = "By student number"
filter_choice.appendChild(option1)
filter_choice.appendChild(option2)
/** *********** Button for adding students */
const List_students = document.getElementById('add-student')

/** ************* This is my function for displaying students ********/
function display () {
  const my_students = document.getElementById('students')
  const paragraph = document.createElement('p')
  // paragraph.parentNode.removeChild(paragraph)

  students.forEach(function (item) {
    // Each student should have a seperate button
    const student_button = document.createElement('button')
    student_button.innerHTML = 'Edit'

    const text = document.createTextNode(' Name: ' + item.name + ' - student no: ' + item.studentNumber +
    ' - YOS: ' + item.yearOfStudy)
    // Onclick button
    student_button.onclick = function () {
      const new_name = prompt('Write new name of student')
      if (new_name.length != null) {
        item.name = new_name
      }
      const new_std_no = prompt('Write new student number')
      if (new_std_no != null && !isNaN(new_std_no)) {
        item.studentNumber = new_std_no
      }
      display()
    }

    paragraph.appendChild(student_button)
    paragraph.appendChild(text)
    paragraph.appendChild(document.createElement('br'))
  })
  my_students.replaceChild(paragraph, my_students.childNodes[0])
}

/** ***********************I want to implement my filter function **********/
function filter_by_name (x) {
  for (let index = 0; index < students.length; index++) {
    if (!(x === students[index].name.slice(0, x.length))) {
      // students[index].name = students[index].name + x
      students[index] = students[students.length - 1]
      students.pop()
      index--
    }
  }
}

function filter_by_std_no (x) {
  if (isNaN(x) || x === null) return

  for (let index = 0; index < students.length; index++) {
    const num = students[index].studentNumber
    if (!(Math.floor(num / Math.pow(10, Math.floor(Math.log10(num) + 1) - x.length)) / x === 1)) {
      // students[index].studentNumber = students[index].studentNumber + num.length
      students[index] = students[students.length - 1]
      students.pop()
      index--
    }
  }
}

document.querySelector('#search-text').addEventListener('input', function (e) {
  const x = document.getElementById('search-text').value
  if(filter_choice.value === option1.value)filter_by_name (x)
  
  if(filter_choice.value === option2.value)filter_by_std_no(x)
  display()
})

/** ********************* Now im adding students ************** */
List_students.addEventListener('click', function () {
  const details = document.getElementById('new-student-text')
  var new_stud = students.slice(1, 1)
  new_stud.name = details.value
  new_stud.studentNumber = prompt('Student number of new person')
  new_stud.yearOfStudy = 4
  students.push(new_stud)
  display()
}, false)
display()
