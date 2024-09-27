// src/Login.tsx

import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';

const LoginPage: React.FC = () => {
    return (
        <Container maxWidth="sm">
            <LoginBox>
                <Typography variant="h4" gutterBottom align="center">
                    Welcome Back
                </Typography>
                <Typography variant="subtitle1" gutterBottom align="center">
                    Please login to your account
                </Typography>

                <form>
                    <TextField
                        variant="outlined"
                        label="Email"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        variant="outlined"
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        sx={{ marginTop: '16px', padding: '12px 0' }}
                    >
                        Log In
                    </Button>
                </form>
                <Typography variant="body2" align="center" sx={{ marginTop: '16px' }}>
                    Don't have an account? <a href="#">Sign up</a>
                </Typography>
            </LoginBox>
        </Container>
    );
};

// Styled components using Emotion
const LoginBox = styled(Box)`
  padding: 32px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 100px;
`;

export default LoginPage;
