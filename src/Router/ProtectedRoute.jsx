import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, enabled, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (enabled) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/unauthorized",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
