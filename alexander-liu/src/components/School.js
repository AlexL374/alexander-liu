import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';
import I from './i.jpeg';
import './css/School.css';

function School() {

    const [rpiTextTranslate, setRpiTextTranslate] = useState(300);
    const [showCard, setShowCard] = useState(false);
    const [imageWidth, setImageWidth] = useState('100%');

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
        console.log('here');
        setShowCard(true);
    }

    function hideSchoolInfo() {
        console.log('hi');
        setShowCard(false);
    }

    return (
        <div>
            <div class='parallax' id="school">
            <ParallaxProvider>
            <Parallax speed={30}>
                <img src={I} width={imageWidth} />
                <p class={showCard ? `rpi none` : `rpi show`} onClick={showSchoolInfo}>RPI</p>    
                <div class={showCard ? `school-card show` : `school-card none`} onClick={hideSchoolInfo}>
                    <p class='school-title'>Rensselaer Polytechnic Institute</p>
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
            </Parallax>
            </ParallaxProvider>
            </div>
        </div>
    );
}

export default School;