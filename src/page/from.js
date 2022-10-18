import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import MainFeaturedPost from '../MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
// import Main from './Main';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import NameField from "../components/NameField";

import MailField from "../components/MailFeld";
import MessageField from "../components/MessageField";
import FormKeys from "./FormKeys";


const sections = [
    // { title: 'Home', url: '/' },
    // { title: 'プロフィール', url: '/Profile' },
    // { title: '問い合わせ', url: '/From' },

];


const mainFeaturedPost = {
    // title: 'Reactで動いてます',
    // description:
    //     "Reactでウェブサイトを作りたい。",
    image: 'https://source.unsplash.com/random',
    // imageText: 'main image description',
    // linkText: '続きを読む',
};

// const From = {
// title: 'Reactで動いてます',
// description:
//     "Reactでウェブサイトを作りたい。",
// image: 'https://source.unsplash.com/random',
// imageText: 'main image description',
// linkText: '続きを読む',
// };

// const featuredPosts = [
//     {
//         title: 'Featured post',
//         date: 'Nov 12',
//         description:
//             'This is a wider card with supporting text below as a natural lead-in to additional content.',
//         image: 'https://source.unsplash.com/random',
//         imageLabel: 'Image Text',
//     },
//     {
//         title: 'Post title',
//         date: 'Nov 11',
//         description:
//             'This is a wider card with supporting text below as a natural lead-in to additional content.',
//         image: 'https://source.unsplash.com/random',
//         imageLabel: 'Image Text',
//     },
// ];

// const posts = [post1, post2];

const sidebar = {
    title: '無題',
    description:
        'なにか入れる',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },

    ],
    social: [
        // { name: 'GitHub', icon: GitHubIcon, href: "https://github.com/donnma777/training1"},
        // { name: 'Twitter', icon: TwitterIcon  },
        // { name: 'Facebook', icon: FacebookIcon },
    ],
};



const theme = createTheme();


const formWrapperStyle = css`
  width: 90%;
  margin: 2rem auto;
`;

const formStyle = css`
  width: 100%;
  margin: 1rem auto;
`;

const submitButtonStyles = css`
  display: block;
  height: 3rem;
  margin: 1rem auto;
`;



export default function Test() {


    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');


    const navigate = useNavigate();

    const handleClick = () => {
        setLoading(true)
        const submitParams = new FormData();

        submitParams.append(FormKeys.name, name);
        submitParams.append(FormKeys.mail, mail);
        submitParams.append(FormKeys.message, message);

        Axios.post(FormKeys.corsAnywhere + FormKeys.formUrl, submitParams).then(() => {
            setLoading(false);
            navigate("/complete");
        }).catch(() => {
            setLoading(false);
            console.log('エラーです');
        })
    };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    {/* <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid> */}


                    {/* ここから記事 */}

                    <Grid container spacing={5} sx={{ mt: 3 }}>

                        <Grid
                            item
                            xs={12}
                            md={8}
                            sx={{
                                '& .markdown': {
                                    py: 3,
                                },
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                {/* {title} */}

                                お問い合わせ
                            </Typography>
                            <Divider />
                            {/* {posts.map((post) => (
                <Markdown className="markdown" key={post.substring(0, 40)}>
                    {post}
                </Markdown>
            ))} */}


                            <div css={formWrapperStyle}>

                                <form css={formStyle}>
                                    <NameField
                                        name={name}
                                        setName={setName}
                                    />
                                    <MailField
                                        mail={mail}
                                        setMail={setMail}
                                    />
                                    <MessageField
                                        message={message}
                                        setMessage={setMessage}
                                    />
                                    <Button fullWidth variant="contained" css={submitButtonStyles} onClick={handleClick}>
                                        フォームを送信
                                    </Button>
                                </form>
                                <Backdrop
                                    sx={{
                                        color: '#fff',
                                        zIndex: (theme) => theme.zIndex.drawer + 1
                                    }}
                                    open={loading}
                                >
                                    <CircularProgress color="inherit" />
                                </Backdrop>
                            </div>
                        </Grid>



                        {/* ここまで記事 */}


                        {/* < Main  />
                        
                         */}
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

