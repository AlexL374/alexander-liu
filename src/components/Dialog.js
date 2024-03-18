import { useState, useEffect } from 'react';
import './css/Dialog.css';

function Dialog() {

    const [step, setStep] = useState(0);

    const allDialog = [
        'Hey you. This is my personal website.',
        'If you want to learn more you have to draw.',
        'Follow the key in the top left of the screen to access the different pages and learn about me.',
        'Use the Reset button to clear your drawing or get back to this drawing site.',
        'Use the Submit button to submit your drawing and see if my model can bring you to the right page.',
        'Also see if you can accidently stumble across my easter egg page :)'
    ];

    const nextDialog = () => {
        setStep(step + 1);
    }

    return (
        <>
            {step < allDialog.length ? 
                <div className='dialog-box' onClick={nextDialog}>
                    <p className='dialog-text'>{allDialog[step]}</p>
                    <p className='next-dialog-text'>Click Next</p>
                </div>
            : 
                <></>
            }
        </>
    );
}

export default Dialog;