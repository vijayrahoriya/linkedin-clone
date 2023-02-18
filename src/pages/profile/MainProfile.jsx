import React, { useState } from 'react'
import './mainprofile.css'
import LockIcon from '@mui/icons-material/Lock'
import WatchIcon from '@mui/icons-material/WatchLater'
import RightArrow from '@mui/icons-material/ArrowForward'
import CheckIcon from '@mui/icons-material/Check'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import SettingsIcon from '@mui/icons-material/Settings'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import UserImage from '../../assests/user.avif';
import RuImage from '../../assests/ru.jpeg';

function MainProfile() {
    const [showActive,setShowActive] = useState(false);
    const showActiveClass = () =>{
        setShowActive(!showActive)
        console.log(showActive)
    }
    return (
        <div className='mainProfile'>
            <div className="top">
                <header>
                    <img src={UserImage} alt="" />
                </header>
                <div className="info">
                    <div className="left">
                        <h3>Vijay Prajapati</h3>
                        <span>Student of Rajasthan University</span>
                        <span>Jaipur, Rajasthan, India * <span>Contact info</span></span>
                    </div>
                    <div className="right">
                        University of Rajasthan
                    </div>
                </div>
                <div className="buttons">
                    <button className='active'><LockIcon className='icon' /> Message</button>
                    <button><WatchIcon className='icon' /> Pending</button>
                    <button>More</button>
                </div>
            </div>
            <div className="highlight">
                <h3>Highlights</h3>
                <div className="line">
                    <div className="image">
                        <img src={RuImage} alt="" />
                    </div>
                    <div className="content">
                        <p>You both studied at University of Rajasthan</p>
                        <span>You both studied at University of Rajasthan from 2018 to 2021</span>
                        <button><LockIcon className='icon' /> Message</button>
                    </div>
                </div>


            </div>

            <div className="about">
                <h3>About</h3>
                <span>I am good in Frontend Development and now i am learning nodejs for backend. I am looking for internship in web development</span>
            </div>

            <div className="activity">
                <h3>Activity</h3>
                <span>0 followers</span>
                <p>Vijay hasn't posted lately</p>
                <span>Vijay's recent posts and comments will be diplayed here.</span>
                <hr />
                <span className='show'>Show all activity <RightArrow /></span>
            </div>

            <div className="education">
                <h3>Education</h3>
                <div className="line">
                    <div className="image">
                        <img src={RuImage} alt="" />
                    </div>
                    <div className="content">
                        <p>University of Rajasthan</p>
                        <span>Bsc, Web Development</span>
                        <span>2018</span>
                    </div>
                </div>
            </div>

            <div className="skills">
                <h3>Skills</h3>
                <p>HTML</p>
                <hr />
                <p>CSS</p>
                <hr />
                <p>JAVASCRIPT</p>
                <hr />
                <p>ReactJs</p>
                <hr className='last' />
                <span className='show'>Show all 6 skills <RightArrow /></span>
            </div>

            <div className="intrests">
                <h3>Interests</h3>
                <ul>
                    <li className={`${showActive ? "" : "active"}`} onClick={showActiveClass}>Companies</li>
                    <li className={`${showActive ? "active" : ""}`} onClick={showActiveClass}>Schools</li>
                </ul>
                <hr />
                <div className={`${showActive ? "active" : ""} schools`}>
                    <div className="left">
                        <div className="image">
                            <img src={RuImage} alt="" />
                        </div>
                        <div className="content">
                            <p>University of Rajasthan</p>
                            <span>463,686 followers</span>
                            <button><CheckIcon className='icon' /> Following</button>
                        </div>
                    </div>
                </div>
                <div className={`${showActive ? "hide" : ""} line`}>
                    <div className="left">
                        <div className="image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvBitDaXitBP93K8fvXX8MTHD94C3v92UwQ&usqp=CAU" alt="" />
                        </div>
                        <div className="content">
                            <p>Fresher Jobs</p>
                            <span>5,463,686 followers</span>
                            <button><CheckIcon className='icon' /> Following</button>
                        </div>
                    </div>
                    <div className="left">
                        <div className="image">
                            <img src={RuImage} alt="" />
                        </div>
                        <div className="content">
                            <p>University of Rajasthan</p>
                            <span>463,686 followers</span>
                            <button><CheckIcon className='icon' /> Following</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <h3>Linked <LinkedinIcon /></h3>
                <div className="line">
                    <div className="first">
                        <p>About</p>
                        <p>Community Guidline</p>
                        <p>Privacy & Terms</p>
                        <p>Sales Solutions</p>
                        <p>Saftey Corner</p>
                    </div>
                    <div className="first">
                        <p>Accessibility</p>
                        <p>Careers</p>
                        <p>Ad Choices</p>
                        <p>Mobile</p>
                    </div>
                    <div className="first">
                        <p>Talent Solutions</p>
                        <p>Marketing Solutions</p>
                        <p>Advertising</p>
                        <p>Small Business</p>
                    </div>
                    <div className="first">
                        <div className="question">
                            <div className="left"><QuestionMarkIcon style={{ color: '#444' }} /></div>
                            <div className="right">
                                <h5>Questions?</h5>
                                <span>Visit our Help Center.</span>
                            </div>
                        </div>
                        <div className="question">
                            <div className="left"><SettingsIcon style={{ color: '#444' }} /></div>
                            <div className="right">
                                <h5>Manage your accont and privacy?</h5>
                                <span>Go to your settings</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProfile
