import './Languages.css'
import * as React from 'react';
import language from "../images/kotlin.png";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Language = () => {
    // TODO make the languages dynamic
    return (
        <div className={'language-div'}>
            <div className={'language-image-div language-inner-div'}>
                <img src={language} id={'language-image'} alt={'language-image'}/>
            </div>
            <div className={'language-name-div language-inner-div'}>
                <p id={'language-name'}>Kotlin</p>
            </div>
        </div>
    );
};

function Languages() {
    return (
        <>
            <div>
                <div>
                    <h2 id={"languages-title"}>Languages</h2>
                </div>

                <div className={"languages-outer-div"}>
                    <div className={"languages-inner-div"}>
                        <Box sx={{flexGrow: 1}}>
                            <Grid container rowSpacing={3} columnSpacing={{xs: 3}}>
                                {Array.from(Array(9)).map((_, index) => (
                                    <Grid item xs={4} key={index}>
                                        <Item elevation={0} className={'item'}>
                                            <Language/>
                                        </Item>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Languages;