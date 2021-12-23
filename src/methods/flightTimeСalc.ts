export const flightTimeСalc = (durationTime: number, airStartDate: Date): string=> {
   let endDate = new Date(airStartDate)
   endDate.setMinutes(airStartDate.getMinutes() + durationTime)
   return airStartDate.getHours() + ':' + airStartDate.getMinutes() + '-' + endDate.getHours() + ':' + endDate.getMinutes()
}