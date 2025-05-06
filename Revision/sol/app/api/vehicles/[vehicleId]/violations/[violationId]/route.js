import { getViolation, deleteViolation, updateViolation } from "@/repos/violation";


export async function GET(request,{params}){
    try{
        const {vehicleId, violationId} = await params;
        const result = await getViolation(vehicleId, violationId);
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
        const {vehicleId, violationId} = await params;
        const result = await deleteViolation(vehicleId, violationId);
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
        const {vehicleId, violationId} = await params;
        const body = await request.json();

        if("date" in body){
            body.date = new Date(body.date);
        }

        if ("isPaid" in body) {
            if (body.isPaid) {
              body.isPaid = true;
            } else {
              body.isPaid = false;
            }
          }

        const result = await updateViolation(vehicleId,violationId, body);

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