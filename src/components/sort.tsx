import React, { FC, ChangeEvent } from 'react';
import { ISortProps } from '../types'

const Sort: FC<ISortProps> = ({ value, onChange }: ISortProps) => {

    const handlerClick = (e: ChangeEvent<HTMLSelectElement>) => {
        const value: string = e.target.value;
        onChange(value);
    }

    return (
        <ul className="sort-block">
            <select size={3} value={value} onChange={(e) => handlerClick(e)}>
                <option value="cheap">Самый дешевый</option>
                <option value="fast">Самый быстрый</option>
                <option value="optimal">Оптимальный</option>
            </select>
        </ul>
    );
};

export default Sort;