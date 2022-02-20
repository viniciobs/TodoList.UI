import Axios from 'axios';

import {GetToken} from '../Authentication/AuthenticationDataHandler';

const AlterStatus = async (active) => {
    const activateUrl = "https://localhost:44304/accounts/Activate";
    const deactivateUrl = "https://localhost:44304/accounts/Deactivate";

    let urlAction = active ? activateUrl : deactivateUrl;

    let accessToken = GetToken();
    let errorDescription;

    await Axios
        .patch(urlAction, {headers: {"Authorization": `Bearer ${accessToken}`}})
        .catch((exception) => {
            errorDescription = exception.response.data.message;
        });

    if (errorDescription != undefined)
        return { error: errorDescription };

    return { error: null };
}

export default AlterStatus;