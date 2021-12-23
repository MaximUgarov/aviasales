import { IitemTicketProps } from '../../types'
import { symmDuration } from '../symmDuration'


export const sortByPrice = (data: IitemTicketProps[]) => {
    return [...data.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        else return 0;
    })]
}



export const sortByDuration = (data: IitemTicketProps[]) => {
    return [...data.sort((a, b) => {
        if (a.segments && b.segments) {
            const aSym = symmDuration(a);
            const bSym = symmDuration(b);
            if (aSym > bSym) return 1;
            if (aSym < bSym) return -1;
            else return 0;
        } else return 0;
    })]
}

export const sortByOptimal = (data: IitemTicketProps[]) => {
    return [...data.sort((a, b) => {
        if (a.segments && b.segments) {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            else {
                const aSym = symmDuration(a);
                const bSym = symmDuration(b);
                if (aSym > bSym) return 1;
                if (aSym < bSym) return -1;
                else return 0;
            }
        }
        else return 0;
    })]
}