import React from 'react'
import { Box, Button, FormControl, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getParamsByName } from '../utils/helper';
import { forgotPassword } from '../api/userApi';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const CheckEmail = () => {

    const navigate = useNavigate()
    const emailID = getParamsByName("email");

    console.log("Resending link to:", emailID);

    const handleResendLink = async (e: any) => {
        e.preventDefault();
        try {
            const resendLink = await forgotPassword(emailID)
            if (resendLink?.status === 200) {
                toast.success('Email has been resent successfully');
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
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
                            Check your email
                        </Typography>
                        <Typography className='resetlink_text'>We sent a password reset link to {emailID}</Typography>


                        {/* Form */}
                        <Box width={{ xs: "100%", sm: "100%", md: "100%", lg: "100%" }} sx={{ marginTop: '5%' }}>
                            <Typography className='resetlink_text'>Didn&apos;t receive the email? Click to Resend </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                onClick={handleResendLink}
                                type="submit"
                                sx={{ marginTop: 2, backgroundColor: '#4ea1d3' }}
                            >
                                Resend Link
                            </Button>
                        </Box>
                    </Box>
                </Stack>
            </Box>

        </>
    )
}

export default CheckEmail