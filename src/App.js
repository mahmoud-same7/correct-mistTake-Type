import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App" style={{width:'100%' ,height:'100%' , background:'#FCEFE7'}}>
     <Outlet/>
    </div>
  );
}

export default App;
