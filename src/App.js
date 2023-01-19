import { useState } from "react";
import './App.css';

function App() {

  const [table, settable] = useState([]);

  let ValidRex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [userData, setUserData] = useState({
      FirstName: "",
      Address: "",
      PhoneNumber: "",
      Gender: ""
    });

  const [userDataError, setUserDataError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(
      { ...userData, [name]: value },
      setUserDataError((name, value))
    );
  };

  
  const onSubmit = async (e) => {
    e.preventDefault();
    let allErrors = {};
    Object.keys(userData).forEach((key) => {
      const error = validation(key, userData[key]);
      if (error && error.length) {
        allErrors[key] = error;
      }
    });
    if (Object.keys(allErrors).length) {
      return setUserDataError(allErrors);
    } else {
      setUserData({
        FirstName: "",
        Address: "",
        PhoneNumber: "",
        Gender: ""
      });
    }
  }

  const validation = (name, value) => {
    switch (name) {
      case "FirstName":
        if (!value) {
          return "Name requied";
        } else {
          return "";
        }
      case "Address":
        if (!value) {
          return "Address requied";
        } else {
          return "";
        }
      case "PhoneNumber":
        if (!value) {
          return "number requied";
        } else {
          return "";
        }
      case "Gender":
        if (!value) {
          return "Select Gender requied";
        } else {
          return "";
        }
      default:
        break;
    }
  };
  const handledeletedata = (e) => {
    
  }
  const handleupdatedata = (e) => {

  }
  return (
    <>
      <div class="main">
        <div class="register">
          <h2>Form</h2>
          <form id="register" method="post">
            <label>FirstName:- </label><br/>
            <input type="text" placeholder="Enter Your FirstName" className="name" name="FirstName" onChange={(e) => handleChange(e)} />
            <span style={{ color: "red" }}>{userDataError.FirstName}</span>
            <br/><br/>
            <label>PhoneNumber:- </label><br/>
            <input type="number" placeholder="Enter Your number" name="PhoneNumber" className="name" onChange={(e) => handleChange(e)}/>
            <span style={{ color: "red" }}>{userDataError.PhoneNumber}</span>
            <br/><br/>
            <label>Address:- </label><br/>
            <input type="text" placeholder="Enter Your address" name="Address" className="name" onChange={(e) => handleChange(e)} />
            <span style={{ color: "red" }}>{userDataError.Address}</span>
            <br/><br/>
            <label>Gender: </label><br/>
            <input type="radio" name="Gender" id="male" style={{width: "25px"}} onChange={(e) => handleChange(e)} />
            <span id="male">male</span>
            <input type="radio" name="gender" id="female" style={{width: "30px",marginLeft: "30px"}}/>
            <span id="female">female</span><br/>
            <span style={{ color: "red" }}>{userDataError.Gender}</span><b/><br/>
            <button type="submit" class="btn btn-primary" style={{marginTop: "20px"}} onClick={(e) => onSubmit(e)}>submit</button>
            <button type="clear" class="btn btn-warning" style={{marginLeft: "35px",textAlign: "center",marginTop: "20px",width: "80px"}}>clear</button>
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" style={{marginLeft: "35px",textAlign: "center",marginTop: "20px"}}>Delete</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" style={{color: "black"}}>Delete Form</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                    <label style={{color: "black"}}>Id:-</label>
                    <input type="text" placeholder="Enter your id" style={{width: "200px",marginLeft: "70px"}}/><br/>
                    <label style={{color: "black"}}>FirstName:-</label>
                    <input type="text" placeholder="Enter Your FirstName" style={{width: "200px"}}/>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div> 
      </div>
      <br/>
      <br/>
      <br/>
      <div className="container-fluid">
        <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>no.</th>
            <th>FirstName.</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>Gender</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {table &&
              table.map((val, index) => {
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{val.FirstName}</td>
                  <td>{val.Address}</td>
                  <td>{val.PhoneNumber}</td>
                  <td>{val.Gender}</td>

                  <td><button onClick={() => handledeletedata(index)}>delete</button><button onClick={() => handleupdatedata(index)}>update</button></td>
                </tr>
          })}
        </tbody>
        </table>
      </div>    
    </>
  )}

export default App