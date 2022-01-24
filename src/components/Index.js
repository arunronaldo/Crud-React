import React, { useEffect, useState } from 'react';
import './style.css';
import Form from './Form';
import Table from './Table';


function Index() {

  const [open, setOpen] = useState(false);
  const [selectedValue, setSeletedValue] = useState(null);

  const setLocaLstorage = () => {

    const data = localStorage.getItem('sampleArray');
    if (data) {
      return JSON.parse(data);
    }
    else {
      return []
    }
  }

  const [tableValues, setTableValues] = useState(setLocaLstorage());




  const openform = () => {
    setOpen(true);
  }
  const closeform = () => {
    setOpen(false);
  }

  const openeditform = (index) => {
    const valuearray = JSON.parse(localStorage.getItem("sampleArray"));
    setSeletedValue(valuearray[index]);
    setOpen(true);
  }

  const addTableList = (value) => {
    setTableValues([...tableValues, value])
  }
  // const deleteHandler = (index) => {
  //   const filterbbook = tableValues.filter((data, indx) => {
  //     return indx !== index
  //   });
  //   setTableValues(filterbbook);
  // localStorage.setItem("sampleArray", JSON.stringify(filterbbook));



  useEffect(() => {
    localStorage.setItem('sampleArray', JSON.stringify(tableValues));
  }, [tableValues])

  return (

    <div>
      <h1 className="text-center">Crud BookApplicaton</h1>
      <div className=" container text-center p-5">
        <button className={open ? "d-none" : " btn btn-primary"} onClick={() => openform()}>Add an new book</button></div>
      {open ? <Form closeform={closeform} selectedValue={selectedValue} addTableList={addTableList} /> :
        <Table openeditform={openeditform} tableValues={tableValues} />}

    </div>

  );
}

export default Index;
