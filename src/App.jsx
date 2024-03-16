import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cooking, setCooking] = useState([]);

  const [newCurrentCooking, setCurrentCooking] = useState([]);

  const handleAddToCook = card => {
    const isExist = cooking.find(item => item.id === card.id);
    if (!isExist) {
      setCooking([...cooking, card])
    }
    else {
      toast('Already exist');
    }
  }

  const handleAddToCurrentCooking = (cook) => {
    setCurrentCooking([...newCurrentCooking, cook])
    const cooked = cooking.filter(item => item.id !== cook.id);
    setCooking(cooked);
    
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className='md:flex mx-28'>
        <Cards handleAddToCook={handleAddToCook}></Cards>
        <div className=" lexend ml-4 border-2 w-[450px] p-5 rounded-xl">
          <h3 className="text-2xl font-bold text-center
            ">Want to cook: {cooking.length}</h3>
          <hr className="ml-14 my-5 w-[70%]" />
          <div className="overflow-x-auto w-[320px]">
            <table className="table">
              <thead>
                <tr className="">
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>

                {
                  cooking.map((cook, index) =>
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{cook.name}</td>
                      <td>{cook.prepTime}</td>
                      <td>{cook.calories}</td>
                      <button onClick={() => handleAddToCurrentCooking(cook)} className="btn bg-[#0BE58A] py-1 px-6 rounded-full text-black font-bold hover:bg-gray-300 mt-[7%]">Preparing</button>
                    </tr>
                  )
                }
              </tbody>
            </table>

          </div>

          <h3 className="mt-10 text-2xl font-bold text-center
            ">Currently cooking: {newCurrentCooking.length}</h3>
          <hr className="ml-14 my-5 w-[70%]" />
          <div className="overflow-x-auto ">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {
                  newCurrentCooking?.map((id, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{id.name}</td>
                      <td>{id.prepTime}</td>
                      <td>{id.calories}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
