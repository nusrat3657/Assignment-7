

const Cooking = ({ cooking, currentCooking, handleAddToCurrentCooking }) => {

    return (
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

            {
                cooking.map((cook, index) =>  <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        <tr key={index}>
                            <th>{index+1}</th>
                            <td>{cook.name}</td>
                            <td>{cook.prepTime}</td>
                            <td>{cook.calories}</td>
                            <button onClick={handleAddToCurrentCooking} className="btn bg-[#0BE58A] py-1 px-6 rounded-full text-black font-bold hover:bg-gray-300 mt-[7%]">Preparing</button>
                        </tr>
                    </tbody>
                </table>
    
            </div>)
            }
            
            <h3 className="mt-10 text-2xl font-bold text-center
            ">Currently cooking: </h3>
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
            {
                currentCooking.map(currentCook => <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        <tr>
                            <th></th>
                            <td>{currentCook.name}</td>
                            <td>{currentCook.prepTime}</td>
                            <td>{currentCook.calories}</td>
                        </tr>
                    </tbody>
                </table>
            </div>)
            }
        </div>
    );
};

export default Cooking;