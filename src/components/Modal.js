import React from "react"

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show: false,
        }
    }
    
    showModal = () => {
        this.setState({
            show: true
        })
    }
    
    closeModal = () => {
        this.setState({
            show: false
        })
    }

    render(){
        return(
            <div className="modal fade" id={`exampleModal${this.props.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{this.props.message}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div>{this.props.title}</div>
                                    <img src = {this.props.img}/>
                                </div>

                             </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Modal