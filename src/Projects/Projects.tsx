import './Projects.css'
import * as React from 'react';
import {experimentalStyled as styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface IProjectProp {
    title: string;
    description: string;
    image: string;
}

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Project: React.FC<IProjectProp> = ({title, description, image}) => {
    return (
        <div className={'project-div'}>
            <div className={'project-inner-div'}>
                <img src={image} id={'project-image'} alt={'project'}/>
                <p id={'project-title'}>{title}</p>
                <p id={'project-description'}>{description}</p>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const projects: IProjectProp[] = [
        {
            title: 'Cyberbullying Detector',
            description: 'ML/SVM/NLP',
            image: '/bully.png'
        }, {
            title: 'Crypto Trading Bot',
            description: 'Python/Trading',
            image: '/trading.png'
        }, {
            title: 'e-Sports Tournament Hub',
            description: 'Data/Full-stack/Web',
            image: '/tth.png'
        }, {
            title: 'Pedestrian Detector',
            description: 'ML/NN/OpenCV',
            image: '/pedestrian.png'
        }
    ];

    return (
        <div id="projects">
            <div>
                <h2 id={"projects-title"}>Projects</h2>
            </div>
            <div className={"projects-outer-div"}>
                <div className={"projects-inner-div"}>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={{xs: 5}}>
                            {projects.map((project, index) => (
                                <Grid item xs={6} key={index}>
                                    <Item elevation={0} className={'item'}>
                                        <Project
                                            title={project.title}
                                            description={project.description}
                                            image={project.image}
                                        />
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Projects;
