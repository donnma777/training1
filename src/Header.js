import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';




function Header() {

     

    
    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Button size="small">Subscribe</Button>
                {/* ↑らしいけどここ何使う？ */}
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}


                >
                
                    Reactでウェブサイトを作りたい
                    {/* ↑サイトタイトル */}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
                </Button>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >

                

                <Button href="/">
                    Home
                </Button>

                <Button href="/Profile">
                    プロフィール
                </Button>


                <Button href="/From">
                    問い合わせ
                </Button>


                <Button href="/Test">
                    テスト
                </Button>


                <Button href="/Test2">
                    テスト2
                </Button>

            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Header;