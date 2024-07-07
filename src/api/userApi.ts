import axios from 'axios'


export async function loginUser(email: any, password: any) {
    const url = `https://sampleproject-backend.onrender.com/api/auth/login`
    console.log(url)
    try {
        const response = await axios.post(url, JSON.stringify({
            "email": email,
            "password": password
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Response API', response)
        if (response.status === 200) {
            return response;
        }



    } catch (error) {
        console.log('Error', error)
    }
}

export async function forgotPassword(email: any) {
    const url = `https://sampleproject-backend.onrender.com/api/auth/forgot-password`
    console.log(url)
    try {
        const response = await axios.post(url, JSON.stringify({
            "email": email
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Response API', response)
        if (response.status === 200) {
            return response;
        }



    } catch (error) {
        console.log('Error', error)
    }
}

export async function changePassword(resetToken: any, newPassword: any) {
    console.log(resetToken, newPassword)
    const url = `https://sampleproject-backend.onrender.com/api/auth/reset-password/${resetToken}`
    try {
        const response = await axios.post(url, JSON.stringify({
            "newPassword": newPassword
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Response API', response)
        if (response.status === 200) {
            return response;
        }
    } catch (error) {
        console.log(error)
    }
}


export async function getUserDetailsByID(userToken: any, userId: any) {
    const url = `https://sampleproject-backend.onrender.com/api/auth/users/${userId}`
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': userToken
            }
        });
        console.log('Response getUserDetailssByID API', response)
        if (response.status === 200) {
            return response;
        }



    } catch (error) {
        console.log('Error', error)
    }
}