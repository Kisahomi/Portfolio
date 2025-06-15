import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ active }) {
    return (
        <div className='bar'>
            <nav className='nav-icons'>
                <a href='#introduction' className={active === 'introduction' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faPlay} />
                </a>
                <a href='#projects' className={active === 'projects' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faFolder} />
                </a>
                <a href='#skills' className={active === 'skills' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faStar} />
                </a>
                <a href='#education' className={active === 'education' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faUserGraduate} />
                </a>
            </nav>
        </div>
    );
}
export default Sidebar;
