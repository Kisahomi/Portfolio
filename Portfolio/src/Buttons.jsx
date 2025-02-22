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
            {buttonStatus && 
            <div className='pop-up'>
                hello
            </div>
            }
        </>
    );

}

export default Buttons