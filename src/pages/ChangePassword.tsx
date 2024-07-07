import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { changePassword } from '../api/userApi';

const ChangePassword = () => {

    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const navigate = useNavigate();

    const { token } = useParams();

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            const passwordData = await changePassword(token, newPassword)
            console.log('Pwd', passwordData)
            if (passwordData?.status === 200) {
                toast.success('Password has been changed succesfully');
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
                        Create New Password
                    </Typography>

                    {/* Form */}
                    <Box width={{ xs: "100%", sm: "100%", md: "100%", lg: "100%" }}>
                        <TextField id="outlined-basic"
                            label="New Password"
                            variant="outlined"
                            value={newPassword}
                            onChange={(e: any) => setNewPassword(e.target.value)}
                            fullWidth
                            margin="normal" />

                        <TextField
                            id="outlined-basic"
                            label="Confirm Password"
                            variant="outlined"
                            value={confirmPassword}
                            onChange={(e: any) => setConfirmPassword(e.target.value)}
                            fullWidth
                            margin="normal" />

                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            onClick={handleChangePassword}
                            type="submit"
                            sx={{ marginTop: 2, backgroundColor: '#4ea1d3' }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
}

export default ChangePassword;
