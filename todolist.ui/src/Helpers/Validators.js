export const DisplayErrorIfNotFilled = (e) => {
    let field = e.target;
    let isFilled = field.value;
    if (!isFilled){
        field.classList.add("is-invalid");
        return false;
    }

    field.classList.remove("is-invalid");
}