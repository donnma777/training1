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
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { ContactGoogleForm } from '@/constants/ContactGoogleForm'
import axios from 'axios'




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

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
`

const TextArea = styled.textarea`
  margin-top: 10px;
  width: 100%;
  height: 100px;
`

const Th = styled.th`
  padding-top: 10px;
`

const StyledSubmit = styled.button`
  border: 1px solid #000;
  display: block;
  padding: 18px 90px;
  font-size: 16px;
  margin: 10px auto 0;
  color: #000;
`

const StyledInput = styled.input`
  width: 100%;
  border: solid 1px #000;
  padding: 4px;
  box-sizing: border-box;
  font-size: 16px;
`


const submit = (values) => {
    // ReactHookFormは、hundleSubmitに渡した関数に、
    // registerを利用して登録した各Inputの値をObjectとして渡されてくる。
    // values.nameやvalues.genderと呼び出せる。便利ですね！

    const GOOGLE_FORM_ACTION = ContactGoogleForm.action
    // CORS対策は必須
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

    // PostのParm生成
    const submitParams = new FormData()
    submitParams.append(ContactGoogleForm.name, values.name)
    submitParams.append(ContactGoogleForm.gender, values.gender)
    submitParams.append(ContactGoogleForm.inquiry, values.inquiry)

    // 実行
    axios
        .post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
        .then(() => {
            window.location.href = '/thanks' // 成功時
        })
        .catch((error) => {
            console.log(error) // 失敗時
        })
}



export const ContactForm: React.FC<any> = () => {
    const { register, handleSubmit } = useForm({
        mode: 'onChange',
    })
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
                            <form>
                                <StyledTable>
                                    <tbody>
                                        <tr>
                                            <Th>
                                                <p>お名前</p>
                                            </Th>
                                            <td>
                                                <StyledInput type={'text'} name={'name'} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <Th>
                                                <p>メールアドレス</p>
                                            </Th>
                                            <td>
                                                <StyledInput type={'text'} gender={'gender'} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </StyledTable>
                                <p>お問い合わせ内容</p>
                                <TextArea name={'inquiry'} />
                                <StyledSubmit type={'submit'}>送信する</StyledSubmit>
                            </form>



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
