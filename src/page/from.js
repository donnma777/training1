import React, { useState } from "react";
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


const sections = [];


const mainFeaturedPost = {
    image: 'https://source.unsplash.com/random',
};

const sidebar = {
title: 'Googleフォームと連動してるらしい。',
  description:
'※試用段階なので個人情報はいれないでね'

  ,
  archives: [
    { title: 'スプレッドシート', url: 'https://docs.google.com/spreadsheets/d/13RwdHsOlYvM66m-H1xt8elavKLgEo28j6eCmsPaEHgY/edit?usp=sharing' },
  ],
    social: [],
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



export default function From() {


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