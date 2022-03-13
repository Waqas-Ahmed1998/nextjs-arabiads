import React from 'react';

import { useState, useEffect } from 'react';
import { addDoc, collection, doc, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
// import { db, storage } from '../../firebase';
import { db, storage } from '../firebase';
import { useRouter } from 'next/router';

function TalentForm() {
  const router = useRouter();
  // ***********   Hooks     ****

  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    tournaments: [''],
    liquipediaLink: '',
    youtubeLink: '',
    image: '',
    facebookLink: '',
    instagramLink: '',
    twitchLink: '',
    twitterLink: '',
    role: '',
    date: Timestamp.now().toDate(),
  });
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  // Image uplaod

  const submitData = async (e) => {
    e.preventDefault();
    // try {
    if (!formData.name || !formData.role || !formData.image) {
      console.log(formData);
      alert('Please fill the required fields');
      return;
    }

    const storageRef = ref(
      storage,
      `/arabiads/${Date.now()}${formData.image.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef, formData.image);
    uploadImage.on(
      'state_changed',
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
          name: '',
          tournaments: [''],
          liquipediaLink: '',
          youtubeLink: '',
          image: '',
          facebookLink: '',
          instagramLink: '',
          twitchLink: '',
          twitterLink: '',
          role: '',
        });
        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            const articleRef = collection(db, 'talents');

            addDoc(articleRef, {
              name: formData.name,
              tournaments: formData.tournaments,
              liquipediaLink: formData.liquipediaLink,
              youtubeLink: formData.youtubeLink,
              image: url,
              facebookLink: formData.facebookLink,
              instagramLink: formData.instagramLink,
              twitchLink: formData.twitchLink,
              twitterLink: formData.twitterLink,
              role: formData.role,
              date: Timestamp.now().toDate(),
            });
          })
          .then(() => {
            alert('data uploaded successfuly');
            setProgress(0);
          })
          .catch((err) => console.log(err));
      }
    );

    // } catch (error) {
    //   console.log(error);
    // }
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      {' '}
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
            <label>Facebook Link:</label>
            <input
              className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='facebook Link'
              value={formData.facebookLink}
              onChange={(e) =>
                setFormData({ ...formData, facebookLink: e.target.value })
              }
            ></input>
            <label>Instagram Link:</label>
            <input
              className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='city'
              value={formData.instagramLink}
              onChange={(e) =>
                setFormData({ ...formData, instagramLink: e.target.value })
              }
            ></input>
            <label>liquipedia Link:</label>
            <input
              className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='city'
              value={formData.liquipediaLink}
              onChange={(e) =>
                setFormData({ ...formData, liquipediaLink: e.target.value })
              }
            ></input>
            <label>Youtube Link:</label>
            <input
              className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='city'
              value={formData.youtubeLink}
              onChange={(e) =>
                setFormData({ ...formData, youtubeLink: e.target.value })
              }
            ></input>
            <label>Twitter Link:</label>
            <input
              className='p-4 focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='city'
              value={formData.twitterLink}
              onChange={(e) =>
                setFormData({ ...formData, twitterLink: e.target.value })
              }
            ></input>
            <label>Twitch Link:</label>
            <input
              className='p-4 focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='city'
              value={formData.twitchLink}
              onChange={(e) =>
                setFormData({ ...formData, twitchLink: e.target.value })
              }
            ></input>
            <label>Tournaments :</label>
            <p>Note kindly put coma " , " after each string</p>
            <input
              className='p-4 focus:outline-none shadow-sm shadow-slate-800 rounded-md'
              type='text'
              name='city'
              value={formData.tournaments}
              onChange={(e) =>
                setFormData({ ...formData, tournaments: e.target.value })
              }
            ></input>

            {
              // <label>Choose Category</label>
              // <select
              //   onChange={(e) =>
              //     setFormData({ ...formData, category: e.target.value })
              //   }
              // >
              //   <option defaultValue='male'>Male</option>
              //   <option value='female'>Female</option>
              //   <option value='children'>Children</option>
              // </select>
            }
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
export default TalentForm;
