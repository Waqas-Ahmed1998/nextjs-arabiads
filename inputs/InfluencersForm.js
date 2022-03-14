import React from 'react';

import { useState, useEffect } from 'react';
import { addDoc, collection, doc, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
// import { db, storage } from '../../firebase';
import { db, storage } from '../firebase';
import { useRouter } from 'next/router';

function InfluencersForm() {
  const router = useRouter();

  // ***********   Hooks     ****

  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    youtube: '',
    image: '',
    facebook: '',
    instagram: '',
    twitter: '',
    followers: '',
    tiktok: '',
    youtubeLink: '',
    youtubeLink2: '',
    instagramLink: '',
    twitterLink: '',
    tiktokLink: '',
    facebookLink: '',
    date: Timestamp.now().toDate(),
  });
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  // Image uplaod

  const submitData = async (e) => {
    e.preventDefault();
    // try {
    if (!formData.name || !formData.image) {
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
          youtube: '',
          youtubeSecond: '',
          image: '',
          facebook: '',
          instagram: '',
          twitter: '',
          followers: '',
          tiktok: '',
          youtubeLink: '',
          youtubeLink2: '',
          instagramLink: '',
          twitterLink: '',
          tiktokLink: '',
          facebookLink: '',
        });
        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            const articleRef = collection(db, 'influencers');

            addDoc(articleRef, {
              name: formData.name,

              youtube: formData.youtube,
              image: url,
              facebook: formData.facebook,
              instagram: formData.instagram,
              followers: formData.followers,
              twitter: formData.twitter,
              tiktok: formData.tiktok,
              twitterLink: formData.twitterLink,
              instagramLink: formData.instagramLink,
              facebookLink: formData.facebookLink,
              youtubeLink: formData.youtubeLink,
              youtubeLink2: formData.youtubeLink2,
              youtubeSecond: formData.youtubeSecond,

              date: Timestamp.now().toDate(),
            });
          })
          .then(() => {
            alert('data uploaded successfuly');
            setProgress(0);
            router.push('/influencers');
          })
          .catch((err) => console.log(err));
      }
    );

    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      {' '}
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
              <label>Followers:</label>
              <input
                className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
                type='text'
                name='facebook Link'
                value={formData.followers}
                onChange={(e) =>
                  setFormData({ ...formData, followers: e.target.value })
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
              <label>Facebook Followers:</label>
              <input
                className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
                type='text'
                name='facebook Link'
                value={formData.facebook}
                onChange={(e) =>
                  setFormData({ ...formData, facebook: e.target.value })
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
              <label>Instagram Followers:</label>
              <input
                className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
                type='text'
                name='city'
                value={formData.instagram}
                onChange={(e) =>
                  setFormData({ ...formData, instagram: e.target.value })
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

              <label>Youtube Followers:</label>
              <input
                className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
                type='text'
                name='city'
                value={formData.youtube}
                onChange={(e) =>
                  setFormData({ ...formData, youtube: e.target.value })
                }
              ></input>
              <label>Youtube Second Link:</label>
              <input
                className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
                type='text'
                name='city'
                value={formData.youtubeLink2}
                onChange={(e) =>
                  setFormData({ ...formData, youtubeLink2: e.target.value })
                }
              ></input>
              <label>Youtube Second Followers:</label>
              <input
                className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
                type='text'
                name='city'
                value={formData.youtubeSecond}
                onChange={(e) =>
                  setFormData({ ...formData, youtubeSecond: e.target.value })
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
              <label>Twitter Followers:</label>
              <input
                className='p-4 focus:outline-none shadow-sm shadow-slate-800 rounded-md'
                type='text'
                name='city'
                value={formData.twitter}
                onChange={(e) =>
                  setFormData({ ...formData, twitter: e.target.value })
                }
              ></input>
              <label>Tik Tok Link:</label>
              <input
                className='p-4 focus:outline-none shadow-sm shadow-slate-800 rounded-md'
                type='text'
                name='city'
                value={formData.tiktokLink}
                onChange={(e) =>
                  setFormData({ ...formData, tiktokLink: e.target.value })
                }
              ></input>
              <label>Tik Tok Followers:</label>
              <input
                className='p-4 focus:outline-none shadow-sm shadow-slate-800 rounded-md'
                type='text'
                name='city'
                value={formData.tiktok}
                onChange={(e) =>
                  setFormData({ ...formData, tiktok: e.target.value })
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
    </div>
  );
}

export default InfluencersForm;
