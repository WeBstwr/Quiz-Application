import Dashboard from "./pages/Dashboard/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
     <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
