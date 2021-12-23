import { useEffect, useRef } from 'react'

export const useInterval = (start: boolean, callback: () => Promise<void>, delay: number) => {
    const savedCallback = useRef(callback)

    useEffect(() => {
        savedCallback.current = callback
    }, [start, callback])

    useEffect(() => {
        if (!start) {
            return
        }
        const id = setInterval(() => savedCallback.current(), delay)
        return () => clearInterval(id)
    }, [start, delay])
}