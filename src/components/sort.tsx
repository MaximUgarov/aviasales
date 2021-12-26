import React, { FC, ChangeEvent } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { ISortProps } from '../types'

const Sort: FC<ISortProps> = ({ value, onChange }: ISortProps) => {

    const handlerClick = (e: ChangeEvent<HTMLSelectElement>) => {
        const value: string = e.target.value;
        onChange(value);
    }
    const { updateSort } = useActions()

    const { sorts } = useTypeSelector(state => state.sort)
    console.log(sorts)
    return (
        <ul className="sort-block">
            {sorts.map((sort, index) => <li className={sort.active ? "sort-block__item active" : "sort-block__item"} onClick={() => updateSort(index, sorts)}>{sort.name}</li>)}
            {/* <select size={3} value={value} onChange={(e) => handlerClick(e)}>
                <option value="cheap">Самый дешевый</option>
                <option value="fast">Самый быстрый</option>
                <option value="optimal">Оптимальный</option>
            </select> */}
        </ul>
    );
};

export default Sort;