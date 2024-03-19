import React, {useContext, useState } from 'react'
import { projectContext } from '../Context'
import Task from './Task';

const Sprint = ({sprint}) => {
  return (
    <div className="sprint">
      <div className="sprintheader">
        <h3> {sprint.title}: </h3>
       
        <p> {sprint.description} </p>
      </div>
      { sprint.tasks.map(task => 
        <Task key={task.id} task={task} />
      )}
    </div>
  )
}
const TaskFeed = () => {
  const {currentProject} = useContext(projectContext);
  if (currentProject === undefined) return null;
        return (
          <div className="taskfeed" key={`project${currentProject.id}`}>
          { currentProject.sprints.map(sprint =>  
              <Sprint key={sprint.id} sprint={sprint}/>
          )}

          </div>
        )
}
export default TaskFeed
