import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return (
    <button style={{ backgroundColor: "tomato", color: "white" }}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;