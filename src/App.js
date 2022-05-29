 import {useState} from 'react'
 
function App() {
   
  
  const [todos, setTodos] = useState([]);
  const [todo,setTodo] = useState([{title:"",created_at:""}]);
   
  const add=()=>{
	const newData=[...todos,todo];
	 setTodos(newData);
	  
  }  
 console.log(todo);
 console.log(todos); 

  return (
	
	  <>
		  <div className="container mt-5">
			  <div className="row">
				  <div className="col-md-12 ">
					  <div className="card">
						  <div className="card-body">
							  
							  <div className="row">
								  <div className="col-5">
									  <input className="form-control" type="text" placeholder="Todo"  onChange={(e)=>setTodo({'title':e.target.value,created_at:todo.created_at})}/>
								  </div>
								  <div className="col-5">
									  <input className="form-control" type="date" placeholder="Date"  onChange={(e)=>setTodo({'created_at':e.target.value,title:todo.title})} />
								  </div>	
								  <div className="col-2">
									  <button className="btn btn-success" onClick={add}>ADD</button>
								  </div>
								  <div className="col-md-12 mt-5">
									  <table className="table table-bordered">
										  <thead>
											  <tr>
												 <th>Date</th>
												  <th>Title</th>
												  <th>Action</th>
											  </tr>
										  </thead>
										  <tbody>
											{todos.map((item)=>(
													<tr>
														<td>{item.title}</td>
														<td>{item.created_at}</td>
														<td>Action</td>
													</tr>
											))}
											  
										  </tbody>
									  </table>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>

		  </div>
	  </>
  );
}

export default App;
