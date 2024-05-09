import { useState } from 'react'
import style from './employee.module.css'
import CreateEmployee from '../../component/createEmployee/CreateEmployee'

function Employee() {

  const [openModal, setOpenModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className={style.container}>
      {(!openModal && !isEdit) && 
      <>
      <h3>Employee List</h3>
      <div className={style.box}>
        <h4>Count : 0</h4>
        <span onClick={()=>setOpenModal(true)}>Create Employee</span>
      </div>
      <div className={style.search}>
        <label>Search</label>
        <input type="text" placeholder='Enter Search Keyword' />
      </div>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Email Id</th>
          <th>Mobile No</th>
          <th>Designation</th>
          <th>Gender</th>
          <th>Course</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* {data.map(person => ( */}
          <tr >
          <td width={100}>ID</td>
          <td width={100}>Image</td>
          <td width={100}>Name</td>
          <td width={150}>Email Id</td>
          <td  width={90}>Mobile No</td>
          <td width={80}>Designation</td>
          <td width={50}>Gender</td>
          <td width={50}>Course</td>
          <td width={100}>Created At</td>
          <td onClick={()=>setIsEdit(true)} width={100}>Edit / Delete</td>
          </tr>
        {/* ))} */}
      </tbody>
    </table>
    </>
      
    }
    {(openModal || isEdit) && 
          <CreateEmployee setOpenModal={setOpenModal} isEdit={isEdit} setIsEdit={setIsEdit}/>
        }
    </div>
  )
}

export default Employee
