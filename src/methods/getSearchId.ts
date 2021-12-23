import axios from "axios"

export const getSearchId = async (setSearchId: (value: string) => void, setPolling: (value: boolean) => void) => {
    try {
        const req = await axios.get('https://front-test.beta.aviasales.ru/search')
        const searchId: string = req.data.searchId
        setSearchId(searchId)
        setPolling(true)
    } catch (error) {
        setSearchId('')
        setPolling(false)
    }
}