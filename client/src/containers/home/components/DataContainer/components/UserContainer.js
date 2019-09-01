import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { getUsersItemsMap, getUsersItemsList, fetchUsers } from '../../../../../services/reducers/data/users';

/**
 * Users container
 * Root route: '/home/data/users'
 */
function UserContainer({ fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  });

  return (
    <div>
      {'User container'}
    </div>
  );
}

UserContainer.propTypes = {
  /** Map-object with user parameters */
  itemsMap: PropTypes.object,
  /** List of user unique identificators */
  itemsList: PropTypes.arrayOf(
    PropTypes.string,
  ),
  fetchUsers: PropTypes.func,
}

const mapStateToProps = (state) => ({
  itemsMap: getUsersItemsMap(state),
  itemsList: getUsersItemsList(state),
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContainer);