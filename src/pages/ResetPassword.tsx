import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../api/userApi';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleResetPassword = async (e: any) => {

        e.preventDefault();
        try {
            const resetPasswordData = await forgotPassword(email)

            let responseMsg = resetPasswordData?.data.msg
            console.log('reset', resetPasswordData?.data.msg)
            if (resetPasswordData?.status === 200) {
                toast.success(responseMsg.toString());

                navigate(`/checkemail?email=${email}`)
            } else if (resetPasswordData?.status === 404) {
                toast.success(responseMsg.toString());
            }



        } catch (error) {
            console.log(error)
        }


    }

    return (
        <Box margin={2} padding={2}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            {/* Your logo and navigation code */}
            <a className="navbar-brand d-flex align-items-center" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <span className="brand-shape d-inline-block">&nbsp;</span>
                <span className="brand-text fw-7"
                    style={{
                        marginLeft: "10%",
                        // fontFamily: 'Nunito Sans',
                        fontFamily: 'Roboto',
                        fontSize: '24px',
                        fontWeight: 800,
                        color: '#4ea1d3'
                    }}>expensia</span>
            </a>
            <Stack
                direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
                height={"80vh"}
                justifyContent={"center"}
                alignItems={{ xs: "center", sm: "center", md: "center", lg: "center" }}
                gap={2.5}
            >
                <Box>
                    <Typography
                        fontFamily={"Roboto"}
                        fontSize={{ xs: "18px", sm: "24px", md: "30px", lg: "34px" }}
                        fontWeight={"700"}
                        color={"#333"}
                    >
                        Reset Password
                    </Typography>
                    <Typography className='resetlink_text'>Enter your email address to receive a password reset link.</Typography>


                    {/* Form */}
                    <Box width={{ xs: "100%", sm: "100%", md: "100%", lg: "100%" }} sx={{ marginTop: '5%' }}>
                        <FormControl variant="outlined" sx={{ width: '100%', }}>
                            <InputLabel required sx={{ color: "#9CA3AF", fontWeight: 500, fontSize: "18px" }}
                                htmlFor="outlined-adornment-email">Email</InputLabel>

                            <OutlinedInput required
                                name="email"
                                autoComplete="off"
                                id="email"
                                sx={{ width: '100%', background: '#fffff', fontFamily: 'Roboto', fontWeight: 500, fontSize: "18px", color: "#111928" }}
                                className="textfield"

                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}


                                label="Email"
                            />
                        </FormControl>

                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            onClick={handleResetPassword}
                            type="submit"
                            sx={{ marginTop: 2, backgroundColor: '#4ea1d3' }}
                        >
                            Send Password Reset Link
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
}

export default ResetPassword;
