import './App.css'
import Doctor from './Components/Doctor'

function App() {
  
  let doctores = [
    { id: 1, nombre: 'Rick Sanchez', especialidad: 'Gastroenterologo'},
    { id: 2, nombre: 'Julius Hibbert', especialidad: 'Dermatologo'},
    { id: 3, nombre: 'Nick Riviera', especialidad: 'Otorrinolaringologo'},
    { id: 4, nombre: 'John Zoidberg', especialidad: 'Cirujano'}
  ]

  return (
    <>
      {doctores.map(() => <Doctor/>)}
    </>fggfgfgfgfgfgfgfgit add 
  )
}

export default App
