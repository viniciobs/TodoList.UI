import Axios from 'axios';

import {GetToken} from '../Authentication/AuthenticationDataHandler';

const EditAccount = async (name, login) => {
    const accountEditUrl = "https://localhost:44304/accounts/Edit";

    let accessToken = GetToken();
    let errorDescription;

    await Axios
        .patch(accountEditUrl,
            {
                name: name,
                login: login
            }, {headers: {"Authorization": `Bearer ${accessToken}`}})
        .catch((exception) => {
            console.log(exception);
            errorDescription = exception.response.data.message;
        });

    if (errorDescription != undefined)
        return { error: errorDescription };

    return { error: null };
}

export default EditAccount;