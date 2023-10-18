import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';
import I from './i.jpeg';
import './css/School.css';

function School() {

    const [rpiTextTranslate, setRpiTextTranslate] = useState(300);
    const [showCard, setShowCard] = useState(false);
    const [imageWidth, setImageWidth] = useState('100%');

    const [smallViewport, setSmallViewport] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 750) {
            setSmallViewport(true);
        }
    }, []);

    useEffect(() => {
        if (false) {
            setImageWidth("1500px");
        }
        setRpiTextTranslate(300);
        setTimeout(() => {
            setRpiTextTranslate(-200);
        }, 100);
    }, []);

    function showSchoolInfo() {
        setShowCard(true);
    }

    function hideSchoolInfo() {
        setShowCard(false);
    }

    return (
        <div>
            <div class='parallax' id="school">
            <ParallaxProvider>
            <Parallax speed={30}>
                <div class='image-container'>
                <img src={I} class='rpi-image' />
                <div class={showCard ? `rpi none` : `rpi show`} onClick={showSchoolInfo}>
                    <p class='rpi-text'>RPI</p>
                </div>    
                <div class={showCard ? `school-card show` : `school-card none`} onClick={hideSchoolInfo}>
                    <p class='school-title'>Rensselaer Polytechnic Institutasdfe</p>
                    <p>Bachelors Of Science In Computer Science And Mathematics</p>
                    <p>Graduation: December, 2023</p>
                    <p>GPA: 3.72</p>
                    <p>Coursework:</p>
                    <p>Data Structures</p>
                    <p>Intro To Algorithms</p>
                    <p>Database Systems</p>
                    <p>Linear Algebra</p>
                    <p>Machine Learning From Data</p>
                </div>
                </div>
            </Parallax>
            </ParallaxProvider>
            </div>
        </div>
    );
}

export default School;