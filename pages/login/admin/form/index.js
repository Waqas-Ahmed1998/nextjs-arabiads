import React, { useEffect, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { loggedInUser } from '../../../../recoil/loggedInUser';

function LoginIn() {
  const [email, setEmail] = useState('');
  const setLoginEmail = useSetRecoilState(loggedInUser);

  const submitData = (e) => {
    e.preventDefault();
    setLoginEmail(email);
    setEmail('');
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className='max-w-6xl flex py-10  items-center justify-center mx-auto'>
      <form
        action=''
        onSubmit={submitData}
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
        <button className='px-5 py-2 bg-blue-400 text-white w-fit hover:bg-gray-400 hover:text-black mx-auto'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginIn;
