import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { adminUsers } from "../recoil/adminUsers";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import AOS from "aos";
import "aos/dist/aos.css";
import { headerImage, headerImageRecoil } from "../recoil/headerImageRecoil";

// const [image, changeImage] = useRecoilState(headerImage);

function Layout({ children }) {
  const router = useRouter();
  // console.log("heallo");
  const imageValue = useRecoilValue(headerImageRecoil);
  const setValue = useSetRecoilState(headerImageRecoil);

  const setAuthenticatedUsers = useSetRecoilState(adminUsers);
  try {
    if (router.reload) {
      const getData = async () => {
        try {
          const adminData = [];
          const querySnapshot = await getDocs(collection(db, "admins"));
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

  useEffect(() => {
    AOS.init({
      once: true,
    });

    function first() {
      setValue(!imageValue);
    }

    async function delay(ms) {
      // return await for better async stack trace support in case of errors.
      return await new Promise((resolve) => setTimeout(resolve, ms));
    }
    let run = async () => {
      await delay(50000);
      first();
    };
    run();

    return () => {};
  }, [imageValue]);
  return (
    <div className='mt-24 xl:mt-0'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
