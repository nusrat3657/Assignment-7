import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Cooking from './components/Cooking/Cooking'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cooking, setCooking] = useState([]);
  const [count, setCount] = useState(0);

  const handleAddToCook = card => {
    const newCount = count + 1;
    setCount(newCount);

    const newCooking = [...cooking, card];
    
    const isExist = cooking.find(item => item.id === card.id);
    if(!isExist){
      setCooking(newCooking)
    }
    else{
      toast('Already exist');
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className='md:flex mx-28'>
        <Cards handleAddToCook={handleAddToCook}></Cards>
        <Cooking cooking={cooking}></Cooking>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
