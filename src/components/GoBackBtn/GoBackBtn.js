import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const GoBackBtn = ({ link }) => {
  return (
    <div>
     <Link to={link}>Go Back</Link>
    </div>
  );
};

GoBackBtn.propTypes = {
    link: PropTypes.object.isRequired,
    }
