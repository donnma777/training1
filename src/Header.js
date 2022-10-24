import * as React from 'react';
// import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

function Header() {
    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Button size="small" href="/">Home</Button>
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

                {/* <Button variant="outlined" size="small">
                    Sign up
                </Button> */}
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                <Button href="/Profile">
                    プロフィール
                </Button>
                <Button href="/From">
                    問い合わせ
                </Button>
                <Button href="/Test">
                    テスト
                </Button>
            </Toolbar>
        </React.Fragment>
    );
}

// Header.propTypes = {
//     sections: PropTypes.arrayOf(
//         PropTypes.shape({
//             title: PropTypes.string.isRequired,
//             url: PropTypes.string.isRequired,
//         }),
//     ).isRequired,
//     title: PropTypes.string.isRequired,
// };

export default Header;