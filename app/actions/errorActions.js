export function hasError(bool) {
    return {
        type: 'ERROR',
        hasError: bool
    };
}