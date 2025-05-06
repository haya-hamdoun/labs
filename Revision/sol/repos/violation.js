import prisma from "@/repos/prisma";

export async function createViolation(vehicleId, data) {
    try {
        const vehicle = await prisma.vehicle.findUnique({
            where: { id: vehicleId }
        })

        if (!vehicle) {
            return {
                error: {
                    message: "there is no vehicle with the provided id",
                    status: 404 // not found
                }
            }
        }

        const result = await prisma.violation.create({
            data: {...data,vehicleId}
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

export async function getViolation(vehicleId, violationId) {
    try {
        const result = await prisma.violation.findFirst({
            where: { id: violationId, vehicleId: vehicleId},
        })

        if(!result){
            return {
                error: {
                    message: "Violation is not found",
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

export async function getViolations(vehicleId){
    try{

        const vehicle = await prisma.vehicle.findUnique({
            where: { id: vehicleId },
            orderBy: [
                {date: "asc"}
            ]

        })

        if (!vehicle) {
            return {
                error: {
                    message: "there is no vehicle with the provided id",
                    status: 404 // not found
                }
            }
        }

        const result = await prisma.violation.findMany({
            where:{
                vehicleId: vehicleId
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

export async function updateViolation(vehicleId,violationId, data) {
    try{
        const violation = await prisma.violation.findFirst({
            where: { id: violationId, vehicleId: vehicleId},
        })

        if (!violation) {
            return {
                error: {
                    message: 'violation not found',
                    status: 404
                }
            }
        }

        const result = await prisma.violation.update({
            where: { id: violationId },
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


export async function deleteViolation(vehicleId,violationId){
    try{

        const violation = await prisma.violation.findFirst({
            where: { id: violationId, vehicleId: vehicleId},
        })

        if (!violation) {
            return {
                error: {
                    message: 'violation not found',
                    status: 404
                }
            }
        }

        const result = await prisma.violation.delete({
            where: { id: violationId }
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