import {useState} from "react";

const AddTask = (props) => {

const [text,settext] = useState('');

const [day,setday] = useState('');

const [reminder,setreminder] = useState(false);

const onsubmit = (e) => {
        e.preventDefault();

        if(!text){
                alert('please add task');
        }
        const id = Math.floor(Math.random() * 10000) + 1;
        const task = {
                 id, text, day ,reminder
        }
        props.onAdd(task);
        settext('');setday('');setreminder(false);
}
  return <form className='add-form' onSubmit = {onsubmit}>
          <div className='form-control'>
                  <label>Task</label>
                  <input type='text' placeholder='Add Task' value={text} onChange={ (e) =>settext(e.target.value) }/>
          </div>
          <div className='form-control'>
                  <label>Day & Time</label>
                  <input type='text' placeholder='Add Day & Time' value={day} onChange={ (e) =>setday(e.target.value) }/>
          </div>
          <div className='form-control form-control-check'>
                  <label>Set Reminder</label>
                  <input type='checkbox' value={reminder} onChange={ (e) =>setreminder(e.currentTarget.checked) } />
          </div>
          <input className='btn btn-block' type='submit' value="save task"/>
  </form>;
};

export default AddTask;
