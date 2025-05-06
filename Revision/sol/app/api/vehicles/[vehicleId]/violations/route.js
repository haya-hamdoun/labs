import { getViolations,createViolation } from "@/repos/violation";

export async function GET(request,{params}) {
    try{
        const {vehicleId} = await params;
        const result = await getViolations(vehicleId);
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
        const {vehicleId} = await params;
        const body = await request.json();
        if(!body.category){
            return Response.json({ error: 'Some data is missing. Please make sure to include all data (category)' }, { status: 400 }) // 400 bad request
        }

        let isDate = false;
        if("date" in body){
            isDate = true;
            body.date = new Date(body.date);
        }

        let data = body;
        if(isDate){
            data = {category: body.category, date: body.date}
        }else{
            data = {category: body.category}
        }
        

        const result = await createViolation(vehicleId, data);
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