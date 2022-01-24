import React, { useState } from 'react';
import './style.css';

function Form({ closeform, selectedValue, addTableList }) {
  const FormValue = {

    title: selectedValue ? selectedValue.title : "",
    author: selectedValue ? selectedValue.author : "",
    isbn: selectedValue ? selectedValue.isbn : ""
  }
  const [initialValue, setInitialValue] = useState(FormValue);

  const handleChange = (e) => {
    setInitialValue({ ...initialValue, [e.target.name]: e.target.value })
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    addTableList(initialValue);
    closeform();

  }
  return (
    <div className="container bg-secondary text-white lead from-border">
      <form onSubmit={(e) => handleSumbit(e)}>

        <label>Title</label>
        <input type="text" onChange={handleChange} value={initialValue.title} name="title" className="form-control" required></input>
        <br></br>

        <label>Author</label>
        <input type="text" onChange={handleChange} value={initialValue.author} name="author" className="form-control" required></input>
        <br></br>

        <label>ISBN</label>
        <input type="text" onChange={handleChange} value={initialValue.isbn} name="isbn" className="form-control" required></input>
        <br></br>


        <div className="text-right">
          <button type="Cancel" onClick={() => closeform()} className="btn btn-danger">CANCEL</button>

          <button type="Add Book" className="btn btn-primary m-3">ADD BOOK</button></div>
      </form>

    </div>
  );
}

export default Form;
