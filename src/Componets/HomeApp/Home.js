import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Wrapper>

            <div className=' container py-5'>

                <form class="row g-3 ">
                <div class="col-md-12">
                        <h4>Fill the following form to request for blood</h4>
                        <hr/>
                    </div>
                    <div class="col-md-6">
                        <label for="State" class="form-label"> State</label>
                        <input type="email" class="form-control" id="State" />
                    </div>
                    <div class="col-md-6">
                        <label for="District" class="form-label">District</label>
                        <input type="password" class="form-control" id="District" />
                    </div>
                    <div class="col-md-6">
                        <label for="city" class="form-label">Enter city</label>
                        <input type="text" class="form-control" id="city" placeholder="city" />
                    </div>
                    <div class="col-md-6">
                        <label for="Pincode" class="form-label">Pincode</label>
                        <input type="text" class="form-control" id="Pincode" placeholder="Pincode" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Nearest Hospital </label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-6">
                        <label for="BloodGroup" class="form-label">Blood Group</label>
                        <select id="BloodGroup" class="form-select">
                            <option selected>Choose...</option>
                            <option value="">A+</option>
                            <option value="">A-</option>
                            <option value="">B+</option>
                            <option value="">B-</option>
                            <option value="">AB+</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="Withindays" class="form-label">Within days?</label>
                        <input type="text" class="form-control" id="Withindays" />
                    </div>
                    <div class="col-6">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-outline-dark">Find a donar</button>
                    </div>
                </form>

            </div>

        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`

background-color: antiquewhite;

.container{
    /* background-color: aliceblue; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    height: 100vh;
}

h4{
    text-align: center;
}

form{
    background-color: #fff;
    margin:0 auto;
    width: 600px;
    border:  solid 1px;
    border-radius: 10px;
    padding: 20px;
}

button{
    border-radius: 20px;
    margin: 10px 0;
}

`;