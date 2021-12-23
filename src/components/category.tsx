import React, { FC, ChangeEvent } from 'react';
import { ICategoryProps } from '../types';



const Category: FC<ICategoryProps> = ({ items, setCategory, deleteCategory }: ICategoryProps) => {

    const handlerClick = (e: ChangeEvent<HTMLInputElement>) => {
        const checked: boolean = e.target.checked
        const value: string | number = e.target.value
        if (checked) {
            setCategory(value)
        } else {
            deleteCategory(value)
        }
    }

    return (
        <div className="categories">
            <p className="categories__title">Количество пересадок</p>
            {items.map((i, index) => <div className="categories-item" key={index}>
                <label className="categories-item-checkbox-container">{i.title}
                    <input type="checkbox" value={i.value} onChange={(e) => handlerClick(e)}/>
                    <span className="categories-item-checkbox__check"></span>
                </label>
            </div>)}
        </div>
    );
};

export default Category;