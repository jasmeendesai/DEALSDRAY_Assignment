import { useState } from 'react'
import style from './createEmployee.module.css'
import CloseIcon from '@mui/icons-material/Close';

function CreateEmployee({setOpenModal, isEdit, setIsEdit}) {

    const [file, setFile] = useState(null)

    const handleSubmit = e => {
        e.preventDefault();
        setOpenModal(false)
        setIsEdit(false)
    }

  return (
    <div className={style.container}>
        <CloseIcon onClick={()=> setOpenModal(false)} fontSize='large' className={style.icon}/>
      <form>
        <div className={style.item}>
            <label>Name</label>
            <input type="text" name='name' />
        </div>
        <div className={style.item}>
            <label>Email</label>
            <input type="email" name='email' />
        </div>
        <div className={style.item}>
            <label>Mobile No</label>
            <input type="text" name='mobileNo' />
        </div>
        <div className={style.item}>
            <label>Designation</label>
            <div>
               <select>  
        <option value="HR">HR</option>  
        <option value="Manager">Manager</option>  
        <option value="Sales">Sales</option>  
    </select>  
            </div>
             
            
        </div>
        <div className={style.item}>
            <label>Gender</label>
            <div>
            <input type="radio" checked="true" name="user_gender"/> <span> Male</span>
                <br />
                <input type="radio"  name="user_gender"/><span> Female</span>
            </div>
        </div>
        <div className={style.item}>
            <label>Course</label>
            <div>
               <input type="checkbox" name='mca' value="MCA" /><span> MCA</span>
               <br />
               <input type="checkbox" name='bca' value="BCA" /><span> BCA</span>
               <br />
               <input type="checkbox" name='bsc' value="BSC" /><span> BSC</span>

            </div>
        </div>
        <div className={style.item}>
            
            <label htmlFor="file">
                <span>Img Upload</span>
            </label>
            <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>
        </div>
        
        <button onClick={handleSubmit} className={style.button}>{isEdit ? "Update" : "Submit"}</button>
      </form>
    </div>
  )
}

export default CreateEmployee
