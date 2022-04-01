import React, { useState } from 'react'
import './Register.css'

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phnumber, setNumber] = useState('');
  const [data, setData] = useState([
    {
     username: 'ramkumar', 
      mailid: 'ram@gmail',
      phonenumber: '98878686869'
    }
  ]);

  function Submit (e){
    e.preventDefault();
    setData([...data, { username: name, mailid: email, phonenumber: phnumber }]);
    setName('');
    setEmail('');
    setNumber('');
  
  }

return (
<>
  <div className='container'>
    <div className='row headbar  d-flex justify-content-center'>
      <h1 className=''>User Data Registration</h1>
    </div>
  </div>

  <div className='container '>
    <div className="row mt-5 second-row">
      <div className="col-sm-4 left-side">
        <div className="card ">
          <div className="card-body">
            <form action="" className='mt-3' onSubmit={(e)=>Submit(e)}>
              <div className="form-group mb-3">
                <label htmlFor="">Name</label>
                <input required type="text" className="form-control " placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Email</label>
                <input required type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)}  />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Phone No</label>
                <input required type="text" className="form-control" placeholder="Enter Phone No" value={phnumber} onChange={(e)=> setNumber(e.target.value)} />
              </div>
              <div >
              <button className='btn  btn-block ' > Save Data</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-sm-8 right-side">
        <div className="card card1">
          <div className="card-body">
            <table className="table ">
              <thead>
                <tr> 
                  <th>#</th> 
                  <th>Name</th> 
                  <th>Email</th>
                  <th>Phone No</th>
                </tr>
              </thead>
              <tbody>

              {data &&
                      data.map((singledata, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{singledata.username}</td>
                            <td>{singledata.mailid}</td>
                            <td>{singledata.phonenumber}</td>
                          </tr>
                        );
                      })}
                </tbody>      

              
        </table>
          </div>
        </div>
      </div>
    </div>
  </div>




</>
)
}

export default Register;