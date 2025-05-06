import prisma from './prisma.js';


//create
export async function createDepartment(data) {
    try {
        const result = await prisma.department.create({
            data,
        });
        return result;
    } catch (e) {
        return {
            error: {
                message: 'Error creating department',
                status: 500
            }
        };
    }
}

//read
export async function getAllDepartments() {
    try {
        const departments = await prisma.department.findMany({
            include: {
                employees: true
              }
        });
        return departments;
    } catch (e) {
        return {
            error: {
                message: 'Failed to fetch departments',
                status: 500
            }
        };
    }
}

export async function getDepartment(name) {
    try {
        const department = await prisma.department.findUnique({
            where: {
                name: name
            }
        });
        if (!department) {
            return {
                error: {
                    message: 'department not found',
                    status: 404
                }
            };
        } else {
            return department;
        }

    } catch (e) {
        return {
            error: {
                message: 'Error fetching department',
                status: 500
            }
        };
    }
}

//update
export async function updateDepartment(name, data) {
    try {
        const result = await prisma.department.update({
            where: {
                name: name
            },
            data,
        });
        return result;
    } catch (e) {
        return {
            error: {
                message: 'Failed to update department',
                status: 500
            }
        };
    }
}

//delete
export async function deleteDepartment(name) {
    try {
        const result = await prisma.department.delete({
            where: {
                name: name
            }
        });
        return result;
    } catch (e) {
        return {
            error: {
                message: 'Error deleting department',
                status: 500
            }
        };
    }
}


