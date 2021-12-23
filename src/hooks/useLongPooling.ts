import { useEffect, useState } from "react"
import { useInterval } from "./useInterval"
import { IitemTicketProps } from '../types'
import { longPollingReq } from '../methods/longPollingReq'



export const useLongPooling = (searchId: string, setIsLoading: (value: boolean) => void) => {

    const [polling, setPolling] = useState<boolean>(false)
    const [delay, setDelay] = useState<number>(1000)
    const [data, setData] = useState<IitemTicketProps[]>([])

    useInterval(polling,
        async () => {
            longPollingReq(searchId, setData, setPolling, delay, setDelay, data)
        }
        , delay)

    useEffect(() => {
        if (data.length > 0) setIsLoading(true);
    }, [data])

    const startPooling = () => setPolling(true)
    const stopPooling = () => setPolling(false)

    return {
        startPooling,
        stopPooling,
        data
    }
}