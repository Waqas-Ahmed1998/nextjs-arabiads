import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection, doc, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { db, storage } from "../firebase";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { adminUsers } from "../recoil/adminUsers";
import { loggedInUser } from "../recoil/loggedInUser";

function CaseStudies() {
  const router = useRouter();
  // ***********   Hooks     ****
  const admins = useRecoilValue(adminUsers);
  const logged = useRecoilValue(loggedInUser);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    engagement: "",
    genre: "",
    content: "",
    image: "",
    role: "",
    audience: "",
    engagementRole: "",
    date: Timestamp.now().toDate(),
  });
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  // Image uplaod

  const submitData = async (e) => {
    e.preventDefault();
    // try {
    if (!formData.name || !formData.content || !formData.image) {
      console.log(formData);
      alert("Please fill the required fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/studies/${Date.now()}${formData.image.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef, formData.image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          name: "",
          engagement: "",
          genre: "",
          content: "",
          image: "",
          role: "",
          audience: "",
          engagementRole: "",
        });
        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            const articleRef = collection(db, "studies");

            addDoc(articleRef, {
              name: formData.name,
              engagement: formData.engagement,
              genre: formData.genre,
              content: formData.content,
              image: url,
              role: formData.role,
              audience: formData.audience,
              engagementRole: formData.engagementRole,

              date: Timestamp.now().toDate(),
            });
          })
          .then(() => {
            alert("data uploaded successfuly");
            setProgress(0);
            router.push("/case");
          })
          .catch((err) => console.log(err));
      }
    );
  };
  useEffect(() => {
    if (admins && admins.includes(logged)) {
      return;
    } else {
      router.push("/");
    }
    return () => {};
  }, []);

  return (
    <div>
      {" "}
      <div className='p-10 items-center '>
        <div className='p-4'>
          <form
            className='flex flex-col space-y-3 gap-3 justify-center'
            action=''
            onSubmit={submitData}
          >
            <label className=''>Name</label>
            <input
              className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            ></input>
            <label>Role:</label>
            <input
              className='p-4 focus:outline-none  shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='city'
              value={formData.role}
              required
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            ></input>
            <label>Engagement:</label>
            <input
              className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='facebook Link'
              value={formData.engagement}
              onChange={(e) =>
                setFormData({ ...formData, engagement: e.target.value })
              }
            ></input>
            <label>genre:</label>
            <input
              className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='city'
              value={formData.genre}
              onChange={(e) =>
                setFormData({ ...formData, genre: e.target.value })
              }
            ></input>

            <label>Content:</label>

            <textarea
              className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              value={formData.content}
              name=''
              id=''
              cols='30'
              rows='2'
              required
            ></textarea>
            <label>Audience:</label>
            <input
              className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='city'
              value={formData.audience}
              onChange={(e) =>
                setFormData({ ...formData, audience: e.target.value })
              }
            ></input>
            <label>Engagement Role:</label>
            <input
              className='p-4 focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='city'
              value={formData.engagementRole}
              onChange={(e) =>
                setFormData({ ...formData, engagementRole: e.target.value })
              }
            ></input>

            <label>Uplaod Image</label>
            <input
              onChange={handleImageChange}
              type='file'
              name='image'
              accept='image/*'
              required
            />
            {progress > 0 && (
              <div className=' border border-gray-100 rounded-r-md  '>
                <div
                  className='bg-green-800 h-2 rounded-r-md'
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}

            {progress > 0 && <p>uploading image... {progress}%</p>}

            <button className='px-5 py-2 bg-blue-400 text-white w-fit hover:bg-gray-400 hover:text-black mx-auto'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
