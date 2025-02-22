import './Buttons.css'
import React, {useState} from 'react';

function Buttons(){

    const [buttonStatus, setStatus] = useState(false);
    const toggleStatus = () =>  {
        setStatus(!buttonStatus);
    }
    return (
        <>
            <div className='buttondiv'>
                <button onClick={() => toggleStatus()}> About me </button>
                <button> {buttonStatus ? "on" : "off"} </button>
                <button> Portfolio </button>
                <button> Contact </button>        
            </div>
            <div className={`pop-up ${buttonStatus ? "slide-in" : "slide-out"}`}>
                hello
            </div>
        </>
    );

}

export default Buttons