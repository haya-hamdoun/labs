"use server";

import Employees from './employees';
import { getAvailableCountByDepartment, createDepartmentAction, upsertEmployeeAction } from '@/app/actions';


export default async function Departments({ departments }) {
  const availableCounts = await getAvailableCountByDepartment();

  return (
    <>
      {departments.map((dept) => (
        <div key={dept.name} className="department">
          <div className="department-header">
            {dept.name} <code>&lt;{dept.email}&gt;</code>
            <span style={{ float: 'right' }}>{availableCounts[dept.name] || 0}</span>
          </div>

          <Employees department={dept.name} />

          <form className="input-row" action={upsertEmployeeAction}>
            <input type="hidden" name="department" value={dept.name} />
            <input name="employee" type="text" placeholder="Employee" />
            <input name="position" type="text" placeholder="Position" />
            <button type="submit" className="create-button">Create</button>
          </form>
        </div>
      ))}

      <form className="input-row" action={createDepartmentAction}>
        <input name="name" type="text" placeholder="Department" />
        <input name="email" type="text" placeholder="Email" />
        <input name="address"  hidden type="text" placeholder="Email" />
        <button type="submit" className="create-button">Create</button>
      </form>
    </>
  );
}

