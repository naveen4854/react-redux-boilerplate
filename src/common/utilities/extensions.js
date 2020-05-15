export const isNullorEmpty = (value) => {
    return (!value || value === undefined || value === "" || value.length === 0);
}