import './App.css';
import Curstashtar from './Components/Curstashtar';
import Lastname from './Components/Lastname';
import Name from './Components/Name';
import Surname from './Components/Surname';

function App() {
  const name = "Beknazar"
  const lastName = "Pirmatov"
  const surName = "Toichubaevich"


  const users = [
    {
     name: "Beknazar",
     age: 20,
      
    },
    {
     name: "Aimeerim",
     age: 18,
      
    },
    {
     name: "Aiymkyz",
     age: 19,
      
    },
    {
     name: "Darhan",
     age: 16,
      
    }
  ]
  return (
    <div className="App">
        <Name userName={name}/>
        <Lastname lastName={lastName}/>
        <Surname surName={surName}/>

        {
        users.map((el)=>{
          return(<Curstashtar key={el.name} name={el.name} age={el.age}/>
        )})
        
        }
    </div>
  );
}

export default App;
