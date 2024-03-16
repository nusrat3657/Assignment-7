import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Cooking from './components/Cooking/Cooking'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'

function App() {

  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className='md:flex mx-28'>
      <Cards></Cards>
      <Cooking></Cooking>
      </div>
    </>
  )
}

export default App
