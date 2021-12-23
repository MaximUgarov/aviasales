export const replacePrice = (price: number): string => {
    let separator = " ";
    return  String(price).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
}