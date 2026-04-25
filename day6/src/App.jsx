import Layout from "./Components/ContexAPI/Layout"
import { UserProvider } from "./Contex/UseContex"

const App =()=>{
  return(
    <div>
    <UserProvider>
      <Layout/>
    </UserProvider>
    
    </div>
  )
  
}

export default App
