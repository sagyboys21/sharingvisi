import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
} from "@coreui/react";

// import usersData from "./UsersData";
import axios from "axios";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const usersData = () => {
  axios
    .get("https://sharingvision-backend.herokuapp.com/user")
    .then((repos) => {
      console.log(repos.data);
      this.setState({
        usersData: repos.data,
      });
      // return repos.data;
    });
};

const Users = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            <div class="row">
              <div class="col-md-2 pull-right">
                <a href="/#/create-users" class="btn btn-success btn-sm">
                  Create User
                </a>
              </div>
            </div>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData.data}
              fields={[
                { key: "name", _classes: "font-weight-bold" },
                "username",
                "password",
                "action",
              ]}
              hover
              striped
              itemsPerPage={5}
              activePage={page}
              clickableRows
              onRowClick={(item) => history.push(`/users/${item.id}`)}
              scopedSlots={{
                // status: (item) => (
                //   <td>
                //     <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                //   </td>
                // ),
                action: () => (
                  <td>
                    <button class="btn btn-sm btn-info">Edit</button>
                    &nbsp;&nbsp;
                    <button class="btn btn-sm btn-danger">Delete</button>
                  </td>
                ),
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={2}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Users;
