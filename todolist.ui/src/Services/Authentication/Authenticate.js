import {Save as SaveAuthData} from './AuthenticationDataHandler';
import Axios from 'axios';

const Authenticate = async (username, password) => {
    const loginUrl = "https://localhost:44304/accounts/Authenticate";
    let errorDescription;

    let response = await Axios
        .post(loginUrl,
            {
                login: username,
                password: password
            })
        .catch((exception) => {
            errorDescription = exception.response.data.message;
        });

    if (errorDescription != undefined)
        return { error: errorDescription };

    SaveAuthData(response.data);

    return { error: null };
}

export default Authenticate;