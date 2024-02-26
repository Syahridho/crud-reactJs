import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Button from "../../Elements/Button";

const Card = (props) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-between py-4 px-4 shadow">
      <p>{children}</p>
      <div className="flex gap-2">
        <Button variant="bg-blue-500" className="py-2">
          <FaEdit />
        </Button>
        <Button variant="bg-red-500" className="py-2">
          <FaRegTrashAlt />
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
