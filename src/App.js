import { ListTasks } from "./components/ListTasks";

function App() {
  return (
    <div className="mt-2 mx-auto p-4" style={{width:'97%', maxWidth:'700px', backgroundColor:'#cccccc'}}>
    <h1>App de tareas</h1>
    <hr/>
    <br/>
    <ListTasks/>
    </div>
  );
}

export default App;
