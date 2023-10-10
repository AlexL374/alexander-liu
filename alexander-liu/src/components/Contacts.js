import './css/Contacts.css';
import DownloadIcon from './vector-sign-of-download-icon.jpg';
import resume from './Alexander-Liu-Resume.pdf';

function Contacts() {
    return (
        <div class='outer'>
            <a class='name' href="#">alexander liu</a>
            <div class='right'>
                <a class='link' href="#school">School</a>
                <a class='link' href='#experiences'>Experiences</a>
                <a class='link' href='#skills'>Skills</a>
                <a class='link' href='#accolades'>Accolades</a>
            {/*<p class='link'>About</p>*/}
            <a class='link' href={resume} target='_blank'>Resume</a>
            <a class='link' href="#footer">Contact</a>
            </div>
        </div>
    );
}

export default Contacts;