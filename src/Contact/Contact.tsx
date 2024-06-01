import './Contact.css';
import * as React from 'react';
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ReactGA from "react-ga4";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface IContactProps {
    name: string;
    icon: React.ElementType;
    url: string;
}

const ContactItem: React.FC<IContactProps> = ({name, icon: Icon, url}) => {
    const handleClick = () => {
        console.log('event tracking started')
        ReactGA.event({
            category: 'link_category',
            action: 'contact_link_click',
            label: 'contact_click_' + name,
        });
        console.log('event tracking finished')
    };

    return (
        <Grid item xs={6}>
            <Item elevation={0} className={'item'}>
                <a href={url} onClick={handleClick}>
                    <div className={'contact-div'}>
                        <div className={'contact-image-div contact-inner-div'}>
                            <Icon id={'icon'}/>
                        </div>
                        <div className={'contact-name-div contact-inner-div'}>
                            <p id={'contact-name'}>{name}</p>
                        </div>
                    </div>
                </a>
            </Item>
        </Grid>
    );
};

const contactItems: IContactProps[] = [
    {name: 'EMAIL', icon: EmailIcon, url: 'mailto:toby.courtis@gmail.com'},
    {name: 'LINKEDIN', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/tobycourtis/'},
    {name: 'YOUTUBE', icon: YouTubeIcon, url: 'https://www.youtube.com/user/TobyCourtis'},
    {name: 'GITHUB', icon: GitHubIcon, url: 'https://github.com/TobyCourtis'},
];

const Contacts: React.FC = () => {

    return (
        <div className={'contact content'}>
            <div>
                <div>
                    <h2 className={"section-title"}>Contact</h2>
                </div>

                <div className={"contacts-outer-div"}>
                    <div className={"contacts-inner-div"}>
                        <Box sx={{flexGrow: 1}}>
                            <Grid container rowSpacing={3} columnSpacing={{xs: 4}}>
                                {contactItems.map((item, index) => (
                                    <ContactItem key={index} name={item.name} icon={item.icon} url={item.url}/>
                                ))}
                            </Grid>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
