import React from "react";

import { useState, useEffect } from "react";
import { addDoc, collection, doc, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { db, storage } from '../../firebase';
import { db, storage } from "../firebase";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { adminUsers } from "../recoil/adminUsers";
import { loggedInUser } from "../recoil/loggedInUser";
import { async } from "@firebase/util";

function InfluencersForm() {
  const router = useRouter();
  const admins = useRecoilValue(adminUsers);
  const logged = useRecoilValue(loggedInUser);

  // *****************totel followers sum logic

  const formater = new Intl.NumberFormat("en", {
    style: "decimal",
    useGrouping: true,
    maximumFractionDigits: 1,
    notation: "compact",
  });
  const calculateFollowers = async (
    tiktok,
    facebook,
    youtube,
    youtubeSecond,
    twitter,
    instagram
  ) => {
    let tiktokFollowers = tiktok && tiktok.toUpperCase();
    let facebookFollowers = facebook && facebook.toUpperCase();
    let youtubeFollowers = youtube && youtube.toUpperCase();
    let youtubeSecondFollowers = youtubeSecond && youtubeSecond.toUpperCase();
    let twitterFollowers = twitter && twitter.toUpperCase();
    let instagramFollowers = instagram && instagram.toUpperCase();

    console.log(tiktokFollowers, facebookFollowers);
    if (tiktok && tiktokFollowers.includes("K")) {
      tiktokFollowers = tiktokFollowers.replace("K", "");

      tiktokFollowers = Number(tiktokFollowers) * Math.pow(10, 3);
    } else if (tiktok && tiktokFollowers.includes("M")) {
      tiktokFollowers = tiktokFollowers.replace("M", "");
      tiktokFollowers = Number(tiktokFollowers) * Math.pow(10, 6);
    } else {
    }
    //******* */ facebook
    if (facebook && facebookFollowers.includes("K")) {
      facebookFollowers =
        Number(facebookFollowers.replace("K", "")) * Math.pow(10, 3);
    } else if (facebook && facebookFollowers.includes("M")) {
      facebookFollowers =
        Number(facebookFollowers.replace("M", "")) * Math.pow(10, 6);
    } else {
    }
    // **********Youtube
    if (youtube && youtubeFollowers.includes("K")) {
      youtubeFollowers =
        Number(youtubeFollowers.replace("K", "")) * Math.pow(10, 3);
    } else if (youtube && youtubeFollowers.includes("M")) {
      youtubeFollowers =
        Number(youtubeFollowers.replace("M", "")) * Math.pow(10, 6);
    } else {
    }
    // **********Youtube second
    if (youtubeSecond && youtubeSecondFollowers.includes("K")) {
      youtubeSecondFollowers =
        Number(youtubeSecondFollowers.replace("K", "")) * Math.pow(10, 3);
    } else if (youtubeSecond && youtubeSecondFollowers.includes("M")) {
      youtubeSecondFollowers =
        Number(youtubeSecondFollowers.replace("M", "")) * Math.pow(10, 6);
    } else {
    }
    // ****************twitter
    if (twitter && twitterFollowers.includes("K")) {
      twitterFollowers =
        Number(twitterFollowers.replace("K", "")) * Math.pow(10, 3);
    } else if (twitter && twitterFollowers.includes("M")) {
      twitterFollowers =
        Number(twitterFollowers.replace("M", "")) * Math.pow(10, 6);
    } else {
    }
    // ***********instagram
    if (instagram && instagramFollowers.includes("K")) {
      instagramFollowers =
        Number(instagramFollowers.replace("K", "")) * Math.pow(10, 3);
    } else if (instagram && instagramFollowers.includes("M")) {
      instagramFollowers =
        Number(instagramFollowers.replace("M", "")) * Math.pow(10, 6);
    } else {
    }
    let totelFollowers =
      Number(tiktokFollowers) +
      Number(facebookFollowers) +
      Number(youtubeFollowers) +
      Number(youtubeSecondFollowers) +
      Number(instagramFollowers) +
      Number(twitterFollowers);

    totelFollowers = Math.round(totelFollowers);

    console.log("totel follwers round", totelFollowers);
    const followerNumbers = {
      followers: formater.format(totelFollowers),
      filter: totelFollowers,
    };
    return followerNumbers;
    // return formater.format(totelFollowers);
  };
  // ***********   Hooks     ****

  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    youtube: "",
    youtubeSecond: "",
    image: "",
    facebook: "",
    instagram: "",
    twitter: "",
    followers: "",
    tiktok: "",
    youtubeLink: "",
    youtubeLink2: "",
    instagramLink: "",
    twitterLink: "",
    tiktokLink: "",
    facebookLink: "",
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
      alert("Please fill the required fields");
      return;
    }

    // calculation for totel followers

    let totelFollowers = await calculateFollowers(
      formData.tiktok && formData.tiktok,
      formData.facebook && formData.facebook,
      formData.youtube && formData.youtube,
      formData.youtubeSecond && formData.youtubeSecond,
      formData.twitter && formData.twitter,
      formData.instagram && formData.instagram
    );

    const storageRef = ref(
      storage,
      `/arabiads/${Date.now()}${formData.image.name}`
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
          youtube: "",
          youtubeSecond: "",
          image: "",
          facebook: "",
          instagram: "",
          twitter: "",
          followers: "",
          tiktok: "",
          youtubeLink: "",
          youtubeLink2: "",
          instagramLink: "",
          twitterLink: "",
          tiktokLink: "",
          facebookLink: "",
        });
        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            const articleRef = collection(db, "influencers");

            addDoc(articleRef, {
              name: formData.name,

              youtube: formData.youtube,
              image: url,
              facebook: formData.facebook,
              instagram: formData.instagram,
              followers: totelFollowers.followers,
              filter: totelFollowers.filter,
              twitter: formData.twitter,
              tiktok: formData.tiktok,
              tiktokLink: formData.tiktokLink,
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
            alert("data uploaded successfuly");
            setProgress(0);
            totelFollowers = "";
            router.push("/influencers");
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
  }, [progress]);
  return (
    <div>
      {" "}
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
              {
                // <label>Followers:</label>
                // <input
                //   className='p-4  focus:outline-none shadow-sm shadow-slate-800 rounded-md'
                //   type='text'
                //   name='facebook Link'
                //   value={formData.followers}
                //   onChange={(e) =>
                //     setFormData({ ...formData, followers: e.target.value })
                //   }
                // ></input>
              }
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
