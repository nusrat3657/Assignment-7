
const Cook = ({ cook, index,  handleAddToCurrentCooking,   }) => {
    


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                {/* <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead> */}
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>{index}</th>
                        <td>{cook.name}</td>
                        <td>{cook.prepTime}</td>
                        <td>{cook.calories}</td>
                        <button onClick={handleAddToCurrentCooking} className="btn bg-[#0BE58A] py-1 px-6 rounded-full text-black font-bold hover:bg-gray-300 mt-[7%]">Preparing</button>
                    </tr>
                    {/* row 2 */}
                </tbody>
            </table>

        </div>
    );
};

export default Cook;