import React from 'react'
import './Modal.css'

class Modal extends React.Component {

  constructor() {
    super()
    this.handleEscKey = (evt) => {
      if(evt.key === 'Escape') this.props.onClose()
    }
    this.state = {
      modalClass: ""                                                        //Modal component has class of only Modal (since this is empty string)
    }
  }
  
  componentDidMount() {
    document.addEventListener('keyup', this.handleEscKey)
    setTimeout(()=> {
      this.setState({
        modalClass: "entered"
      })
    })
  }

  componentWillUnmount() {
    // remove escape key listener before modal unmounts

    this.setState({
      modalClass: "exiting"
    })
    
  }

  render() {
    const props = this.props
    return (
      <div className={`Modal ${this.state.modalClass}`}>
        <div className="container">
          <button onClick={props.onClose}>X</button>
          <div className="title">
            <h1>{props.modalTitle}</h1>
          </div>
          <div className="body">
            <p>{props.modalBody}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal

// ${props.modalClass}