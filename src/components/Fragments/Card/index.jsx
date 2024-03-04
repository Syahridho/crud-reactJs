import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Button from "../../Elements/Button";

const Card = (props) => {
  const { children, id, onDelete, onUpdate } = props;
  return (
    <div className="bg-white flex items-center justify-between py-4 px-4 shadow rounded-md ring-1 ring-gray-950/5">
      <p className="font-medium text-gray-950">{children}</p>
      <div className="flex gap-2">
        <Button variant="bg-blue-500" className="py-2" onClick={onUpdate}>
          <FaEdit />
        </Button>
        <Button variant="bg-red-500" className="py-2" onClick={onDelete}>
          <FaRegTrashAlt id={id} />
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default Card;
