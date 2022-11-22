import React from 'react'
import styled from 'styled-components'
import {PersonFill} from 'react-bootstrap-icons'


const SeekerHome = () => {
    return (
        <Wrapper>
            <div className=' container py-5'>

                <form className="row g-3 ">
                    <div className="col-md-12">
                        <h4>Fill the following form to request for blood</h4>
                        <hr />
                    </div>
                    <div className="col-md-6">
                        <label for="State" className="form-label"> State</label>
                        <input type="email" className="form-control" id="State" placeholder='State' />
                    </div>
                    <div className="col-md-6">
                        <label for="District" className="form-label">District</label>
                        <input type="password" className="form-control" id="District" placeholder='District' />
                    </div>
                    <div className="col-md-6">
                        <label for="city" className="form-label">Enter city</label>
                        <input type="text" className="form-control" id="city" placeholder="city" />
                    </div>
                    <div className="col-md-6">
                        <label for="Pincode" className="form-label">Pincode</label>
                        <input type="text" className="form-control" id="Pincode" placeholder="Pincode" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">Nearest Hospital </label>
                        <input type="text" className="form-control" id="inputCity" placeholder='Nearest Hospital' />
                    </div>
                    <div className="col-md-6">
                        <label for="BloodGroup" className="form-label">Blood Group</label>
                        <select id="BloodGroup" className="form-select">
                            <option selected>Choose...</option>
                            <option value="">A+</option>
                            <option value="">A-</option>
                            <option value="">B+</option>
                            <option value="">B-</option>
                            <option value="">AB+</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="Withindays" className="form-label">Within days?</label>
                        <input type="text" className="form-control" id="Withindays" placeholder='Within days' />
                    </div>
                    <div className="col-6">
                        {/* <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div> */}
                    </div>
                    <div className="col-12 d-flex">
                        <button type="submit" className="btn btn-outline-dark">Find a donar</button>
                    </div>
                </form>
                <hr className='my-5'/>
                <h4>RESULTS</h4>

                <div className='my-5'>

                    <div className="card mb-3" style={{maxWidth: "540px"}} >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <PersonFill className='icon'/>
                            </div>
                            <div className="col-md-8 d-flex">
                                <div className="card-body">
                                    <h5 className="card-title">Name : Donor 1</h5>
                                    <p className="card-text">City : Pune </p>
                                    <p className="card-text">Blood Group : A+ </p>
                                    <p className="card-text"><small className="text-muted">Available</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ////////////////////////////////////// */}
                    <div className="card mb-3" style={{maxWidth: "540px"}} >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <PersonFill className='icon'/>
                            </div>
                            <div className="col-md-8 d-flex">
                                <div className="card-body">
                                    <h5 className="card-title">Name : Donor 2</h5>
                                    <p className="card-text">City : Pune </p>
                                    <p className="card-text">Blood Group : A+ </p>
                                    <p className="card-text"><small className="text-muted">Available</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ///////////////////////////////////////// */}
                    <div className="card mb-3" style={{maxWidth: "540px"}} >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <PersonFill className='icon'/>
                            </div>
                            <div className="col-md-8 d-flex">
                                <div className="card-body">
                                    <h5 className="card-title">Name : Donor 3</h5>
                                    <p className="card-text">City : Pune </p>
                                    <p className="card-text">Blood Group : A+ </p>
                                    <p className="card-text"><small className="text-muted">Available</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ///////////////////////////////////// */}
                    <div className="card mb-3" style={{maxWidth: "540px"}} >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <PersonFill className='icon'/>
                            </div>
                            <div className="col-md-8 d-flex">
                                <div className="card-body">
                                    <h5 className="card-title">Name : Donor 4</h5>
                                    <p className="card-text">City : Pune </p>
                                    <p className="card-text">Blood Group : A+ </p>
                                    <p className="card-text"><small className="text-muted">Available</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ///////////////////////////////////////////// */}
                    <div className="card mb-3" style={{maxWidth: "540px"}} >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <PersonFill className='icon'/>
                            </div>
                            <div className="col-md-8 d-flex">
                                <div className="card-body">
                                    <h5 className="card-title">Name : Donor 5</h5>
                                    <p className="card-text">City : Pune </p>
                                    <p className="card-text">Blood Group : A+ </p>
                                    <p className="card-text"><small className="text-muted">Available</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /////////////////////////////////////// */}

                </div>

            </div>

        </Wrapper>
    )
}
export default SeekerHome


const Wrapper = styled.div`

background-color: antiquewhite;

.container{
    /* background-color: aliceblue; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* height: 100vh; */
}

label{
    font-weight: 600;
}

h4{
    text-align: center;
}

form{
    background-color: #fff;
    margin:0 auto;
    width: 600px;
    /* border:  solid 1px; */
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 30px rgb(0 0 0 / 40%);
}

button{
    border-radius: 20px;
    margin: 10px auto;
}

.card{
    margin: auto;
}
.card-body{
    margin: auto;
}

.icon{
    width: 150px;
    height: 250px;
    margin: auto;
}

`;

