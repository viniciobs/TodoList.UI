import Axios from 'axios';
import {GetToken, GetUserId} from '../Authentication/AuthenticationDataHandler';

const LoadData = async () => {
    let loadAccountDataUrl = "https://localhost:44304/users/" + GetUserId();
    let accessToken = GetToken();
    let errorDescription;

    let response = await Axios
        .get(loadAccountDataUrl, {headers: {"Authorization": `Bearer ${accessToken}`}})
        .catch(() => {
            errorDescription = "Unable to load account data";
        });

    if (errorDescription != undefined)
        return { error: errorDescription };

    return { error: null, data: response.data };
}

export default LoadData;