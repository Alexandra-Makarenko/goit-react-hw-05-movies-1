import { Link } from "react-router-dom";

export const GoBackBtn = ({ link }) => {
  return (
    <div>
     <Link to={link}>Go Back</Link>
    </div>
  );
};
