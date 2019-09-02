import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNotificationsItems, pullNotify } from '../../services/reducers/notifications';

import NotificationProvider from 'components/utils/NotificationProvider';

/**
 * Notification container
 */
function NotificationContainer({ items, pullNotify }) {
  return (
    <NotificationProvider
      items={items}
      deleteItem={pullNotify}/>
  );
}

NotificationContainer.propTypes = {
  /** List of notifications */
  items: PropTypes.array,
  /** func, for remove item by id */
  pullNotify: PropTypes.func,
}

const mapStateToProps = state => ({
  items: getNotificationsItems(state),
});

const mapDispatchToProps = { pullNotify };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationContainer);