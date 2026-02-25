import HomePage from "./components/homepage"
import LoginPage from "./pages/Login-page"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import NotFound from "./pages/NotFound"
import SignUpPage from "./pages/SignupPage"
function App() {

  return (
    <>
     <Routes>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
       <Route path="/" element={<Navigate to="/signup" replace />}/>
       <Route path="/home" element={<HomePage/>}/>
       <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
