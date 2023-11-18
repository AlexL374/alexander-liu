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
                        and Cybersecurity which is something that I didn't get a chance to mention in this website.
                    </p>
                    <p class='about-text'>
                        Beyond that I enjoy going to the gym, rock climbing, playing poker, watching anime, building custom keyboards,
                        and just generally hanging out with my friends.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About;