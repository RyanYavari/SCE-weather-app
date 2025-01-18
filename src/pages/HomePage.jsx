import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'

const HomePage = () => {
  return (
    <>
        <Header />
        <SearchBar />
        <WeatherCard />
    </>
  )
}

export default HomePage
