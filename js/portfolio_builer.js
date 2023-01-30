const getState = () => {
  const $ = (element) => {
    return document.getElementById(element).value
  }

  const state = {
    name: $('name'),
    address: $('address'),
    phone: $('phone'),
    email: $('email'),
    about: $('about'),
    career: $('career'),
    education: $('education'),
    job1: {
      date: {
        start: $('job-1__start'),
        end: $('job-1__end')
      },
      details: $('job-1__details')
    },
    job2: {
      date: {
        start: $('job-2__start'),
        end: $('job-2__end')
      },
      details: $('job-2__details')
    },
    job3: {
      date: {
        start: $('job-3__start'),
        end: $('job-3__end')
      },
      details: $('job-3__details')
    },
    references: $('references')
  }
  return state
}

const buildResume = (state) => {
  const $ = (value) => {
    document.write(value)
  }
    const createGroup = (left, right) => {
    $('<div class="resume-group">')
    $('<div class="left-col">')
    $('<p>' + left + '</p>')
    $('</div>')
    $('<div class="right-col">')
    $('<p>' + right + '</p>')
    $('</div>')
    $('</div>')
  }

  document.open()
  $('<html><head>')
  $('<title>' + state.name + "'s Resume </title>")
  $('<style>' + styleText + '</style>')
  $('</head><body><div class="resume">')
  $('<h1>' + state.name + '</h1>')
  $('<p>' + state.email + '</p>')
  $('<p>' + state.phone + '</p>')
  $('<p>' + state.address + '</p>')
  $('<div class="line-break"></div>')
  createGroup('ABOUT ME', state.about)
  createGroup("CAREER OBJECTIVES", state.career)
  createGroup('EDUCATION', state.education)
  createGroup('EMPLOYMENT EXPERIENCE', '')
  createGroup(state.job1.date.start + ' to ' + state.job1.date.end, state.job1.details)
  createGroup(state.job2.date.start + ' to ' + state.job2.date.end, state.job2.details)
  createGroup(state.job3.date.start + ' to ' + state.job3.date.end, state.job3.details)
  createGroup('REFERENCES', state.references)
  $('</div>')
  $('<div class="instructions">Right click the page and "Save As..." to make a copy of this resume</div>')
  $('</body></html>')
  document.close()
}



const checkName = () => {
  const name = document.getElementById('name')
  const name_error = document.getElementById('name__error')
  const isValid = !!name.value
  if (!isValid) {
    name.classList.add("error__input")
    name_error.style.display = "block"
    name_error.innerHTML = "The name field is required"
    console.log("error")
  } else {
    name.classList.remove("error__input")
    name_error.style.display = "none"
  }
  return isValid
}

const checkEmail = () => {
  const email = document.getElementById('email')
  const email_error = document.getElementById('email__error')
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const isValid = emailRegex.test(String(email.value).toLowerCase())
  if (!email.value) {
    email.classList.add("error__input")
    email_error.style.display = "block"
    email_error.innerHTML = "The email field is required"
  } else {
    if (!isValid) {
      email.classList.add("error__input")
      email_error.style.display = "block"
      email_error.innerHTML = "The email entered is invalid"
    } else {
      email.classList.remove("error__input")
      email_error.style.display = "none"
    }
  }
  return isValid
}

const checkValidity = () => {
  const nameIsValid = checkName()
  const emailIsValid = checkEmail()
  if (!nameIsValid) {
    location.hash = "#name"
  } else if (!emailIsValid) {
    location.hash = "#email"
  }
  return nameIsValid && emailIsValid
}

document.getElementById('create-resume').addEventListener("click", (e) => {
  e.preventDefault()
  const isValid = checkValidity()
  if (isValid) buildResume(getState())
})

document.getElementById('name').addEventListener('blur', checkName)

document.getElementById('email').addEventListener('blur', checkEmail)