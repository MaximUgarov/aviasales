import React, { FC, Fragment } from 'react';
interface ISkeletonProps {
    quantity: number;
}


const SkeletonItem: FC<ISkeletonProps> = ({ quantity }: ISkeletonProps) => {

    const item = (index: number) => <div key={index} className="item-wrapper">
        <div className="item-header">
            <p className="item-header__price skeleton">
                <span className="flare" />
            </p>
            <div className="item-header-img-wrapper skeleton">
                <span className="flare" />
            </div>
        </div>
        <div className="item-stops-wrapper">
            <div className="item-stops-container">
                <div className="item-stops-content">
                    <p className="item-stops__title skeleton"> <span className="flare" /></p>
                    <p className="item-stops__content skeleton"> <span className="flare" /></p>
                </div>
                <div className="item-stops-content">
                    <p className="item-stops__title skeleton"> <span className="flare" /></p>
                    <p className="item-stops__content skeleton"> <span className="flare" /></p>
                </div>
                <div className="item-stops-content">
                    <p className="item-stops__title skeleton"> <span className="flare" /></p>
                    <p className="item-stops__content skeleton"> <span className="flare" /></p>
                </div>
            </div>
            <div className="item-stops-container">
                <div className="item-stops-content">
                    <p className="item-stops__title skeleton"> <span className="flare" /></p>
                    <p className="item-stops__content skeleton"> <span className="flare" /></p>
                </div>
                <div className="item-stops-content">
                    <p className="item-stops__title skeleton"> <span className="flare" /></p>
                    <p className="item-stops__content skeleton"> <span className="flare" /></p>
                </div>
                <div className="item-stops-content">
                    <p className="item-stops__title skeleton"> <span className="flare" /></p>
                    <p className="item-stops__content skeleton"> <span className="flare" /></p>
                </div>
            </div>
        </div>
    </div>

    let content = []
    let i = 0;
    while (i < quantity) { 
        content.push({});
        i++;
    }

    return (
        <Fragment>
            {content.map((i, index) => item(index))}
        </Fragment>
    );
};

export default SkeletonItem;