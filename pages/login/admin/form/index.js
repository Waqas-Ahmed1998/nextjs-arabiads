import React, { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { loggedInUser } from "../../../../recoil/loggedInUser";
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// import { auth } from '../../../../firebase';

function LoginIn() {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const setLoginEmail = useSetRecoilState(loggedInUser);
  const signIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        alert("logged in");
        setLoginEmail(user.email);
        setEmail("");
        setPassword("");
        setLoggedIn(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        alert("user sign out");
        setLoggedIn(false);
        setLoginEmail(null);
      })
      .catch((error) => {
        alert(error);
      });
  };
  // sign in with email and password

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className='max-w-6xl flex py-10  items-center justify-center mx-auto'>
      <form
        action=''
        onSubmit={signIn}
        className=' p-10 flex flex-col space-y-7 border basis-[60%]'
      >
        <label htmlFor=''>Enter Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          required
          placeholder='enter email..'
          className='focus:outline-none px-3 py-1'
        />
        <label htmlFor=''>Enter Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='text'
          required
          placeholder='enter password'
          className='focus:outline-none px-3 py-1'
        />
        <button className='px-5 py-2 bg-blue-400 text-white w-fit hover:bg-gray-400 hover:text-black mx-auto'>
          sign in
        </button>
      </form>
      {loggedIn && (
        <button
          onClick={signOutUser}
          className='px-5 py-2 bg-blue-400 text-white w-fit hover:bg-gray-400 hover:text-black mx-auto'
        >
          sign out
        </button>
      )}
    </div>
  );
}

export default LoginIn;
