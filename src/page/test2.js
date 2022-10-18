import * as React from 'react';
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


import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
// import { useSate } from "React";
// import { SettingsInputComponent } from '@material-ui/icons';



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


const RegisterData = async (userData) => {
    let res = await axios.post("https://docs.google.com/forms/u/0/d/e/1FAIpQLSenG8UvlUtyKq1FvEv98xb2Z7vFZ94z1EVe5o7LjZruIcPl7Q/formResponse", JSON.stringify(userData), {
    });
    console.log(res);
    res = res.data;
    return res;
};


export default function Test2() {

    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');

    // const [age, setage] = React.useState(0);


    // React.useEffect(() => {
    //     (async () => {
    //         const listData = await RegisterData();
    //         console.log(listData);
    //     })();
    // }, []);

    const onChangeName = (event) => {
        // console.log(event.target.value);
        setName(event.target.value);
    }

    const onChangeAge = (event) => {
        // console.log(event.target.value);
        setAge(event.target.value);
    }

    const sendData = async () => {
        console.log(name);
        console.log(age);
        const userData = {
            name: name,
            age: age
        };
        const res = await RegisterData(userData);
        console.log(res);
        return res.data;
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
                            </Typography>
                            <Divider />
                            {/* {posts.map((post) => (
                <Markdown className="markdown" key={post.substring(0, 40)}>
                    {post}
                </Markdown>
            ))} */}
                            <div>

                                <Stack direction="row" spacing={2}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="名前"
                                        onChange={(event) => onChangeName(event)}
                                    />
                                    <TextField

                                        required
                                        id="outlined-required"
                                        label="年齢"
                                        onChange={(event) => onChangeAge(event)}
                                    />
                                    <Button
                                        padding='3'
                                        onClick={sendData}
                                        variant="contained"
                                        endIcon={<SendIcon />}>
                                        登録
                                    </Button>
                                </Stack>
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

