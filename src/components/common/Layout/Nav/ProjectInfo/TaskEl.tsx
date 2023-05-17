import React from 'react'
import { taskEl } from './teamData'

function TaskEl({task}: {task: taskEl[]}) {
  return (
    <div>
      {task.map((data) => (
        <div key={data.id}>{data.title}</div>
      ))}
    </div>
  )
}

export default TaskEl