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

export const GetUserId = () => {
    let storageData = GetStorageData();
    if (storageData)
        return storageData.userId;

    return null;
}

export const GetUserName = () => {
    let storageData = GetStorageData();
    if (storageData)
        return storageData.name;

    return null;
}

export const GetUserLogin = () => {
    let storageData = GetStorageData();
    if (storageData)
        return storageData.login;

    return null;
}

export const GetIsUserActive = () => {
    let storageData = GetStorageData();
    if (storageData)
        return storageData.isActive;

    return null;
}

export const UpdateUserName = (name) => {
    let storageData = GetStorageData();
    storageData["name"] = name;

    Save(storageData);
}

export const UpdateUserLogin = (login) => {
    let storageData = GetStorageData();
    storageData["login"] = login;

    Save(storageData);
}

export const Clear = () => {
    localStorage.removeItem(authenticatedData);
}

export const Save = (data) => {
    Clear();

    let authData = JSON.stringify(data);
    localStorage.setItem(authenticatedData, authData);
}

const GetStorageData = () => {
    let storageData = localStorage.getItem(authenticatedData);
    let data = JSON.parse(storageData);

    return data;
}