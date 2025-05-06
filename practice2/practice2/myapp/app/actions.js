"use server"
import { createDepartment } from '@/repos/departments';
import { upsertEmployee } from '@/repos/employees';
// import { PrismaClient } from "@prisma/client"
import { redirect } from 'next/navigation';
import prisma from '@/repos/prisma';

export async function getAvailableCountByDepartment() {
  const departments = await prisma.department.findMany({
    include: {
      employees: true,
    },
  })

  const result = {}

  for (const dept of departments) {
    const available = dept.employees.filter(e => !e.away)
    result[dept.name] = available.length
  }

  return result
}

export async function createDepartmentAction(formData) {
    const department = Object.fromEntries(formData);
    await createDepartment(department);
    redirect('/');
}

export async function upsertEmployeeAction(formData) {
  const employee = Object.fromEntries(formData);
  await upsertEmployee(employee);
  redirect('/');
}
// export async function upsertEmployeeAction(formData) {
//   try {
//     const department = await prisma.department.create({
//       data: {
//         name: formData.get("name"),
//         email: formData.get("email"),
//         address:formData.get("address")
//       },
//     });
//     revalidatePath("/");
//   } catch (e) {
//     console.log("Error!");
//   }
// }



