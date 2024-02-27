import PropTypes from "prop-types";
import Button from "../../Elements/Button";
import Modal from "./../../Elements/Modal";

const ModalDelete = (props) => {
  const { setDeleteUser, deleteUser } = props;
  const handleDelete = () => {
    setDeleteUser({});
  };
  return (
    <Modal onClose={setDeleteUser}>
      <h1 className="text-md font-medium">Yakin ingin Menghapus?</h1>
      <div className="flex justify-between gap-2">
        <Button
          variant="bg-blue-500"
          className="w-24 mt-3"
          onClick={() => setDeleteUser({})}
        >
          Batalkan
        </Button>
        <Button
          variant="bg-red-500"
          className="w-24 mt-3"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};

ModalDelete.propTypes = {
  setDeleteUser: PropTypes.func,
  deleteUser: PropTypes.any,
};

export default ModalDelete;
