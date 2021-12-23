import { IitemTicketProps } from '../../types'
import { symmDuration } from '../symmDuration'


export const sortByPrice = (data: IitemTicketProps[]): IitemTicketProps[] => {
    return [...data.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        else return 0;
    })]
}



export const sortByDuration = (data: IitemTicketProps[]): IitemTicketProps[] => {
    return [...data.sort((a, b) => {
            const aSym = symmDuration(a);
            const bSym = symmDuration(b);
            if (aSym > bSym) return 1;
            if (aSym < bSym) return -1;
            else return 0;
    })]
}

export const sortByOptimal = (data: IitemTicketProps[]): IitemTicketProps[] => {
    return [...data.sort((a, b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            else {
                const aSym = symmDuration(a);
                const bSym = symmDuration(b);
                if (aSym > bSym) return 1;
                if (aSym < bSym) return -1;
                else return 0;
            }
    })]
}