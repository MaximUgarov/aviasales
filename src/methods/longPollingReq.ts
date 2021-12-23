import axios from 'axios'
import { IitemTicketProps } from '../types'


export const longPollingReq = async (searchId: string, setData: (value: IitemTicketProps[]) => void, setPolling: (value: boolean) => void, delay: number, setDelay: (value: number) => void, data: IitemTicketProps[]) => {
    try {
        const req = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
        const stop: boolean = req.data.stop
        const newTickets: IitemTicketProps = req.data.tickets
        setData(data.concat(newTickets))
        if (stop) {
            setPolling(false)
        }
        setDelay(delay <= 10000 ? delay + 1000 : delay)
    } catch (error: any) {
        const status: number = error.response.status
        if (status !== 500) {
            setPolling(false)
        }
    }


}


