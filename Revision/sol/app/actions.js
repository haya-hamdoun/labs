"use server"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
const prisma = new PrismaClient();

export async function getNumberOfUnpaidViolationsAction(){
    const unpaid = await prisma.violation.aggregate({
        _count: {
            isPaid: true
        },
        where: {isPaid:false}
    })
    return unpaid._count.isPaid;
}

export async function getNumberOfPaidViolationsAction(){
    const paid = await prisma.violation.aggregate({
        _count: {
            isPaid: true
        },
        where: {isPaid:true}
    })
    return paid._count.isPaid;
}