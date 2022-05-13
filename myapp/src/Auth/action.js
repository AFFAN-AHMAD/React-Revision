export const Login_Success = "Login_Success";
export const Login_Failure = "Login_Failure";
export const LogOut = "LogOut"
export const loginSuccess = (payload) => {
    return {
        type: Login_Success,
        payload
    }
}
export const loginFailure = (payload) => {
    return {
        type: Login_Failure,
    }
}
export const logOut = () =>
{
    return {
        type:LogOut
    }
    }
export const login = async (dispatch,{email,password}) => {
    
    try {
        let res = await fetch(`https://reqres.in/api/login`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        let data = await res.json();
        console.log(data);
        dispatch(loginSuccess(data.token))
    }
    catch (err)
    {
        dispatch(loginFailure(err))
    }
}