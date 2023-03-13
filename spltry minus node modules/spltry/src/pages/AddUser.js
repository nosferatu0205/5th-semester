import React from 'react'

function AddUser() {
  return (
    <div>Login
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter name" required/>
                    
                </div>
                <div class="form-group">
                    <label for="emp_ID">Employee ID</label>
                    <input type="text" class="form-control" id="emp_ID" placeholder="Enter Employee ID" />
                </div>
                <div class="form-group">
                    <label for="Name of Department">Password</label>
                    <input type="Text" class="form-control" id="deptName" placeholder="Department" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                {/* <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
  );
}

export default AddUser