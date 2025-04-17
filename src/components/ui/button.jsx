import PropTypes from "prop-types";
import classNames from "classnames";

export function Button({ children, className, variant = "default", ...props }) {
  const baseStyles = "rounded px-4 py-2 font-medium transition duration-200";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-gray-400 text-gray-400 bg-transparent hover:border-white hover:text-white",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={classNames(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline", "ghost"]),
};
