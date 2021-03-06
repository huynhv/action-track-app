import React from "react";
import { Input, FormGroup } from "reactstrap";
import { ACTIONS } from "../shared/actions";
import PaginationMem from "./PaginationMem";

function DashboardMem2(props) {
  const progColor = (act) => {
    switch (act.progress) {
      case 1:
        return "";
      case 2:
        return "text-info";
      case 3:
        return "text-success";
      default:
        return "text-danger";
    }
  };

  const prog = (act) => {
    switch (act.progress) {
      case 1:
        return "Confirmed";
      case 2:
        return "In Progress";
      case 3:
        return "Completed";
      default:
        return "--";
    }
  };
  // sort((a, b) => {
  //   if (a.priority > b.priority) return 1;
  //   return -1;
  // })
  const actionTable = ACTIONS.map((act) => {
    return (
      <tr>
        <td>{act.id + 1}</td>
        <td style={{ width: "50%" }}>{act.action}</td>
        <td>{act.priority}</td>
        <td>{act.by}</td>
        <td>{act.department}</td>
        <td>
          <FormGroup
            className="form-control-sm"
            style={{
              margin: "0",
              padding: "0.5",
            }}
          >
            <Input
              type="select"
              value={prog(act)}
              className={progColor(act)}
              style={{
                height: "30px",
                fontSize: "14px",
                margin: "0",
                padding: "0",
              }}
            >
              <option>Not Confirmed</option>
              <option>Confirmed</option>
              <option>In Progress</option>
              <option>Completed</option>
            </Input>
          </FormGroup>
        </td>
      </tr>
    );
  });

  return (
    <>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-1 mb-3">
          <h3>Dashboard</h3>
        </div>

        <div class="table-responsive">
          <table class="table table-sm">
            <thead class="thead-dark align-middle">
              <tr>
                <th class="align-middle">#</th>
                <th class="align-middle">Action</th>
                <th class="align-middle">Priority</th>
                <th class="align-middle">By</th>
                <th class="align-middle">Department</th>
                <th class="text-center align-middle">
                  <button class="btn-sm btn btn-primary text-light">
                    Submit Progress
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>{actionTable}</tbody>
          </table>
        </div>
        <PaginationMem />
      </main>
    </>
  );
}

export default DashboardMem2;
