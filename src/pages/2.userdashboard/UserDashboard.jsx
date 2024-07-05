import React from "react"
import ProgressList from "./ProgressList"
import MasteredList from "./MasteredList"
import DateIcon from "./DateIcon"


const UserDashboard = () => {
  return (
    <div className="flex flex-col place-items-center">
      <h1 className="text-4xl tracking-wider p-4 pb-8">RAINZ</h1>
 
      <div className="flex flex-row gap-4">
          <MasteredList className=""/>
          <MasteredList className=""/>
      </div>
    </div>
  )
}

export default UserDashboard
