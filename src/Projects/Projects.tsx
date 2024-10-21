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

const Project: React.FC<IProjectProp> = ({title, description, image, className}) => {
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
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid place-content-center rounded bg-[#e5dcc347] p-6 sm:p-8">
                        <div className="mx-auto max-w-md text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Projects</h2>

                                <p className="mt-4 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum quam amet
                                    provident nulla error!
                                </p>
                            </header>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                            >
                                Shop All
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-2 gap-4">
                            <li>
                                <a href="#" className="group block">
                                    <img
                                        src="/bully.png"
                                        alt=""
                                        className="aspect-video w-full rounded object-cover"
                                    />

                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Simple Watch
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">$150</p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="group block">
                                    <img
                                        src="/trading.png"
                                        alt=""
                                        className="aspect-video w-full rounded object-cover"
                                    />

                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Simple Watch
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">$150</p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="group block">
                                    <img
                                        src="/tth.png"
                                        alt=""
                                        className="aspect-video w-full rounded object-cover"
                                    />

                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Simple Watch
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">$150</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;


