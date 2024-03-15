import { Component } from 'react';
import dummy from './dummy';
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      employees: dummy
    }
  }
  render() {
    return <div className='container'>
      <h1 className='alert-danger text-center'>Employee Records</h1>
      <hr/>
      <div className='container'>
       <h1 className='text-center alert-success'>Add Employees</h1>
       <div className='row mt-3'>
        <div className='col-lg-4 col-md-4 '>
          <input type='text' className='form-control' placeholder='Emp Id'/>
        </div>
        <div className='col-lg-4 col-md-4'>
          <input type='text' className='form-control' placeholder='Emp Name'/>
        </div>
        <div className='col-lg-4 col-md-4'>
          <input type='text' className='form-control' placeholder='Emp salary'/>
        </div>  
       </div>
       <div className='row mt-3'>
        <div className='col-lg-4 col-md-4 '>
          <input type='text' className='form-control' placeholder='Emp Email'/>
        </div>
        <div className='col-lg-4 col-md-4'>
          <input type='text' className='form-control' placeholder='Emp Department'/>
        </div>
        <div className='col-lg-4 col-md-4'>
          <button className='btn btn-outline-primary'>Save Employee</button>
        </div>  
       </div>

      </div>
      <hr/>
      <div className='row'>
        <div className='col-lg-2 col-md-2'>
          <b className='alert-success'>Total :</b>
        </div>
        <div className='col-lg-4 col-md-4'>

        </div>
        <div className='col-lg-2 col-md-2'>
          <b className='alert-primary'>FrontEnd Developer : </b>
        </div>
        <div className='col-lg-2 col-md-2'>
          <b className='alert-warning'>Java Developer : </b>
        </div>
        <div className='col-lg-2 col-md-2'>
          <b className='alert-info'>Android Developer : </b>
        </div>
      </div>
      <hr />
      <table className='table table-striped table-hover text-center'>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Email Id</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map((ob, index) => <tr>
            <td>{index + 1}</td>
            <td>{ob.empid}</td>
            <td>{ob.name}</td>
            <td>{ob.salary}</td>
            <td>{ob.email}</td>
            <td>{ob.department}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  }
}