import { useState } from 'react';
import './css/Skills.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import cpp from './cpp-icon.png';
import python from './python-icon.png';
import git from './git-icon.png';
import java from './java-icon.png';
import react from './react-icon.png';
import latex from './latex-icon.png';
import sql from './sql-icon.png';
import c from './c-icon.png';
import protobuf from './protobuf-icon.png';
import frontend from './frontend-icon.png';

function Skills() {

    const skills = ['C++', 'Python', 'Git', 'Java', 'ReactJS', 'LateX', 'SQL', 'C', 'Protocol Buffers', 'HTML, CSS, JS'];
    const skillsIcons = [cpp, python, git, java, react, latex, sql, c, protobuf, frontend]
    const dimensions = [{ height: '8vh', width: '8vh' }, { height: '8vh', width: '7vh' }, 
                        { height: '8vh', width: '8vh' }, { height: '8vh', width: '8vh' }, 
                        { height: '7vh', width: '8vh' }, { height: '5vh', width: '11vh' }, 
                        { height: '8vh', width: '8vh' }, { height: '8vh', width: '7vh' },
                        { height: '7vh', width: '8vh' }, { height: '6vh', width: '11vh' }];
    const [showSkills, setShowSkills] = useState(false);
    function updateSkills() {
        if (showSkills) {
            setShowSkills(false);
        } else {
            setShowSkills(true);
        }
    }

    return (
        <div id='skills'>
            <ParallaxProvider>
                <Parallax speed={30} class='middle'>
                    <div class='skills'>
                        <p class='skills-title' onClick={updateSkills}>Skills</p>
                        {/*<div class={`skills-outer ` + (showSkills ? `` : `skills-none`)}>*/}
                        <div class='skills-outer'>
                            {skills.map((e, index) => {
                                return (
                                    <Card sx={{ minWidth: 10, maxWidth: 200, width: '15vw', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', marginBottom: '3vh' }}>
                                        <CardMedia
                                            sx={dimensions[index]}
                                            image={skillsIcons[index]}
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 20, fontFamily: 'asdf' }} color="text.primary" gutterBottom>
                                                {e}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </Parallax>
            </ParallaxProvider>
            </div>
        
    );
}

export default Skills;