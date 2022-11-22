import React from 'react'
import styled from 'styled-components'


const SeekerProfile = () => {
  return (
    <Wrapper className='d-flex'>

        <div className='card'>
            profile info will be displayed here
        </div>

    </Wrapper>
  )
}

export default SeekerProfile

const Wrapper = styled.div`
flex-direction: column;
justify-content: center;
height: 500px;
.card{
    margin: auto;
}
`;