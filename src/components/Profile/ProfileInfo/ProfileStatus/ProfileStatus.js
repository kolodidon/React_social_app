import React from 'react'
//import s from './ProfileStatus.module.scss'

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }
    toggleEdit = () => {
        this.setState({
            editMode: true
        })
    }
    unToggleEdit = () => {
        this.props.changeUserStatusThunkCreator(this.state.status)
        this.setState({
            editMode: false
        })
    }
    onStatusInputChange = (element) => {
        this.setState({
            status: element.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render(){
        if(this.state.editMode){
            return (
                <>
                    <div>
                        <input 
                            type="text" 
                            onChange={ this.onStatusInputChange } 
                            value={this.state.status}
                        />
                        
                        <button onClick={this.unToggleEdit}>Сохранить</button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div><span>{this.props.status}</span></div>
                    { ( (!this.props.userId) && (this.props.isAuth) ) ? <button onClick={this.toggleEdit}>Редактировать</button> : null }
                </>
            ) 
        }
    }
}

export default ProfileStatus