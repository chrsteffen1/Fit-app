import { useState } from "react";


const NewGoal = (props) => {
  const [form, setForm] = useState({content: ''})

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddGoal(form)
    setForm({content: ''})
  }


  return (  
    <form onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="content"
        id="text-input"
        value={form.text}
        placeholder="Add a Comment"
        onChange={handleChange}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default NewGoal;