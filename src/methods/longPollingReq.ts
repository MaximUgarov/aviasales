import axios from 'axios'
import { IitemTicketProps } from '../types'


export const longPollingReq = async (searchId: string, setData: (value: IitemTicketProps[]) => void, setPolling: (value: boolean) => void, delay: number, setDelay: (value: number) => void, setIsLoading: (value: boolean) => void, data?: IitemTicketProps[]) => {
    try {
        const req = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
        const stop: boolean = req.data.stop
        if (data) {
            const dataLen: number = data?.length | 0
            if (dataLen > 1) setIsLoading(true)
        }
        setData(data ? [...data, req.data.tickets ? req.data.tickets : []] : req.data.tickets)
        if (stop) {
            setPolling(false)
        }
        setDelay(delay <= 10000 ? delay + 1000 : delay)
    } catch (error: any) {
        const status: number = error.response.status
        if(status !== 500) {
            setPolling(false)
        } 
    }


}


