import React from "react";
import Pdf from "../../editable-stuff/resume.pdf";

import axios from "axios";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  //const bgStyle1 = { backgroundColor: "#fff2f6" };

  React.useEffect(() => {
    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  const handleRequest = async () => {
    const instaLink = "https://www.instagram.com/";
    const instaQuery = "/?__a=1";
    try {
      const response = await axios.get(instaLink + link + instaQuery);
      setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  };

  return (
    <div
      id='aboutme'
      className='jumbotron jumbotron-fluid m-0'
      style={{ backgroundColor: "#ededed" }}
    >
      <div className='container container-fluid'>
        <div className='row'>
          <div className='col-5 d-none d-lg-block align-self-center'>
            {showPic && (
              <img
                className='border border-secondary rounded-circle'
                src={profilePicUrl}
                alt='profilepicture'
                width={imgSize}
                height={imgSize}
              />
            )}
          </div>

          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className='display-4 mb-5 text-center'>{heading}</h2>
            <p className='lead text-center'>
              Hello there! My name is Ying Xin and I am currently a {""}
              <b>penultimate Business Analytics student</b> at the {""}
              <b>National University of Singapore.</b> <br />
              <br /> I am passionate about giving back to the community and
              utilizing data to discover novel solutions to business problems.
              Exploring new forms of art and designing are some other things I
              do in my free time to de-stress and re-energize!,
            </p>
            <div className='display-4 mb-5 text-center'></div>
            {resume && (
              <p className='lead text-center'>
                <a
                  className='btn btn-outline-dark btn-lg'
                  href={resume}
                  target='_blank'
                  rel='noreferrer noopener'
                  role='button'
                  aria-label='Resume/CV'
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
