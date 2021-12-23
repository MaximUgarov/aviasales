export const minsToHours = (minuts: number): string => {
    let mins: any = minuts % 60;
    let hours: any = (minuts - mins) / 60;
    if (mins < 10) mins = '0' + mins;
    if (hours < 10) hours = '0' + hours;
    return hours + 'ч' + ' ' + mins + 'м'; 
}