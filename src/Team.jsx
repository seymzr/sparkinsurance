import React from 'react'
import ilham from './assets/ilham.jpeg'
import seymur from './assets/seymur.jpeg'
import arzuman from './assets/arzuman.jpeg'
import zaman from './assets/zaman.jpeg'
const Team = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold text-center text-gray-700  py-24">Bright Brains behind this idea</h2>
      <div className="team flex m-5 mx-24 flex-wrap justify-between ">
        <div className="teammember my-5 flex flex-col items-center ">
          <img className="rounded-full shadow-lg w-[300px] h-[300px]" src={zaman} alt="zamankazimov" />
          <p className="text-2xl text-center text-gray-700 font-bold p-2">Zaman Kazimov</p>
          <p className="text-lg text-gray-500 font-medium ">Backend Developer</p>
        </div>
        <div className="teammember my-5 flex flex-col items-center">
        <img className="rounded-full shadow-lg w-[300px] h-[300px]" src={arzuman} alt="arzuman" />
        <p className="text-2xl text-center text-gray-700 font-bold p-2">Arzuman Abbasov</p>
        <p className="text-lg text-gray-500 font-medium ">Data Scientist</p>
      </div>
      <div className="teammember my-5 flex flex-col items-center">
        <img className="rounded-full shadow-lg w-[300px] h-[300px]" src={seymur} alt="seymur" />
        <p className="text-2xl text-center text-gray-700 font-bold p-2">Seymur Shikhalizada</p>
        <p className="text-lg text-gray-500 font-medium ">Frontend Engineer</p>
      </div>
      <div className="teammember my-5 flex flex-col items-center">
        <img className="rounded-full shadow-lg w-[300px] h-[300px]" src={ilham} alt="ilham" />
        <p className="text-2xl text-center text-gray-700 font-bold p-2">Ilham Suleymanov</p>
        <p className="text-lg text-gray-500 font-medium ">Mobile Developer</p>
      </div>
      </div>
      
    </div>
  )
}

export default Team
