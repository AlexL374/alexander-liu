import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';
import I from './i.jpeg';
import './css/School.css';

function School() {

    const [rpiTextTranslate, setRpiTextTranslate] = useState(300);
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
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
            {/*<Parallax speed={30} class='middle'>
                <img  src={I} width="100%" />
            </Parallax>
            <Parallax speed={30} class={`rpi-parallax ` + (showCard ? `none` : `show`)} translateY={[300, rpiTextTranslate]}>
                <p class={showCard ? `rpi` : `rpi`} onClick={showSchoolInfo}>RPI</p>     
            </Parallax>
            <Parallax speed={30} class={showCard ? 'show' : 'none'}>
                <div class={showCard ? `school-card` : `school-card`} onClick={hideSchoolInfo}>
                    <p>Rensselaer Polytechnic Institute</p>
                    <p>Bachelors Of Science In Computer Science And Mathematics</p>
                    <p>Graduation: December, 2023</p>
                    <p>GPA: 3.72</p>
                    <p>Coursework:</p>
                    <p>Data Structures, Linear Algebra, Machine Learning From Data</p>
                </div>
    </Parallax>*/}
            <Parallax>
                <img src={I} width="1500px" />
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