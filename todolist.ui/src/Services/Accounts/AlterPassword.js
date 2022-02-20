import Axios from 'axios';

import {GetToken} from '../Authentication/AuthenticationDataHandler';

const AlterPassword = async (currentPassword, newPassword) => {
    const changePasswordUrl = "https://localhost:44304/accounts/ChangePassword";
    let accessToken = GetToken();
    let errorDescription;

    await Axios
        .patch(changePasswordUrl,
            {
                oldPassword: currentPassword,
                newPassword: newPassword
            }, {headers: {"Authorization": `Bearer ${accessToken}`}})
        .catch((exception) => {
            console.log(exception);
            errorDescription = exception.response.data.message;
        });

    if (errorDescription != undefined)
        return { error: errorDescription };

    return { error: null };
}

export default AlterPassword;