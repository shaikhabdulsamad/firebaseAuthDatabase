firebase.auth().onAuthStateChanged((user) => {
    if (user) {

      var uid = user.uid;
     
firebase.database().ref(`user/${uid}`).once('value', (data) => {

    let userName = document.getElementById('name')
    let userEmail = document.getElementById('email')

    userName.innerHTML = data.val().username
    userEmail.innerHTML = data.val().email

    

})
    } else {
     window.location = "index.html"
    }
  });

let logout = ()=>{
    firebase.auth().signOut()
    .then(()=>{
        window.location ="login.html"
    })
}

