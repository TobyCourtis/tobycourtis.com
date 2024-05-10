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
    className?: string;
}

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Project: React.FC<IProjectProp> = ({title, description, image, className}) => {
    const projectClasses = `project-div ${className || ''}`;

    return (
        <div className={projectClasses}>
            <div className={'project-inner-div'}>
                <div className={'project-image-div'}>
                    <img src={image} id={'project-image'} alt={'project'}/>
                </div>
                <div className={'text-div'}>
                    <p id={'project-title'}>{title}</p>
                    <p id={'project-description'}>{description}</p>
                </div>
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
        }
    ];

    const highlightProj: IProjectProp[] = [
        {
            title: 'Pedestrian Detector',
            description: 'ML/NN/OpenCV',
            image: '/pedestrian.png'
        }
    ];

    const moreProjects: IProjectProp[] = [
        {
            title: 'Pedestrian Detector',
            description: 'ML/NN/OpenCV',
            image: '/pedestrian.png'
        }, {
            title: 'e-Sports Tournament Hub',
            description: 'Data/Full-stack/Web',
            image: '/tth.png'
        }
    ];

    return (
        <div id="projects">
            <div>
                <h2 id={"projects-title"}>Projects</h2>
            </div>
            <div className={"projects-outer-div"}>
                <div className={"projects-inner-div"}>
                    <Grid container spacing={{xs: 4}}>
                        {projects.map((project, index) => (
                            <Grid item xs={4} key={index}>
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

                    <Grid container spacing={{xs: 4}}>
                        {highlightProj.map((project, index) => (
                            <Grid item xs={8} key={index}>
                                <Item elevation={0} className={'item'}>
                                    <Project
                                        title={project.title}
                                        description={project.description}
                                        image={project.image}
                                        className={'highlight-proj'}
                                    />
                                </Item>
                            </Grid>
                        ))}
                        <Grid item xs={4} key={'more'}>
                            <Item elevation={0} className={'item'}>
                                {moreProjects.map((project, index) => (
                                    <Project
                                        title={project.title}
                                        description={project.description}
                                        image={project.image}
                                    />
                                ))}
                            </Item>
                        </Grid>
                    </Grid>


                </div>
            </div>
        </div>
    );
}

export default Projects;
