import { createEmployee, getAllEmployees, upsertEmployee } from '@/repos/employees.js';

export async function GET(request, { params }) {
  try {
    const department =  await params.department;
    const result = await getAllEmployees(department);
    if ("error" in result) {
      return Response.json(
        { error: result.error },
        { status: 404 }
      );
    }
    return Response.json(
      result,
      { status: 200 }
    );
  } catch (e) {
    return Response.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}

export async function POST(request, { params }) {
  try {
    const department = await params.department;
    const data = await request.json();

    const result = await upsertEmployee({
      name: data.name,
      position: data.position,
      away: data.away,
      department: department,
    });

    if ("error" in result) {
      return Response.json({ error: result.error }, { status: 400 });
    }

    return Response.json(result, { status: 201 });
  } catch (e) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
// export async function POST(request, { params }) {
//   try {
//     const department = await params.department;
//     const data = await request.json();

//     // Validate required fields
//     if (!data.name || !data.position) {
//       return Response.json(
//         { error: 'Name and position are required' },
//         { status: 400 }
//       );
//     }

//     // Create the employee
//     const result = await createEmployee({
//       name: data.name,
//       position: data.position,
//       away: data.away || false, // Default to false if not provided
//       department: department,
//     });

//     if ("error" in result) {
//       return Response.json(
//         { error: result.error },
//         { status: 400 }
//       );
//     }

//     return Response.json(
//       result,
//       { status: 201 }
//     );
//   } catch (e) {
//     console.error("Error creating employee:", e);
//     return Response.json(
//       { error: 'Server error' },
//       { status: 500 }
//     );
//   }
// }
