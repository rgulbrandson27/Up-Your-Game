import React from "react"
import { useState, useEffect }from "react"
import ProgressList from "./ProgressList"
import MasteredList from "./MasteredList"
import DateIcon from "./DateIcon"

const UserDashboard = ({currentUser, addToMastered, removeFromMastered}) => {


  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen overflow-y-auto ">
      <h1 className="text-4xl tracking-wider col-span-12 row-start-1 row-span-1 text-center pt-8 font-medium">{currentUser.name}</h1>
      <div className="row-start-2 row-span-8 col-start-2 col-span-10 flex items-center justify-center">
          {/* <div className="lg:row-start-2 lg:row-span-9 row-start-2 row-span-5 col-start-4 col-span-6 lg:col-start-3 lg:col-span-4 lg:mx-6">
            <ProgressList currentUser={currentUser}/>
          </div> */}
          <div className="flex flex-col md:flex-row row-start-2 row-span-9 col-start-4 col-span-6 
          lg:col-start-7 lg:col-span-4 lg:mx-6">
          {/* <MasteredList currentUser={currentUser} addToMastered={addToMastered} removeFromMastered={removeFromMastered}/> */}
          <MasteredList currentUser={currentUser} addToMastered={addToMastered} removeFromMastered={removeFromMastered}/>
          {/* <MasteredList currentUser={currentUser} addToMastered={addToMastered} removeFromMastered={removeFromMastered}/> */}

          </div>
      </div>
    </div>
  )
}

export default UserDashboard;
