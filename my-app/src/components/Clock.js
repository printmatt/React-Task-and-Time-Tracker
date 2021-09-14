import { useState,useEffect } from "react"

const Clock = () => {
    const [date,setDate] = useState(new Date());
    useEffect(() => {
        var timerID = setInterval(() => tick(),1000 );

        return function cleanup() {
            clearInterval(timerID);
          };
    })
    const tick = () => {
        setDate( new Date());
      }
    

    return (
        <div>
            <h2 onChange = {tick}>Current Time {date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock
