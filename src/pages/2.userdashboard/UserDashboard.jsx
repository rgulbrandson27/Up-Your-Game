import React from "react"
import { useState, useEffect }from "react"
import ProgressList from "./ProgressList"
import MasteredList from "./MasteredList"
import DateIcon from "./DateIcon"

const UserDashboard = ({user}) => {

  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen overflow-scroll">
      <h1 className="text-4xl tracking-wider col-span-12 row-start-1 row-span-1 text-center py-2">{user.name}</h1>
 
      {/* <div className="row-start-2 row-span-8 col-start-2 col-span-10 bg-pink-200 flex items-center justify-center"> */}
          {/* <div className="lg:row-start-2 lg:row-span-9 row-start-2 row-span-5 col-start-4 col-span-6 lg:col-start-3 lg:col-span-4 lg:mx-6">
            <ProgressList user={user}/>
          </div> */}
          <div className="lg:row-start-2 lg:row-span-9 row-start-2 row-span-9 col-start-4 col-span-6 lg:col-start-7 lg:col-span-4 lg:mx-6">
          <MasteredList user={user}/>
          </div>
      {/* </div> */}
    </div>
  )
}

export default UserDashboard
