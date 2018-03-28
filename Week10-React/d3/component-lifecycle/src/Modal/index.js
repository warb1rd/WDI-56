import React from "react"
import "./Modal.css"

class Modal extends React.Component {  
    componentDidMount(){                                                            //Inbuilt call back function. Mounted = read by react. Runs once when component finishes loading first time.
        const props = this.props        
        console.log("Modal has mounted")                                            //It's a lifecycle method. Good time to do ajax request to get data
        // setTimeout(props.onClose, 1000)                                             //Useful for temporary flash messages.  Modal closes itself.
    }
    
    componentWillUnmount(){
        console.log("Modal is about to unmount")                                    //This runs moments before modal closes. 
        // alert("You're about to lose your modal")
    }

    render(){                                                                       // Render is designed to be run multiple times
        const props = this.props
    return (
            <div className="Modal">                                                 {/*It's capitalized because it's easier to know/see that Modal is the main container */}
                <div className="container">
                    <button onClick={props.onClose}>x</button>
                    <div className="title">
                        <h2>{props.modalTitle}</h2>
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

// const Modal = (props) => {  (line 5 was this)                                                 //Stateless functional component. It's not a class 
