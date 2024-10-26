import React, { useEffect, useState } from 'react'
import Card from './Card'

import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import humidity_icon from "../Assets/humidity.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import search_icon from "../Assets/search.png"

export const API_KEY = "ad4e46487d981475bd36555a522eae18"
const WeatherApp = () => {
    const [value, setValue] = useState('Kathmandu')
    const [icon, setIcon] = useState(cloud_icon)

    const [response, setResponse] = useState({
        temp: "",
        location: "",
        humidity: "",
        wind_speed: "",
        error: ""
    })
    const search = async () => {
        if (!value) {
            return
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=Metric&appid=${API_KEY}`

            const res = await fetch(url)
            if (!res.ok) {
                setResponse({
                    error: "City not found. Please try again."
                })
                return
            }
            const data = await res.json()
            if (!data.weather || !data.main) {
                setResponse({
                    error: "Invalid response from the server"
                })
                return
            }
            if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
                setIcon(clear_icon)
            }
            else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
                setIcon(cloud_icon)
            }
            else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
                setIcon(drizzle_icon)
            }
            else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
                setIcon(drizzle_icon)
            }
            else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
                setIcon(rain_icon)
            }
            else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
                setIcon(rain_icon)
            }
            else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
                setIcon(snow_icon)
            } else {
                setIcon(clear_icon)
            }
            if (data.main.humidity === undefined || data.wind.speed === undefined || data.main.temp === undefined || data.name === undefined) {
                setResponse({
                    error: "Something Went Wrong"
                })
            } else {
                setResponse({
                    humidity: data.main.humidity,
                    wind_speed: Math.floor(data.wind.speed),
                    temp: Math.floor(data.main.temp),
                    location: data.name,
                })
            }
        } catch (error) {
            setResponse({
                error: "Something went wrong. Please try again later."
            })
        }

    }

    useEffect(() => {
        search()
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card>
                {/* input */}
                <div className="w-full flex items-center justify-between bg-white border shadow-sm p-2 rounded">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && search()}
                        placeholder="Search weather in your city"
                        className="outline-none border-none p-2 rounded-l-md w-full text-gray-700"
                    />
                    <button
                        onClick={search}
                        className="w-[40px] h-[40px] bg-slate-100 flex items-center justify-center rounded-r-md">
                        <img src={search_icon} alt="Search" className="w-5 h-5" />
                    </button>
                </div>

                {/* main functionalities */}
                {
                    response.error ? (
                        <>
                            <p className='text-base font-normal text-white'>{response.error}</p>
                        </>
                    ) : (
                        <div className="flex items-center justify-center flex-col">
                            <img src={icon} alt="cloud" width={80} height={80} />
                            <h1 className='text-3xl font-bold text-white '>{response.temp}°C</h1>
                            <h2 className='text-xl font-semibold text-white'>{response.location}</h2>

                            <div className="flex items-center space-x-3">
                                <div className="flex items-center justify-center rounded shadow-sm border p-2 border-white space-x-3">
                                    <img src={humidity_icon} alt="humidity" width={20} height={20} />
                                    <div className="flex items-start text-center flex-col">
                                        <h3 className='text-sm font-normal text-white'>{response.humidity} %</h3>
                                        <h3 className='text-xs font-normal text-white'>Humidity</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center rounded shadow-sm border p-2 border-white space-x-3">
                                    <img src={wind_icon} alt="humidity" width={20} height={20} />
                                    <div className="flex items-start text-center flex-col">
                                        <h3 className='text-sm font-normal text-white'>{response.wind_speed}Km/hr</h3>
                                        <h3 className='text-xs font-normal text-white'>Wind Speed</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </Card>
        </div>
    )
}

export default WeatherApp