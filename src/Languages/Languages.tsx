import './Languages.css'
import * as React from 'react';
import {experimentalStyled as styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface ILanguageProps {
    name: string;
    image: string;
}

const Language: React.FC<ILanguageProps> = ({name, image}) => {
    return (
        <div className={'language-div'}>
            <div className={'language-image-div language-inner-div'}>
                <img src={image} id={'language-image'} alt={name}/>
            </div>
            <div className={'language-name-div language-inner-div'}>
                <p id={'language-name'}>{name}</p>
            </div>
        </div>
    );
};

function Languages() {
    const languages: ILanguageProps[] = [
        {name: 'Python', image: '/python.png'},
        {name: 'Java', image: '/java.png'},
        {name: 'Kotlin', image: '/kotlin.png'},
        {name: 'Typescript', image: 'typescript.png'},
        {name: 'Javascript', image: '/javascript.png'},
        {name: 'HTML/CSS', image: '/html.png'},
        {name: 'SQL', image: '/database.png'},
    ];

    return (
        <>
            <div>
                <div>
                    <h2 id={"languages-title"}>Languages</h2>
                </div>

                <div className={"languages-outer-div"}>
                    <div className={"languages-inner-div"}>
                        <Box sx={{flexGrow: 1}}>
                            <Grid container rowSpacing={3} columnSpacing={{xs: 2}}>
                                {languages.map((language, index) => (
                                    <Grid item xs={4} key={index}>
                                        <Item elevation={0} className={'item'}>
                                            <Language name={language.name} image={language.image}/>
                                        </Item>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Languages;
