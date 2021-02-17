import PropTypes from "prop-types";

const Footer = ({ author }) => {
  return <footer>I'm the footer. Author: {author}</footer>;
};

Footer.propTypes = {
  author: PropTypes.string.isRequired,
};

export default Footer;
