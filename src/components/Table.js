import React from 'react';
import './style.css';

function Table({ openeditform, tableValues }) {



    return (
        <div className="container align-items-center">

            <table className="table table-success table-striped table-bordered">
                <tr className="lead">
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Action</th>

                </tr>
                {tableValues?.length ? tableValues.map((data, index) => {
                    return <tr className="tr" key={`tr${data}`}>
                        <td key={`tr${data}`}>{data.title}</td>
                        <td key={`tr${data}`}>{data.author}</td>
                        <td key={`tr${data}`}>{data.isbn}</td>
                        <td key={`tr${data}`}><button className="btn btn-info" onClick={() => openeditform(index)}>Edit</button>
                            <button className="btn btn-danger m-3" >Delete</button></td>


                    </tr>
                }) : null}</table>
        </div>)

};

export default Table;