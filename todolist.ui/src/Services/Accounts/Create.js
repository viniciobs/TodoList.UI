import Axios from 'axios';
import {Save as SaveAuthData} from '../Authentication/AuthenticationDataHandler';

const Create = async (name, login, password) => {
    const accountCreationUrl = "https://localhost:44304/accounts/New";
    let errorDescription;

    let response = await Axios
        .post(accountCreationUrl,
            {
                name: name,
                login: login,
                password: password
            })
        .catch((exception) => {
            errorDescription = exception.response.data.message;
        });

    if (errorDescription != undefined)
        return { error: errorDescription };

    SaveAuthData(response);

    return { error: null };
}

export default Create;