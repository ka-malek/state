import { render } from '@testing-library/react'
import './App.css'
import React from 'react'
import Inter from './intervel'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      fullName: 'Malek Kalboussi',
      bio:'you whats up is ya boi .',
      imgSrc: <img src='https://cdn.benzinga.com/files/images/story/2022/boredapeyachtclub_nft_image_5.png?width=1200&height=800&fit=crop' alt='the king is here'/>,
      profession:'Web developer',
      boolean: true
    }

  }

change=()=>{
  this.setState({boolean:!this.state.boolean})
}



  render(){
    return(
      <div>
        {this.state.boolean ?(<>
          {this.state.fullName}
        <br></br>
        {this.state.bio}
        <br></br>
        {this.state.imgSrc}
        <br></br>
        {this.state.profession}
        <br></br>
        </>):(<></>)}
       <Inter/>
        <button onClick={this.change}>submit</button>
      </div>
    )
  }
};





export default App;













