const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQPU0z6Mqc78HVyK3eBfz1cTeBqEC77e4",
    authDomain: "linktree-fe680.firebaseapp.com",
    projectId: "linktree-fe680",
    storageBucket: "linktree-fe680.appspot.com",
    messagingSenderId: "819201236096",
    appId: "1:819201236096:web:c3c0d60a628fc615d81a65",
    measurementId: "G-NTT4JP08KC"
 });

 const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err)=> {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    
    })
}
const login = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
        
    })
    .catch((err)=> {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    
    })
}



// DataBase


    // const saveData = () => {
    //     const email = document.getElementById('email').value
    //      const password = document.getElementById('password').value

    //      db.collection('users')
    //         .add({
    //             email: email,
    //             password: password
    //         })
    //         .then((docRef) => {
    //             console.log("Document written with ID: ", docRef.id);


    //         })
    //         .catch((error) => {
    //             console.log("error adding document: ", error);
    //         });
    // }

    // const readData = () => {
    //     db.collection('users')
    //     .get()
    //     .then((document) => {
    //         console.log(data.docs.map((item) => {
    //             return{...item.data(), id: item.id}
    //         }))
    //     })
    // }
    
    
    
