import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    getProfileThunk,
    getStatusThunk, savePhotoThunk, saveProfileThunk,
    updateStatusThunk
} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.refreshProfile();
        }
    }



    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusThunk}
                     savePhoto={this.props.savePhotoThunk}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfileThunk,
        getStatusThunk,
        updateStatusThunk,
        addPost,
        savePhotoThunk,
        saveProfileThunk
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)