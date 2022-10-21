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
        '2022/10/19',
    archives: [],
    social: [],
};

const theme = createTheme();

export default function Profile() {
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
                                プロフィール
                            </Typography>
                            <Divider />

                            <Typography>
                                initial:M
                            </Typography>
                            <Typography>
                                年齢性別:ご想像にお任せします

                            </Typography>
                            <Typography>
                                プログラミングスキル:JavaScript,React
                            </Typography>
                            <Typography>
                                使ったことあるOSとか:Windows,Linux,Cisco（マックって食べれるのかな( ﾟдﾟ)？？？）
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
