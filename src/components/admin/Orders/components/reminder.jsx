import React, { useState } from "react";

export default function Reminders(){
const [reminder , setReminder] = useState([
{name:'Start Our Meeting' , icon:<i className="bx bx-check-circle" /> , status:'done'},
{name:'Start Our Meeting' , icon:<i className="bx bx-check-circle" /> , status:'done'},
{name:'Start Our Meeting' , icon:<i className="bx bx-check-circle" /> , status:'done'},
]
)

return(

<div className="reminders">
                    <div className="header">
                        <i className="bx bx-note" />
                        <h3>Remiders</h3>
                        <i className="bx bx-filter" />
                        <i className="bx bx-plus" />
                    </div>
                    <ul className="task-list">
                      {reminder.map(arr=>(
                       <li key={arr.name} className={arr.status === 'done' ? 'completed' : 'not-completed'}>
                       <div className="task-title">
                                {arr.icon}
                                <p>{arr.name}</p>
                            </div>
                            <i className="bx bx-dots-vertical-rounded" />
                      </li>
                       
                      ))}
                    
                    </ul>
                </div>
)

}