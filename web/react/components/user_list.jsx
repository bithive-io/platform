// Copyright (c) 2015 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {FormattedMessage} from 'mm-intl';
import UserListRow from './user_list_row.jsx';

export default class UserList extends React.Component {
    render() {
        const users = this.props.users;

        let content;
        if (users.length > 0) {
            content = users.map((user) => {
                return (
                    <UserListRow
                        key={user.id}
                        user={user}
                        actions={this.props.actions}
                    />
                );
            });
        } else {
            content = (
                <div key='no-users-found'>
                    <FormattedMessage
                        id='user_list.notFound'
                        defaultMessage='No users found :('
                    />
                </div>
            );
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

UserList.defaultProps = {
    users: [],
    actions: []
};

UserList.propTypes = {
    users: React.PropTypes.arrayOf(React.PropTypes.object),
    actions: React.PropTypes.arrayOf(React.PropTypes.func)
};
