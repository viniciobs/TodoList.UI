import Axios from 'axios';
import {GetToken, GetUserId} from '../Authentication/AuthenticationDataHandler';

const LoadData = async () => {
    let loadAccountDataUrl = "https://localhost:44304/users/" + GetUserId();
    let errorDescription;

    let response = await Axios
        .get(loadAccountDataUrl)
        .catch(() => {
            errorDescription = "Unable to load account data";
        });

    if (errorDescription != undefined)
        return { error: errorDescription };

    return { error: null, response: response };
}

export default LoadData;