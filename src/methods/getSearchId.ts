import axios from "axios"

export const getSearchId = async (setSearchId: (value: string) => void, startPooling: () => void, stopPooling: () => void) => {
    try {
        const req = await axios.get('https://front-test.beta.aviasales.ru/search')
        const searchId: string = req.data.searchId
        setSearchId(searchId)
        startPooling()
    } catch (error) {
        setSearchId('')
        stopPooling()
    }
}