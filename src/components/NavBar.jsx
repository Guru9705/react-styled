import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
height:120px;
background-color:black;
display:flex;
justify-content:right;
padding:10px;
`

const Logo = styled.div`
height:120px;
position:absolute;
top:15px;
left:10px;

@media only screen and (max-width: 600px) {
   display:none;
  }
`
const ResourceLink = styled.div`
color:white;
cursor:pointer;
font-weight:bold;
font-size:15px;
margin-top:50px;
margin-right:50px;

@media only screen and (max-width: 600px) {
    font-size:10px;
   }
`
const A = styled.a`
   text-decoration:none;
   margin:20px;
`
export default function NavBar() {
  return (
      <Wrapper>
          <Logo>
              <img height="100px"src="data:image/png;base64,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"></img>
          </Logo>
          <ResourceLink>
              <A>About us</A>
              <A>Contact</A>
              <A>Login</A>
          </ResourceLink>   
     </Wrapper>
  )
}
