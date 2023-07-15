import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

function Picday() {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
                api_key: 'gXNUYQhWTEw00qCkJgpoAXCqPdsAVecfkTaEl27M'
            }
        })
            .then(response => {
                setData(response.data);
                console.log()
            })
            .catch(error => {
                console.error(error);
            });
    }, []);



    return (
        <div className='sm:py-4 p-2 sm:px-12 text-white bg-gradient-to-tr from-slate-900 to-slate-700 h-full'>
            <h1 className='text-2xl font-bold mb-4'>Picture of the Day</h1>
            {data && (
                <div className=' '>
                    <div className='flex flex-col gap-4 items-center p-4 bg-slate-700 rounded-lg shadow-2xl border border-white/10'>
                        <h2 className='text-2xl font-bold'>{data.title}</h2>

                        <img className='w-1/2 rounded-md drop-shadow-xl' src={data.url} alt={data.title} />
                        <div className='flex flex-row gap-5 text-xs text-gray-300'>

                            <p>{data.copyright}</p>
                            <p>{data.date}</p>
                        </div>

                        <p className='text-base'>{data.explanation}</p>

                        <a href={data.hdurl} className='bg-blue-500 p-4 hover:-translate-y-1 rounded-xl transition hover:shadow-blue-500 hover:drop-shadow-2xl font-semibold'> High Quality Image</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Picday