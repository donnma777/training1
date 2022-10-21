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

const sections = [];

const mainFeaturedPost = {
    image: 'https://source.unsplash.com/random',
};

const sidebar = {
    title: '最終更新',
    description:
        '2022/10/21',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
    ],
    social: [],
};

const theme = createTheme();

export default function HOME() {
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
                                HOME
                            </Typography>
                            <Divider />

                            <Typography>
                                Reactでウェブサイトを作ってみました。
                            </Typography>
                            <Typography>
                                勉強も兼ねてこのサイトで検証しています。

                            </Typography>
                            <Typography>
                                右下に今回作成したsampleコード（GitHub）あるので参考にどうぞ
                            </Typography>
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



