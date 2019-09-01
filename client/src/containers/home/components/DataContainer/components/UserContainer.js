import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { getUsersItemsMap, getUsersItemsList } from '../../../../../services/reducers/data/users';

/**
 * Users container
 * Root route: '/home/data/users'
 */
function UserContainer() {
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
}

const mapStateToProps = (state) => ({
  itemsMap: getUsersItemsMap(state),
  itemsList: getUsersItemsList(state),
});

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContainer);