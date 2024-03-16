const CurrentCooking = ({currentCooking}) => {
    const { name, calories, prepTime } = currentCooking;

    return (
        <div className="overflow-x-auto">
        <table className="table">
            <tbody>
                <tr>
                    <th></th>
                    <td>{currentCooking.name}</td>
                    <td>{prepTime}</td>
                    <td>{calories}</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default CurrentCooking;