import './Projects.css'
import * as React from 'react';
import {experimentalStyled as styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import detector from '../images/detector.png';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Project = () => {
    // TODO make the projects dynamic
    return (
        <div className={'project-div'}>
            <div className={'project-inner-div'}>
                <img src={detector} id={'project-image'} alt={'project-image'}/>
                <p id={'project-title'}>Cyberbullying Detector</p>
                <p id={'project-description'}>ML/NLP</p>
            </div>
        </div>
    );
};

function Projects() {
    return (
        <div>
            <div>
                <h2 id={"projects-title"}>Projects</h2>
            </div>
            <div className={"projects-outer-div"}>
                <div className={"projects-inner-div"}>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={{xs: 5}}>
                            {Array.from(Array(6)).map((_, index) => (
                                <Grid item xs={6} key={index}>
                                    <Item elevation={0} className={'item'}>
                                        <Project/>
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Projects