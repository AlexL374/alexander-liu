import './css/Contacts.css';
import DownloadIcon from './vector-sign-of-download-icon.jpg';
import resume from './Alexander-Liu-Resume.pdf';
import { useEffect, useState } from 'react';

function Contacts() {

    return (
        <div class='outer'>
            <a class='name' href="#">alexander liu</a>
            <div class='right'>
                <div class='burger-menu'>
                    <div class='row1'/>
                    <div class='row2'/>
                    <div class='row3'/>
                </div>
                <a class='link' href="#school">School</a>
                <a class='link' href='#experiences'>Experiences</a>
                <a class='link' href='#skills'>Skills</a>
                <a class='link' href='#accolades'>Accolades</a>
                <a class='link' href="#footer">Contact</a>
                <a class='link' href={resume} target='_blank'>Resume</a>
            </div>
        </div>
    );
}

export default Contacts;