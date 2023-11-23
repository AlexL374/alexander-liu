
import { useState } from 'react';
import './css/Accolades.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Accolades() {

    const [showAccolades, setShowAccolades] = useState(false);
    const accolades = ['RPI\'s Founder Award of Excellence Recipient', 'Chi Phi Educational Trust Scholarhip Recipient', 
                       'Upsilon Pi Epsilon (Computer Science Honor Society) at RPI', 'Pi Mu Epsilon (Math Honor Society) at RPI',
                    'Coursera Certificate: Foundations of User Experience (UX) Design',
                    'Coursera Certificate: Start the UX Design Process: Empathize, Define, and Ideate'];

    function updateShowAccolades() {
        if (showAccolades) {
            setShowAccolades(false);
        } else {
            setShowAccolades(true);
        }
    }

    return (
        <div id='accolades'>
            <p class='accolades-title' onClick={updateShowAccolades}>Accolades</p>
            <div class={showAccolades ? `accolades-outer` : `accolades-outer`}>
                {accolades.map((accolade) => {
                    return (
                        <Card sx={{ minWidth: 140, maxWidth: 190, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', marginBottom: '10px' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20, fontFamily: 'asdf' }} color="text.primary" gutterBottom>
                                {accolade}
                            </Typography>
                        </CardContent>
                    </Card>
                    )
                })}
            
            </div>
            
        </div>
    );
}

export default Accolades;