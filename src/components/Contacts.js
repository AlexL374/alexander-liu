import { useState, useEffect } from 'react';
import './css/Contacts.css';
import resume from './Alexander-Liu-Resume.pdf';

function Contacts() {

    const [useShadow, setUseShadow] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div class={`${scrollPosition != 0 ? 'shadow' : ''} outer`}>
            <a class='name' href="#">alexander liu</a>
            <div class='right'>
                <div class='burger-menu'>
                    <div class='row1'/>
                    <div class='row2'/>
                    <div class='row3'/>
                </div>
                <a class='link' href='#about'>About</a>
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