import './Projects.css'
import * as React from 'react';
import {experimentalStyled as styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

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

const Project: React.FC<IProjectProp> = ({
                                             title,
                                             description,
                                             image,
                                             className
                                         }) => {
    const projectClasses = `project-div ${className || ''}`;

    return (
        <div className={projectClasses}>
            <div className={'project-inner-div'}>
                <div className={'project-image-div'}>
                    <img src={image} id={'project-image'} alt={'project'}/>
                </div>
                <div className={'text-div'}>
                    <div className={'text-inner-div'}>
                        <p id={'project-title'}>{title}</p>
                        <p id={'project-description'}>{description}</p>
                    </div>
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
            title: 'Prezle App',
            description: 'React/Ionic/Capacitor',
            image: '/prezle.png'
        }, {
            title: 'e-Sports Tournament Hub',
            description: 'Data/Full-stack/Web',
            image: '/tth.png'
        }, {
            title: 'Dumb Statistics',
            description: 'Python/React/Web',
            image: '/dumbstats.png'
        }, {
            title: 'Pedestrian Detector',
            description: 'ML/NN/OpenCV',
            image: '/pedestrian.png'
        }
    ];

    const highlightProj: IProjectProp[] = [
        {
            title: 'Cryptocurrency Trading Bot',
            description: 'Python/Trading',
            image: '/trading.png'
        }
    ];

    const containerSpacing: number = 4;

    return (
        <div className="projects-outer" id={'projects'}>
            <div className={'projects content'}>
                <div>
                    <h2 className={"section-title"}>Projects</h2>
                </div>
                <div className={"projects-content-outer-div"}>
                    <div className={"projects-content-inner-div"}>
                        <Grid container spacing={{xs: containerSpacing}}>
                            {projects.slice(0, 3).map((project, index) => (
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

                        <Grid container spacing={{xs: containerSpacing}} id={'project-highlight-grid'}>
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
                            <Grid item xs={4} key={'more-projects'}>
                                <Item elevation={0} className={'item'}>
                                    {projects.slice(3).map((project, _) => (
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
            <div className={'projects-footer'}></div>
        </div>
    );
}

export default Projects;
