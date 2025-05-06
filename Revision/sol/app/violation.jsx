

export default function Violation({violation, reftech , vehicleId}){
    async function handlePayViolation(e,vid, vehicleId){
        await fetch(`api/vehicles/${vehicleId}/violations/${vid}`,{
            method: "PUT",
            body: JSON.stringify({isPaid:true})
        })
        reftech();
    }

    async function handleDeletViolation(e,vid, vehicleId){
        await fetch(`api/vehicles/${vehicleId}/violations/${vid}`,{method:"DELETE"});
        reftech();
    }
    return(
        <div>
            <h3>{`${new Date(violation.date).toLocaleString()} ${violation.category}`}</h3>
            {violation.isPaid? (
                <div>
                <div className="text-green-500">Paid</div>
                <button className="bg-red-500 text-gray-100" onClick={(e)=>handleDeletViolation(e,violation.id,vehicleId)}>Delete</button>
                </div>
            ):(<div>
                <button onClick={(e)=>handlePayViolation(e,violation.id,vehicleId)} className="bg-gray-700 text-gray-100">Pay</button>
            </div>)}
        </div>
    );
}