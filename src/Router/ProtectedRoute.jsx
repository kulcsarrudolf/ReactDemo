import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  exact,
  path,
  enabled,
  component: Component,
  location,
}) => (
  <Route
    exact={exact}
    path={path}
    render={() => {
      if (enabled) {
        return <Component />;
      }
      return (
        <Redirect
          to={{
            pathname: '/unauthorized',
            state: {
              from: location,
            },
          }}
        />
      );
    }}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  enabled: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProtectedRoute;
