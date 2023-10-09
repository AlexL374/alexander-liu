import './css/Contacts.css';
import DownloadIcon from './vector-sign-of-download-icon.jpg';
import resume from './Alexander-Liu-Resume.pdf';

function Contacts() {
    return (
        <div class='outer'>
            <p class='name'>alexander liu</p>
            <div class='right'>
                <a class='link' href="#school">School</a>
                <a class='link' href='#experiences'>Experiences</a>
                {/*<a class='link' href='#leadership'>Leadership</a>*/}
                <a class='link' href='#skills'>Skills</a>
                <a class='link' href='#accolades'>Accolades</a>
            {/*<p class='link'>About</p>*/}
            <a class='link' href={resume} target='_blank'>Resume</a>
            <p class='link'>Contact</p>
            </div>
        </div>
    );
}

export default Contacts;