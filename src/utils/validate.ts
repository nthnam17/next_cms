export default function isNullOrEmpty(str: string) {
    return str === null || str === undefined || str === 'undefined' || str === 'null' || str === '' || str.length === 0;
}
