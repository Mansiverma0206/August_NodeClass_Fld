import { Component } from "react";

export default class EmpItem extends Component {
   render() {
      var deps = this.props.deps
      var emp =  this.props.info
      return <tr>
         <td>{this.props.index}</td>
         <td>{emp.empid}</td>
         <td>{emp.name}</td>
         <td>{emp.salary}</td>
         <td>{emp.email}</td>
         <td>{deps.find(ob=>ob.key==emp.department).value}</td>
         <td>
            <button onClick={()=>{this.props.dlt(emp.empid)}}  className='btn btn-outline-success'>Delete</button>
         </td>
      </tr>
   }
}