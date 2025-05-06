import { createDepartment, getAllDepartments } from '@/repos/departments';


export async function GET(request, { params }) {
    try {
        const departments = await getAllDepartments();
        if ("error" in departments) {
            return Response.json(
                { message: departments.error.message }, 
                { status: departments.error.status }
                );
        } else {
            return Response.json(departments, { status: 200 });
        }
    } catch (e) {
        return Response.json(
            {message: 'Failed to fetch departments'},
            { status: 500 }
        );
    }
}


export async function POST(request, { params }) {
    try {
        const body = await request.json();
        const department = await createDepartment(body);
        if ("error" in department) {
            return Response.json(
                { message: decks.error.message }, 
                { status: deck.error.status }
                );
        } else {
            return Response.json(department, { status: 201 });
        }
    } catch (e) {
        return Response.json(
            {message: 'Failed to create department'},
            { status: 500 } 
        );
    }
}

