import './css/About.css';
import Alex from './assets/alex.jpg';

function About() {
    return (
        <div class='' id='about'>
            <p class='about-title'>About</p>
            <div class='about-contain'>
                <div class='image-contain'>
                    <img src={Alex} class='about-image' />
                </div>
                <div class='about-text-contain'>
                    <p class='about-text'>
                        Heyo, I'm an aspiring Software Engineer.
                    </p>
                    <p class='about-text'>
                        I'm currently taking some Coursera courses to learn about UI / UX Design
                        and Cybersecurity to grow myself in other areas related to software engineering.
                    </p>
                    <p class='about-text'>
                        Beyond that I enjoy going to the gym, rock climbing, building custom keyboards, 
                        and helping to teach people. 
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About;