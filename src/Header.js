import * as React from 'react';
// import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Button to="/" component={Link}>
                    HOME
                </Button>
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

            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                <Button to="/Profile" component={Link}>
                    プロフィール
                </Button>
                <Button to="/From" component={Link}>
                    問い合わせ
                </Button>
                <Button to="/Test" component={Link}>
                    テストページ
                </Button>
            </Toolbar>
        </React.Fragment>
    );
}



export default Header;