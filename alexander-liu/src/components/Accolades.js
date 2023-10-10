
import { useState } from 'react';
import './css/Accolades.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Accolades() {

    const [showAccolades, setShowAccolades] = useState(false);

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
            <div class={showAccolades ? `` : ``}>
            <Card sx={{ minWidth: 275, maxWidth: '15vw', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', marginBottom: '10px' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20, fontFamily: 'asdf' }} color="text.primary" gutterBottom>
                                hi
                            </Typography>
                        </CardContent>
                    </Card>
            </div>
            
        </div>
    );
}

export default Accolades;