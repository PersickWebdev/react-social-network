import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: true,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditMode() {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>
                            {this.props.status || "No status"}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode.bind(this)}
                               value={this.state.status}
                               onFocus={true}
                               onChange={this.onStatusChange}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;