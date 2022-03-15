import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { adminUsers } from '../recoil/adminUsers';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function Layout({ children }) {
  const router = useRouter();

  const setAuthenticatedUsers = useSetRecoilState(adminUsers);
  try {
    if (router.reload) {
      const getData = async () => {
        try {
          const adminData = [];
          const querySnapshot = await getDocs(collection(db, 'admins'));
          querySnapshot.forEach((doc) => {
            adminData.push({ ...doc.data(), id: doc.id });
          });
          let [{ users }] = adminData;

          setAuthenticatedUsers(users);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <div className='mt-24 xl:mt-0'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
