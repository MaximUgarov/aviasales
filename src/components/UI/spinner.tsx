import React, { Fragment } from 'react';


interface ISpinnerProps {
    size: string;
    thickness: string;
    color: string;
    animationSpeed: string
    background: boolean;
}

const Spinner = ({ size, thickness, color, animationSpeed, background }: ISpinnerProps) => {
    return (

        <Fragment>
            <style jsx='true'>{`
        #spinner {
        display: inline-block;
        width: ${size};
        height: ${size};
        border: ${thickness} solid ${background ? 'rgb(255, 255, 255)' : 'rgba(255,255,255,.3)'};
        border-radius: 50%;
        border-top-color: ${color};
        animation: spin ${animationSpeed} ease-in-out infinite;
        position: absolute;
        top: calc(50% - ${parseInt(size) / 2}px);
        left: calc(50% - ${parseInt(size) / 2}px);
    }
  
        @keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }
        @-webkit-keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }
    .spinner-background {
        position: absolute;
        width: 100%;
        left: 0;
        background-color: #B3B3B382;
        height: 86.7%;
    top: 63px;
    border-radius: 5px;
        }
    `}</style>

            <div id="spinner" />
            {background ? <div className="spinner-background" /> : null}
        </Fragment>

    );
};

export default Spinner;