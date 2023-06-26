import React, { useContext } from "react";
import TaskForm from "../components/TaskForm";
import TaskContext from "../context/TaskContext";
import { dateFormat } from "../helper";

function CreateTask(props) {
  const { latestTask, recentTasks } = useContext(TaskContext);

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-6 bg-primary text-white h-100 d-flex flex-column align-items-center justify-content-center">
          <TaskForm />
        </div>
        <div div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="card mb-3 home-card bg-primary text-white w-75 shadow-sm rounded-0">
            <div className="card-header bg-transparent border-0 d-flex">
         

              <h3>Latest Task</h3>

              <button className="btn btn-primary ms-auto">Edit</button>
            </div>
            
            <div className="card-body p-4">
             
              { latestTask ?
              <>
              <h4 className="border-bottom pb-4">{latestTask?.title}</h4>
              <p>{latestTask.description}</p>
              <div className="d-flex">
                <p>Created On: {dateFormat( latestTask.modifiedOn)}</p>
                <p>Due On: {dateFormat(latestTask.duedate)}</p>
              </div>
              </>:""
               } 
            </div>
          </div>
          <div className="card home-card bg-primary text-white w-75 shadow-sm rounded-0">
            <div className="card-header bg-transparent border-0 ">
              <h3>Recent Task</h3>
              <br/>
              <br/>
              <br/>
            
            <div className="card-body p-2">
                  
                   { recentTasks ?
                  
                    recentTasks.map((item)=>{
                      return(
                        <div key={item.id} className="d-flex">
                          <p>{item.title}</p>
                          <p className="ms-auto">{dateFormat(item.duedate)}</p>
                         </div>
                      )
                    })
                    :""
                    
                   }   
                         
          </div>
        </div>
</div>
</div>
      </div>
    </div>
  );
}

export default CreateTask;