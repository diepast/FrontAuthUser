import * as React from 'react';
import '../styles/AppBarMUI.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { Link as LinkRouter } from 'react-router-dom'
import Logo from "../images/Logo.png"
import IconUser from "../images/userIcon.png"
import { useDispatch } from 'react-redux';

const pages = [
    <LinkRouter to='/heros' className="liks_router"> HEROES </LinkRouter>,
    <LinkRouter to='/villains' className="liks_router"> VILLAINS </LinkRouter>
];
const settings = [
    <LinkRouter to='/signin' className="liks_router"> SIGN-IN </LinkRouter>,
    <LinkRouter to='/signup' className="liks_router"> SIGN-UP </LinkRouter>,
];

function AppBarNav() {
    const dispatch = useDispatch()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            onMouseLeave={() => dispatch({ type: "showNav", payload: false })}
            className="appBar" position="static" sx={{ bgcolor: 'black' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LinkRouter className="liks_router icon-logo" to="/">
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                            width: 50,
                            height: 50,
                            backgroundImage: `url(${Logo})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                            className="nav_icon"
                        />

                    </LinkRouter>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <div width="50px">
                            <Box sx={{
                                mr: 1,
                                width: 50,
                                height: 50,
                                backgroundImage: `url(${Logo})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}
                                className="nav_icon"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            />
                        </div>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <button
                                    onClick={handleCloseNavMenu} class="custom-btn btn-7 menu_responsive_button">
                                    <span>
                                        <LinkRouter to='/' className="liks_router">HOME</LinkRouter>
                                    </span>
                                </button>
                            </MenuItem>
                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <button
                                        onClick={handleCloseNavMenu} class="custom-btn btn-7 menu_responsive_button">
                                        <span>{page}</span>
                                    </button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <button key={index}
                                onClick={handleCloseNavMenu} class="custom-btn btn-7">
                                <span>{page}</span>
                            </button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }} className="user-button">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src={IconUser} />
                        </IconButton>
                        <Menu

                            sx={{ mt: '45px', backgroundColor: "black" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu} style={{ backgroundColor: "black" }}>

                                    <button
                                        onClick={handleCloseNavMenu} class="custom-btn btn-7 menu_responsive_button">
                                        <span>{setting}</span>
                                    </button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default AppBarNav;