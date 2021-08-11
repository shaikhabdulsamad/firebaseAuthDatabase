let signup = () => {
  let email = document.getElementById('email')
  let password = document.getElementById('password')
  let name = document.getElementById('name')
  let number = document.getElementById('number')
  // let btn = document.getElementById('btnText')
  let loader = document.getElementById('loader')
  let text = document.getElementById('text')
  loader.style.display = "block"
  text.style.display = "none"

  // let redAlert = document.getElementById('redAlert')
  // let greenAlert = document.getElementById('greenAlert')

  // btn.innerText = loader

  let data = {
    name: name.value,
    number: number.value,
    email: email.value,
    password: password.value
  }

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // console.log(user)


      firebase.database().ref(`user/${user.uid}`).set(data)
        .then((res) => {
          loader.style.display = "none"
          text.style.display = "block"

          // greenAlert.style.display = "block"

          name.value = ""
          number.value = ""
          email.value = ""
          password.value = ""

          setTimeout(() => {
            window.location = "login.html"
          }, 1000)
        })


    })
    .catch((error) => {

      var errorMessage = error.message;
      console.log(errorMessage)
    })
    .then((res) => {
      loader.style.display = "none"
      text.style.display = "block"

      // redAlert.style.display = "block"
    
    
    })


}


let signin = () => {
  let email1 = document.getElementById('email1')
  let password1 = document.getElementById('password1')
  let loader = document.getElementById('loader')
  let text = document.getElementById('text')
  loader.style.display = "block"
  text.style.display = "none"

  // let redAlert = document.getElementById('redAlert')
  // let greenAlert = document.getElementById('greenAlert')


  firebase.auth().signInWithEmailAndPassword(email1.value, password1.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // console.log(user)

      firebase.database().ref(`user/${user.uid}`).once('value', (data) => {

        console.log(data.val())
      })
        .then((res) => {
          loader.style.display = "none"
          text.style.display = "block"
          // greenAlert.style.display = "block"

          email1.value = ""
          password1.value = ""

          setTimeout(() => {
            window.location = "https://quiz-app-abdul-samad.netlify.app/"
          }, 500)
        })
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage)
    })
    .then((res) => {
      loader.style.display = "none"
      text.style.display = "block"
      // redAlert.style.display = "block"
    })
}