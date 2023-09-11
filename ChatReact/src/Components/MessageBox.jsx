import React, { useState } from 'react';

export default function MessageBox({ message, date, position = '' }) {
    
    const [ pos , setposition] = useState(position == 'left' ? '' : 'flex justify-end')

    return (
        <article className={pos}>
            <div className="bg-white rounded-lg p-2 shadow-md w-64 break-words m-2.5 dark:bg-gray-800">
                <p className="text-gray-700 dark:text-white text-sm">{message}</p>
                <div className="text-right mt-2">
                    <span className="text-xs text-gray-500">{date}</span>
                </div>
            </div>
        </article>
    )
}