import React, { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { loggedInUser } from "../../../../recoil/loggedInUser";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { signInUser } from "../../../../recoil/signInUser";
import Head from "next/head";
import { db } from "../../../../firebase";

// import { auth } from '../../../../firebase';

function SignIn() {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const newUser = useSetRecoilState(signInUser);
  const setLoginEmail = useSetRecoilState(loggedInUser);

  const createUser = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user);
        alert("User Created");
        const articleRef = collection(db, "users");
        // addDoc(articleRef, {
        //   email,
        // }).then(() => {
        //   return;
        // });
        setLoginEmail(user.email);
        newUser(user.email);
        setEmail("");
        setPassword("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error);
      });
  };

  // sign in with email and password

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className='max-w-6xl flex py-10  items-center justify-center mx-auto'>
      <Head>
        <title>Influencers-Arabiads</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <form
        action=''
        onSubmit={createUser}
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
    </div>
  );
}

export default SignIn;
