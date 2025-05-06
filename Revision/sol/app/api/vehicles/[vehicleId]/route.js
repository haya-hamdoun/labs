import { getVehicle,deleteVehicle, updateVehicle } from "@/repos/vehicle";

export async function GET(request,{params}){
    try{
        const {vehicleId} = await params;
        const result = await getVehicle(vehicleId);
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


export async function DELETE(request,{params}){
    try{
        const {vehicleId} = await params;
        const result = await deleteVehicle(vehicleId);
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


export async function PUT(request,{params}){
    try{
        const {vehicleId} = await params;
        const body = await request.json();
        if(body.plateNumber){
            body.plateNumber = parseInt(body.plateNumber);
        }

        const result = await updateVehicle(vehicleId,body);

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