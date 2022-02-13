const authenticatedData = "authenticated-data";

export const IsAuthenticated = () => {
    let storageData = localStorage.getItem(authenticatedData);
    return storageData !== null;
}

export const GetToken = () => {
    let storageData = localStorage.getItem(authenticatedData);
    if (storageData)
        return storageData.token;

    return null;
}

export const Clear = () => {
    localStorage.removeItem(authenticatedData);
}

export const Save = (data) => {
    localStorage.setItem(authenticatedData, data);
}