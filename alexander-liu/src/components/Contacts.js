import './css/Contacts.css';
import DownloadIcon from './vector-sign-of-download-icon.jpg';
import resume from './Alexander-Liu-Resume.pdf';
import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu'

function Contacts() {

    const [smallWindow, setSmallWindow] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 845) {
            setSmallWindow(true);
        }
    }, []);

    return (
        <div class='outer'>
            <a class='name' href="#">alexander liu</a>
            {smallWindow ? 
                <div>

                </div>
            :
            <div class='right'>
                <a class='link' href="#school">School</a>
                <a class='link' href='#experiences'>Experiences</a>
                <a class='link' href='#skills'>Skills</a>
                <a class='link' href='#accolades'>Accolades</a>
                <a class='link' href="#footer">Contact</a>
                <a class='link' href={resume} target='_blank'>Resume</a>
            </div>}
        </div>
    );
}

export default Contacts;