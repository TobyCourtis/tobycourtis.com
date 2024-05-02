import './Contact.css'
import * as React from 'react';
import image from "../images/kotlin.png";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function contacts() {
    return (
        <>
            <div>
                <div>
                    <h2 id={"contacts-title"}>Contact</h2>
                </div>

                <div className={"contacts-outer-div"}>
                    <div className={"contacts-inner-div"}>
                        <Box sx={{flexGrow: 1}}>
                            <Grid container rowSpacing={3} columnSpacing={{xs: 4}}>
                                <Grid item xs={6} key={'foo'}>
                                    <Item elevation={0} className={'item'}>
                                        <div className={'contact-div'}>
                                            <div className={'contact-image-div contact-inner-div'}>
                                                <EmailIcon id={'icon'}/>
                                            </div>
                                            <div className={'contact-name-div contact-inner-div'}>
                                                <p id={'contact-name'}>EMAIL</p>
                                            </div>
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={6} key={'foo'}>
                                    <Item elevation={0} className={'item'}>
                                        <div className={'contact-div'}>
                                            <div className={'contact-image-div contact-inner-div'}>
                                                <LinkedInIcon id={'icon'}/>
                                            </div>
                                            <div className={'contact-name-div contact-inner-div'}>
                                                <p id={'contact-name'}>LINKEDIN</p>
                                            </div>
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={6} key={'foo'}>
                                    <Item elevation={0} className={'item'}>
                                        <div className={'contact-div'}>
                                            <div className={'contact-image-div contact-inner-div'}>
                                                <YouTubeIcon id={'icon'}/>
                                            </div>
                                            <div className={'contact-name-div contact-inner-div'}>
                                                <p id={'contact-name'}>YOUTUBE</p>
                                            </div>
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={6} key={'foo'}>
                                    <Item elevation={0} className={'item'}>
                                        <div className={'contact-div'}>
                                            <div className={'contact-image-div contact-inner-div'}>
                                                <GitHubIcon id={'icon'}/>
                                            </div>
                                            <div className={'contact-name-div contact-inner-div'}>
                                                <p id={'contact-name'}>GITHUB</p>
                                            </div>
                                        </div>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contacts;