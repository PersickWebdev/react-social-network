import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = (props) => {
    return (
        <div>
            <Pagination currentPage={props.currentPage}
                        totalUsersCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        onPageChanged={props.onPageChanged}
            />

            {
                props.users.map(u => <User user={u}
                                           key={u.id}
                                           follow={props.follow}
                                           unfollow={props.unfollow}
                                           followingInProgress={props.followingInProgress}
                />)
            }
        </div>
    )
}

export default Users;