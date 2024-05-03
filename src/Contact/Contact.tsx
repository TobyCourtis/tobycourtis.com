import './Contact.css'
import * as React from 'react';
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
                                <Grid item xs={6} key={'email-item'}>
                                    <Item elevation={0} className={'item'}>
                                        <a href={"mailto:toby.courtis@gmail.com"}>
                                            <div className={'contact-div'}>
                                                <div className={'contact-image-div contact-inner-div'}>
                                                    <EmailIcon id={'icon'}/>
                                                </div>
                                                <div className={'contact-name-div contact-inner-div'}>
                                                    <p id={'contact-name'}>EMAIL</p>
                                                </div>
                                            </div>
                                        </a>
                                    </Item>
                                </Grid>

                                <Grid item xs={6} key={'linkedin-item'}>
                                    <Item elevation={0} className={'item'}>
                                        <a href={"https://www.linkedin.com/in/tobycourtis/"}>
                                            <div className={'contact-div'}>
                                                <div className={'contact-image-div contact-inner-div'}>
                                                    <LinkedInIcon id={'icon'}/>
                                                </div>
                                                <div className={'contact-name-div contact-inner-div'}>
                                                    <p id={'contact-name'}>LINKEDIN</p>
                                                </div>
                                            </div>
                                        </a>
                                    </Item>
                                </Grid>

                                <Grid item xs={6} key={'yt-item'}>
                                    <Item elevation={0} className={'item'}>
                                        <a href={"https://www.youtube.com/user/TobyCourtis"}>
                                            <div className={'contact-div'}>
                                                <div className={'contact-image-div contact-inner-div'}>
                                                    <YouTubeIcon id={'icon'}/>
                                                </div>
                                                <div className={'contact-name-div contact-inner-div'}>
                                                    <p id={'contact-name'}>YOUTUBE</p>
                                                </div>
                                            </div>
                                        </a>
                                    </Item>
                                </Grid>

                                <Grid item xs={6} key={'github-item'}>
                                    <Item elevation={0} className={'item'}>
                                        <a href={"https://github.com/TobyCourtis"}>
                                            <div className={'contact-div'}>
                                                <div className={'contact-image-div contact-inner-div'}>
                                                    <GitHubIcon id={'icon'}/>
                                                </div>
                                                <div className={'contact-name-div contact-inner-div'}>
                                                    <p id={'contact-name'}>GITHUB</p>
                                                </div>
                                            </div>
                                        </a>
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