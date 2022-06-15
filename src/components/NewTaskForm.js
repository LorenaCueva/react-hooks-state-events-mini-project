import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({text: "", category: ""})

    const categoriesSelect = categories.filter(category => category !== 'All')
    .map(category => <option key={category}>{category}</option>);


    function handleChange(e){
      const name = e.target.name
      const value = e.target.value
      setFormData({...formData, [name]: value})
    }

    function handleFormSubmit(e){
        e.preventDefault();
        setFormData({text:"", category: ""});
        onTaskFormSubmit(formData);
    }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={formData.category}>
          {categoriesSelect}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
