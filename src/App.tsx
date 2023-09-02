import Nav from './components/Nav'
import SideNav from './components/SideNav'
import './App.css'
import Banner from './components/Banner'
import MainBody from './components/MainBody/MainBody'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <SideNav/>
      <Banner/>
      <MainBody/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
