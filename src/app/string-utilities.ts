export function isEmpty(s: string | null | undefined) {
    if (s == null || s == undefined || s.trim().length == 0) {
        return true;
    }
    return false;
}