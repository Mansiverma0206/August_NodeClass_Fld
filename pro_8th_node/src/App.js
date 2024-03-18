import { Component } from 'react';
import dummy from './dummy';
import EmpItem from './EmpItem';
import Demo from './demo';
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      employees: dummy,

      duplicateError: {
        idstatus: false,
        mailstatus: false
      }
    }
    this.departments = [
      { key: 1, value: "FrontEnd Developer" },
      { key: 2, value: "Java Developer" },
      { key: 3, value: "Android Developer" }
    ]
  }

  clear = () => {
    this.idbox.value = ""
    this.namebox.value = ""
    this.salbox.value = ""
    this.mailbox.value = ""
    this.selectbox.value = ""
  }

  saveEmp = () => {
    var id = this.idbox.value;
    var name = this.namebox.value;
    var salary = this.salbox.value;
    var mail = this.mailbox.value;
    var dep = this.selectbox.value;

    var ob = { empid: id, name: name, salary: salary, email: mail, department: dep }
    this.setState({ employees: [...this.state.employees, ob] })
    this.clear()
  }

  checkId = () => {
    var id = this.idbox.value
    var isFound = this.state.employees.find(ob => ob.empid == id) != undefined;
    this.setState({ duplicateError: { ...this.state.duplicateError, idstatus: isFound } })
  }

  checkMail = () => {
    var mail = this.mailbox.value
    var isFound = this.state.employees.find(ob => ob.email == mail) != undefined;
    this.setState({ duplicateError: { ...this.state.duplicateError, mailstatus: isFound } })
  }

deleteEmp = (id)=>{
  this.setState({employees : this.state.employees.filter(ob=>ob.empid!=id)})

}

render() {
  return <div className='container'>
    <h1 className='alert-danger text-center'>Employee Records</h1>
    <hr />
    <div className='container'>
      <h1 className='text-center alert-success'>Add Employees</h1>
      <div className='row mt-3'>
        <div className='col-lg-4 col-md-4 '>
          <input type='text' className='form-control' ref={c => this.idbox = c} onBlur={this.checkId} placeholder='Emp Id' />
          {this.state.duplicateError.idstatus && <span className="text-danger">Employee ID already exists!</span>}
        </div>
        <div className='col-lg-4 col-md-4'>
          <input type='text' className='form-control' ref={c => this.namebox = c} placeholder='Emp Name' />
        </div>
        <div className='col-lg-4 col-md-4'>
          <input type='number' className='form-control' ref={c => this.salbox = c} placeholder='Emp salary' />
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-lg-4 col-md-4 '>
          <input type='text' className='form-control' ref={c => this.mailbox = c} onBlur={this.checkMail} placeholder='Emp Email' />
          {this.state.duplicateError.mailstatus && <span className="text-success">Email already exists!</span>}
        </div>
        <div className='col-lg-4 col-md-4'>
          <select className='form-control' ref={c => this.selectbox = c}>
            <option value=''>Choose Department</option>
            {this.departments.map((dep,index) => <option key={index} value={dep.key}>
              {dep.value}
            </option>)}
          </select>
        </div>
        <div className='col-lg-4 col-md-4'>
          <button onClick={this.saveEmp} disabled={this.state.duplicateError.idstatus || this.state.duplicateError.mailstatus} className='btn btn-primary'>Save Employee</button>
        </div>
      </div>

    </div>
    <hr />
    <div className='row'>
      <div className='col-lg-2 col-md-2'>
        <b className='alert-success'>Total :{this.state.employees.length}</b>
      </div>
      <div className='col-lg-4 col-md-4'>

      </div>
      <div className='col-lg-2 col-md-2'>
        <b className='alert-primary'>FrontEnd Developer :{this.state.employees.reduce((x, ob) => ob.department == '1' ? x + 1 : x, 0)} </b>
      </div>
      <div className='col-lg-2 col-md-2'>
        <b className='alert-warning'>Java Developer :{this.state.employees.reduce((x, ob) => ob.department == '2' ? x + 1 : x, 0)} </b>
      </div>
      <div className='col-lg-2 col-md-2'>
        <b className='alert-info'>Android Developer :{this.state.employees.reduce((x, ob) => ob.department == '3' ? x + 1 : x, 0)} </b>
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
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {this.state.employees.map((ob, index) =><EmpItem key={index} deps={this.departments} dlt={this.deleteEmp} index={index+1} info={ob}/>)}
      </tbody>
    </table>
    <hr/>
    <Demo/>
  </div>
}
}
