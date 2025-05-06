import { getEmployee, updateEmployee, deleteEmployee, removeEmployeeFromDepartment } from '@/repos/employees';

export async function GET(request, { params }) {
  const { department, employee } = await params;
  const result = await getEmployee(department, employee);

  if ("error" in result) {
    return Response.json(
      { message: result.error.message },
      { status: result.error.status }
    );
  }

  return Response.json(result, { status: 200 });
}

export async function PATCH(request, { params }) {
  const { department, employee } = await params;
  const body = await request.json();

  const result = await updateEmployee(department, employee, body);

  if ("error" in result) {
    return Response.json(
      { message: result.error.message },
      { status: result.error.status }
    );
  }

  return Response.json(result, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { department, employee } = await params;
  const result = await deleteEmployee(department, employee);

  if ("error" in result) {
    return Response.json(
      { message: result.error.message },
      { status: result.error.status }
    );
  }

  return Response.json(result, { status: 200 });
}
