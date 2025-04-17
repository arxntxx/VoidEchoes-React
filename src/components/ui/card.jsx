import PropTypes from "prop-types";
import classNames from "classnames";

export function Card({ className, children }) {
  return (
    <div
      className={classNames(
        "bg-white rounded-lg shadow-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export function CardContent({ className, children }) {
  return (
    <div className={classNames("p-4", className)}>
      {children}
    </div>
  );
}

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};