import Cook from "../Cook/Cook";

const Cooking = ({ cooking }) => {

    return (
        <div className=" lexend ml-4 border-2 w-[450px] p-5 rounded-xl">
            <h3 className="text-2xl font-bold text-center
            ">Want to cook: {cooking.length}</h3>
            <hr className="ml-14 my-5 w-[70%]" />
            <div className="overflow-x-auto w-[320px]">
                <table className="table">
                    {/* head */}
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
                cooking.map(cook => <Cook key={cook.id} cook={cook}></Cook>)
            }
        </div>
    );
};

export default Cooking;