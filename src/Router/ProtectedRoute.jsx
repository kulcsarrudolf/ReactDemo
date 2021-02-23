import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  component: Component,
  enabled,
  location,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      console.log(location);
      if (enabled) {
        return <Component {...rest} {...props} />;
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
