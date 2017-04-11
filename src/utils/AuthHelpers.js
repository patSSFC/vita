import { firebaseAuth, ref } from '../config/constants';

// authentication

export function auth(email, password) {
    return firebaseAuth.createUserWithEmailAndPassword(email,password)
        .then(saveUser)
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
};

export function logout() {
    return firebaseAuth.signOut()
};

export function login(email, password) {
    return firebaseAuth.signInWithEmailAndPassword(email, password)
};

export function resetPassword(email) {
    return firebaseAuth.sendPasswordResetEmail(email)
};

// updating user information

export function getCurrentUser() {
    return firebaseAuth.currentUser;
};

export function saveUser(user) {
    return ref.child(`/users/${user.uid}/info`)
        .set({
            email: user.email,
            uid: user.uid,
            first: '',
            last: '',
            username: ''
        })
        .then(() => {
            return user
        })
};
