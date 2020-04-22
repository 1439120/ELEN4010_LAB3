/** ***********   These are my students ****************** */
let students = [{ name: 'Kwezi', studentNumber: 453528 },
  { name: 'Pieter', studentNumber: 454345 },
  { name: 'Jade', studentNumber: 678345 },
  { name: 'Kiren', studentNumber: 567893 },
  { name: 'Nkosana', studentNumber: 1439120 }]

/** *********** First button for Lists */
const List_students = document.getElementById('addButton')
List_students.innerHTML = 'List'

/** ***********  button for Erasing */
const remove_all = document.createElement('button')
remove_all.innerHTML = 'Erase'

/** ****************Button that displays students **********/

function myfunction () {
  const my_students = document.getElementById('studentList')
  const paragraph = document.createElement('p')

  students.forEach(function (item) {
    // Each student should have a seperate button
    const student_button = document.createElement('button')
    student_button.innerHTML = 'Edit'

    const text = document.createTextNode(' Name:  ' + item.name + ' - student no: ' + item.studentNumber)
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
      paragraph.parentNode.removeChild(paragraph)
      myfunction()
    }

    paragraph.appendChild(student_button)
    paragraph.appendChild(text)
    paragraph.appendChild(document.createElement('br'))
  })
  my_students.appendChild(paragraph)

  /** ******************* Delete List ***** */
  if (students.length != 0) {
    remove_all.onclick = function () {
      students = []
      remove_all.parentNode.removeChild(remove_all)
      paragraph.parentNode.removeChild(paragraph)
    }
    document.body.appendChild(remove_all)
  }
}
// }, true)
var yes = true
function all_students () {
  if (!yes) return
  yes = false
  myfunction()
}

List_students.onclick = all_students
