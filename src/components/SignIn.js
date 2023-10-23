import * as React from 'react';
import '../styles/AppBarMUI.css'
import '../styles/Forms.css'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link as LinkRouter } from 'react-router-dom'

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div className='form_container'>
            <div className='complement_container'>
                <div className='letter_container'>
                    <p>
                        <span>S</span>
                        <span>I</span>
                        <span>G</span>
                        <span>N</span>
                        <span>I</span>
                        <span>N</span>
                    </p>
                </div>
                <div className='image_container'></div>
            </div>
            <Container component="main" maxWidth="xs" className='form_main_container'>
                <CssBaseline />
                <Box
                    sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            className='signin_order'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            className='signin_order'
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            className='signin_order'
                        />

                        <button
                            type="submit"
                            class="custom-btn btn-7 form_submit_button">
                            <span>
                                SIGN IN
                            </span>
                        </button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <LinkRouter to='/signup' className="liks_router links_forms"> Don't have an account? Sign Up </LinkRouter>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </div>
    );
}