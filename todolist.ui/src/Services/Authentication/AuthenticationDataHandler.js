const authenticatedData = "authenticated-data";

export const IsAuthenticated = () => {
    let storageData = localStorage.getItem(authenticatedData);
    return storageData !== null;
}

export const GetToken = () => {
    let storageData = GetStorageData();
    if (storageData)
        return storageData.token;

    return null;
}

export const GetUsername = () => {
    let storageData = GetStorageData();
    if (storageData)
        return storageData.userName;

    return null;
}

export const Clear = () => {
    localStorage.removeItem(authenticatedData);
}

export const Save = (data) => {
    let authData = JSON.stringify(data);
    localStorage.setItem(authenticatedData, authData);
}

const GetStorageData = () => {
    let storageData = localStorage.getItem(authenticatedData);
    let data = JSON.parse(storageData);

    return data;
}