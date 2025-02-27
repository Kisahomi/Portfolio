import './Buttons.css'
import React, {useState} from 'react';

function Buttons(){

    const [aboutButtonStatus, setAboutStatus] = useState(false);
    const [resumeButtonStatus, setResumeStatus] = useState(false);
    const [portfolioButtonStatus, setPortfolioStatus] = useState(false);
    const [contactButtonStatus, setContactStatus] = useState(false);
    const toggleAboutStatus = () =>  {
        setAboutStatus(!aboutButtonStatus);
        setResumeStatus(false);
        setPortfolioStatus(false);
        setContactStatus(false);
    }
    const toggleResumeStatus = () =>  {
        setResumeStatus(!resumeButtonStatus);
        setAboutStatus(false);
        setPortfolioStatus(false);
        setContactStatus(false);
    }
    const togglePortfolioStatus = () =>  {
        setPortfolioStatus(!portfolioButtonStatus);
        setAboutStatus(false);
        setResumeStatus(false);
        setContactStatus(false);
    }
    const toggleContactStatus = () =>  {
        setContactStatus(!contactButtonStatus);
        setAboutStatus(false);
        setResumeStatus(false);
        setPortfolioStatus(false);
    }
    return (
        <>
            <div className='buttondiv'>
                <button onClick={() => {toggleAboutStatus()}}> About </button>
                <button onClick={() => toggleResumeStatus()}> Resume </button>
                <button onClick={() => togglePortfolioStatus()}> Portfolio </button>
                <button onClick={() => toggleContactStatus()}> Contact </button>        
            </div>
            <div className={`pop-up ${aboutButtonStatus ? "slide-in" : "slide-out"}`}>
                <div className='pop-up-card'>
                    <div className='pop-up-card-row-1'>
                        <h2>About me</h2>
                        Hi, my name is Jemuel Lucas, an aspiring programmer who is ready to take on the challenge of developing technological innovations to make people's lives easier.
                        <br/>
                        <br/>
                        I am dedicated in enhancing my skills in different fields of computer science as it is my passion.
                    </div>
                    <div className='pop-up-card-row-2'>
                        <div className='aboutCard'>
                            about
                        </div>
                        <div className='aboutCard'>
                            about
                        </div>
                    </div>
                    <div className='pop-up-card-row-3'>
                        <div className='aboutCard'>
                            about
                        </div>
                        <div className='aboutCard'>
                            about
                        </div>
                    </div>


                </div>                
            </div>
            <div className={`pop-up ${resumeButtonStatus ? "slide-in" : "slide-out"}`}>
                resume
            </div>
            <div className={`pop-up ${portfolioButtonStatus ? "slide-in" : "slide-out"}`}>
                Portfolio
            </div>
            <div className={`pop-up ${contactButtonStatus ? "slide-in" : "slide-out"}`}>
                contact
            </div>
        </>
    );

}

export default Buttons