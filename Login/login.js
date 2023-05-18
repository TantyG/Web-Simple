// async function getLogin() {
//     return fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
          
//           username: 'kminchelle',   
//           password: '0lelplR',
//           // expiresInMins: 60, // optional
//         })
//       })
//       .then(res => res.json())
//       .then(json=>
//         localStorage.setItem("login", JSON.stringify(json.token)));
        
// }

const form = {
    username: document.querySelector("#input-user"),
    password: document.querySelector("#input-pass"),
    submit: document.querySelector("#buton"),
  };
  // let button = form.submit.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   const login = "https://dummyjson.com/auth/login";
  
  //   fetch(login, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: form.username.value,
  //       password: form.password.value,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       localStorage.setItem("login", JSON.stringify(data.token));
  //       var local = localStorage.getItem("login");
  //           if(local !== ""){
  //               window.location.assign(
  //                   "index.html"
  //                 );
  //           }
  //           else{
  //               window.location.assign(
  //                   "Login.html"
  //                 ); 
  //           }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  function signIn(user, password) {
    var userObj = {user: user , password: password};
    var jsonBody = JSON.stringify(userObj);
    
    fetch("https://dummyjson.com/auth/login", {
        method: 'POST',
        headers: {
            "Accept-language": "RU",
            "Content-Type": "application/json"
        },
        body: jsonBody
    })
    .then(response => response.json())
    .then(data => {
      if(data.token){
        localStorage.setItem("login", JSON.stringify(data.token));
          window.location.assign(
            "index.html"
          );
      }
      else {
          
        }
    })
    .catch((err) => {
        console.log(err);
    });
}


  function logout(){
    localStorage.removeItem("login");
    window.location.assign(
      "Login.html"
    );
  }