import React from "react";
import './success.scss';

export const Success = (props) => {
    const { text } = props;
    return (
        <div className={"success"}>
            <svg
                className={"success__svg"}
                width={212}
                height={212}
                viewBox="0 0 212 212"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className={"success__path"}
                    d="M106 13.25C54.7805 13.25 13.25 54.7805 13.25 106C13.25 157.22 54.7805 198.75 106 198.75C157.22 198.75 198.75 157.22 198.75 106C198.75 54.7805 157.22 13.25 106 13.25ZM146.061 75.7113L102.46 136.164C101.85 137.015 101.047 137.708 100.116 138.186C99.1856 138.664 98.1543 138.914 97.108 138.914C96.0617 138.914 95.0304 138.664 94.0997 138.186C93.169 137.708 92.3656 137.015 91.7563 136.164L65.9395 100.389C65.1527 99.2922 65.9395 97.7602 67.2852 97.7602H76.9949C79.1066 97.7602 81.1148 98.7746 82.357 100.514L97.0977 120.968L129.643 75.8355C130.885 74.1172 132.873 73.082 135.005 73.082H144.715C146.061 73.082 146.847 74.6141 146.061 75.7113Z"
                    fill="black"
                    stroke="black"
                    orig-stroke="black"
                    strokeWidth={1}
                    orig-stroke-width={1}
                    animation-delay-opacity={0}
                    animation-delay-stroke={500}
                    animation-delay-fill={1500}
                    animation-duration-opacity={500}
                    animation-duration-stroke={1000}
                    animation-duration-fill={500}
                />
            </svg>
            <p className={"success__text"}>Вы {text}</p>
        </div>
    )
}
