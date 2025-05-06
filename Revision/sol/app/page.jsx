"use client";
import { useState, useEffect, useRef } from "react";
import Violation from "./violation";
import { getNumberOfPaidViolationsAction, getNumberOfUnpaidViolationsAction } from "./actions";

export default function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [stale, setStale] = useState(true);
  const [paid,setpaid] = useState(0);
  const [unpaid, setUnpaid] = useState(0);


  async function handleAddViolation(event, vehicleId) {
    event.preventDefault();
    const formData = new FormData(event.target.form);
    const date = formData.get("date");
    const category = formData.get("category");

    await fetch(`/api/vehicles/${vehicleId}/violations`,{
      method: "POST",
      body: JSON.stringify({date,category})
    });

    setStale(true);
    event.target.form.reset();
  }

  async function handleAddVehcile(e){
    e.preventDefault();
    const formData = new FormData(e.target.form);

    const owner = formData.get("owner");
    const plate = formData.get("plate");

     await fetch("/api/vehicles",{
      method: "POST",
      body:JSON.stringify({ownerName: owner,plateNumber: plate})
    })
    setStale(true);
    e.target.form.reset();
  }

  useEffect(() => {
    async function get() {
      const res = await fetch("/api/vehicles");
      const data = await res.json();
      const paidCount = await getNumberOfPaidViolationsAction();
      const unpaidCount = await getNumberOfUnpaidViolationsAction();
      setpaid(paidCount);       
      setUnpaid(unpaidCount); 
      setVehicles(data);
    }

    if (stale) {
      get();
      setStale(false);
    }
  }, [stale]);

  return (
    <div>
      <div>
        <h2>Traffic Violations</h2>
        <div className="paid bg-green-500 w-xs">{`${paid}`}</div>
        <div className="unpaid bg-red-500 w-xs">{unpaid}</div>
      </div>
      {vehicles.map((v) => (
        <div key={v.id} className="m-3">
          <h3>{`#${v.plateNumber}/ ${v.ownerName}`}</h3>

          <div className="violations">
            {
              v.violations.map(vio=><Violation key={vio.id} violation={vio} reftech={()=>setStale(true) } vehicleId={v.id}></Violation>)
            }
          </div>

          <form>
            <input type="datetime-local" name="date" className="border-balck borde-solid border-3" />
            <label htmlFor="speeding">Speeding</label>
            <input type="radio" id="speeding "name="category" value="speeding"/>
            <label htmlFor="parking">Parking</label>
            <input type="radio" id="parking" name="category" value="parking"/>
            <button onClick={(e)=>handleAddViolation(e,v.id)} className="bg-gray-700 text-gray-100">Create</button>
          </form>
        </div>
      ))}

      <form>
        <input type="number" placeholder="Plate #" name="plate"/>
        <input type="text" name="owner" placeholder="Owner" />
        <button onClick={(e)=>handleAddVehcile(e)} >Create</button>
      </form>
    </div>
  );
}
