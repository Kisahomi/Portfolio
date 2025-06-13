import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';



function Sidebar(){
    return(
        <>
        <div className='bar'>
            <nav className='nav-icons'>

                <a href='#introduction' className='home'>
                    <FontAwesomeIcon icon={faPlay} />
                </a>
                <a href='#skills'  className='skills'>
                    <FontAwesomeIcon icon={faStar} />
                </a>
                <a href='#projects'  className='projects'>
                    <FontAwesomeIcon icon={faFolder} />
                </a>
                <a href='#education' className='education'>
                    <FontAwesomeIcon icon={faUserGraduate} />
                </a>
            </nav>
        </div>
        </>
    );
}
export default Sidebar