import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import MainFeaturedPost from '../MainFeaturedPost';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const sections = [
];

const mainFeaturedPost = {
    image: 'https://source.unsplash.com/random',
};

const sidebar = {
    title: '無題',
    description:
        'なにか入れる',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
    ],
    social: [],
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

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangeAge = (event) => {
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

