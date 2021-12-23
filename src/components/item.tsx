import React, { FC } from 'react';
import { IitemTicketProps } from '../types'
import { minsToHours } from '../methods/minsToHours'
import { declOfNum } from '../methods/declOfNum'
import { replacePrice } from '../methods/replacePrice'
import { flightTimeСalc } from '../methods/flightTimeСalc'

interface IitemProps {
    item: IitemTicketProps
}


const Item: FC<IitemProps> = ({ item }: IitemProps) => {

        return (
            <div className="item-wrapper">
                <div className="item-header">
                    <p className="item-header__price">{replacePrice(item.price)} Р</p>
                    <div className="item-header-img-wrapper">
                        <img src={`https://pics.avs.io/99/36/${item.carrier}.png`} alt={item.carrier} className="item header__img" />
                    </div>
                </div>
                <div className="item-stops-wrapper">
                    {item.segments.map((i, index) =>
                        <div className="item-stops-container" key={index}>
                            <div className="item-stops-content">
                                <p className="item-stops__title">{i.origin} – {i.destination}</p>
                                <p className="item-stops__content">{flightTimeСalc(i.duration, new Date(i.date))}</p>
                            </div>
                            <div className="item-stops-content">
                                <p className="item-stops__title">В пути</p>
                                <p className="item-stops__content">{minsToHours(i.duration)}</p>
                            </div>
                            <div className="item-stops-content">
                                <p className="item-stops__title">{i.stops.length} {declOfNum(i.stops.length, ['пересадка', 'пересадки', 'пересадок'])}</p>
                                <p className="item-stops__content">{i.stops.toString().replace(/,/gi, ', ')}</p>
                            </div>
                        </div>)}
                </div>
            </div>
        )
};

export default Item;