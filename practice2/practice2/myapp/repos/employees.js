import prisma from './prisma.js';

// create 
export async function createEmployee(data) {
  try {
    return await prisma.employee.create({
      data: data,
    });
  } catch (e) {
    return {
      error: {
        message: 'Failed to create employee',
        status: 500
      }
    };
  }
}

//create/update
export async function upsertEmployee(data) {
  try {
    const result = await prisma.employee.upsert({
      where: { name: data.name }, 
      update: {
        position: data.position,
        away: data.away,
        department: data.department
      },
      create: {
        name: data.name,
        position: data.position,
        away: data.away,
        department: data.department
      }
    });
    return result;
  } catch (e) {
    return {
      error: {
        message: 'Error upserting employee',
        status: 500
      }
    };
  }
}


// read 
export async function getAllEmployees(deptName) {
  try {
    const dept = await prisma.department.findUnique({
      where: {
        name: deptName
      },
      include: {
        employees: true
      }
    });

    if (!dept) {
      return {
        error: {
          message: 'Department not found',
          status: 404
        }
      };
    }

    

    return dept.employees;

  } catch (e) {
    console.error("Prisma error in getAllEmployees:", e);
    return {
      error: {
        message: 'Failed to fetch employees',
        status: 500
      }
    };
  }
}

// export async function getAllEmployees(deptName) {
//     try {
//         const dept = await prisma.dept.findUnique({
//             where: {
//                 name: deptName
//             }
//         });
//         if (!dept) {
//             return {
//                 error: {
//                     message: 'department not found',
//                     status: 404
//                 }
//             };
//         }

//         const employees = await prisma.employee.findMany({
//             where: {
//                 department: deptName
//             }
//         });

//         if (employees.length === 0) {
//             return {
//                 error: {
//                     message: 'No employee found for this department',
//                     status: 404
//                 }
//             };
//         }

//         return employees;
//     } catch (e) {
//         return {
//             error: {
//                 message: 'Failed to fetch employees',
//                 status: 500
//             }
//         };
//     }
// }

export async function getEmployee(deptName, empName) {
  try {
    const employee = await prisma.employee.findFirst({
      where: {
        name: empName,
        department: deptName
      }
    });
    if (!employee) {
      return {
        error: {
          message: 'employee not found in department',
          status: 404
        }
      };
    }
    return employee;
  } catch (e) {
    return {
      error: {
        message: 'Failed to fetch employee',
        status: 500
      }
    };
  }
}

// update Slide
export async function updateEmployee(deptName, empName, data) {
  try {
    const employee = await prisma.employee.findFirst({
      where: {
        name: empName,
        department: deptName
      }
    });
    if (!employee) {
      return {
        error: {
          message: 'employee not found in department',
          status: 404
        }
      };
    }

    const result = await prisma.employee.update({
      where: {
        name: empName
      },
      data,
    });
    return result;
  } catch (e) {
    return {
      error: {
        message: 'Failed to update employee',
        status: 500
      }
    };
  }
}

// export async function checkValidate(data, department) {
//   const employeeExists = await prisma.employee.findFirst({
//     where: { name: data.name, department: department }
//   });

//   return employeeExists;
// }


// delete Slide
export async function deleteEmployee(deptName, empName) {
  try {
    const employee = await prisma.employee.findFirst({
      where: {
        name: empName,
        department: deptName
      }
    });
    if (!employee) {
      return {
        error: {
          message: 'employee not found in department',
          status: 404
        }
      };
    }

    const result = await prisma.employee.delete({
      where: {
        name: empName
      }
    });
    return result;
  } catch (e) {
    return {
      error: {
        message: 'Failed to delete employee',
        status: 500
      }
    };
  }
}

