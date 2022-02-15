export const ValidateRequiredFields = (form) => {
    const validatableTypes = ['INPUT','SELECT','TEXTAREA'];
    let isValid = true;

    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        console.log(element.tagName);

        let isValidatable = validatableTypes.some(x => x == element.tagName);
        if (!isValidatable) continue;

        let isRequired = element.hasAttribute('required');
        if (!isRequired) continue;

        if (element.value)
            removeInvalidClass(element);
        else
        {
            isValid = false;
            addInvalidClass(element);
        }
    }

    return isValid;
}

const addInvalidClass = (element) => {
    element.classList.add("is-invalid");
}

const removeInvalidClass = (element) => {
    element.classList.remove("is-invalid");
}