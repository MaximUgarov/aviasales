import React, { FC, Fragment, useState } from 'react';
import { IitemTicketProps } from '../types'
import Item from './item';
import SkeletonItem from './UI/skeletonItem';
import Spinner from './UI/spinner';

interface ListProps {
    items?: IitemTicketProps[],
    isLoading: boolean;
}

const List: FC<ListProps> = ({ isLoading, items }: ListProps) => {

    const [listLength, setLength] = useState<number>(5)

    return (
        <Fragment>
            {items && isLoading ? items.slice(0, listLength).map((i, index) => <Item item={i} key={index + 1} />) : <><SkeletonItem quantity={listLength} /> <Spinner size='100px' thickness='5px' color='#008EFF' animationSpeed="2s" background={true} /></>}
            <div className="list-update-btn" onClick={() => setLength(listLength + 5)}>
                <p className="list-update-btn__text">Показать еще 5 билетов!</p>
            </div>
        </Fragment >
    );
};

export default List;