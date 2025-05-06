import prisma from "@/repos/prisma";

export async function createVehicle(data) {
    try {
       const result = await prisma.vehicle.create({
            data: data
        })
        return result;
    } catch (e) {
        return {
            error: {
                message: "Internal Server Error",
                status: 500 // internal server error 
            }
        }
    }
}

export async function getVehicle(vehicleId) {
    try {
        const result = await prisma.vehicle.findUnique({
            where: { id: vehicleId },
            include:{violations: true}
        })

        if(!result){
            return {
                error: {
                    message: "there is no [] with the provided id",
                    status: 404 // not fount
                }
            }
        }

        return result;
    } catch (e) {
        return {
            error: {
                message: "Internal Server Error",
                status: 500 // internal server error 
            }
        }
    }
}

export async function getVehicles(){
    try{
        const result = await prisma.vehicle.findMany({
            include:{
                violations:{
                    orderBy:[{date: "asc"}]
                }
            }
        });
        return result;
    }catch(e){
        return {
            error: {
                message: "Internal Server Error",
                status: 500 // internal server error 
            }
        }
    }
}

export async function updateVehicle(vehicleId, data) {
    try{
        const vehicle = await prisma.vehicle.findUnique({
            where: { id: vehicleId }
        })

        if (!vehicle) {
            return {
                error: {
                    message: 'Vehicle not found',
                    status: 404
                }
            }
        }

        const result = await prisma.vehicle.update({
            where: { id: vehicleId },
            data: data
        })
        return result;
    }catch(e){
        return {
            error: {
                message: "Internal Server Error",
                status: 500 // internal server error 
            }
        }
    }
}


export async function deleteVehicle(vehicleId){
    try{

        const vehicle = await prisma.vehicle.findUnique({
            where: { id: vehicleId }
        })

        if (!vehicle) {
            return {
                error: {
                    message: 'Vehicle not found',
                    status: 404
                }
            }
        }

        const result = await prisma.vehicle.delete({
            where: { id: vehicleId }
        });

        return result;
    }catch(e){
        return {
            error: {
                message: "Internal Server Error",
                status: 500 // internal server error 
            }
        }
    }
}