import React from "react";

const Card = ({ children }) => {
    return (
        <div className="max-w-sm mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="p-6 rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default Card;
