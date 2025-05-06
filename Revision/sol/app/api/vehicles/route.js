import { getVehicles, createVehicle } from "@/repos/vehicle";


export async function GET(request,{params}) {
    try{
        const result = await getVehicles();
        if("error" in result){
            return Response.json(result.error,{status: result.error.status});
        }
        else{
            return Response.json(result, { status: 200 })
        }
    }catch(e){
        return Response.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function POST(request,{params}){
    try{
        const body = await request.json();
        if(!body.plateNumber || !body.ownerName){
            return Response.json({ error: 'Some data is missing. Please make sure to include all data (plate number - owner name)' }, { status: 400 }) // 400 bad request
        }

        body.plateNumber = parseInt(body.plateNumber);

        const result = await createVehicle(body);
        if("error" in result){
            return Response.json(result.error,{status: result.error.status});
        }
        else{
            return Response.json(result, { status: 200 })
        }
    }catch(e){
        return Response.json({ error: 'Internal server error' }, { status: 500 })
    }
}