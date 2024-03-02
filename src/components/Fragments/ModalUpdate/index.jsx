import PropTypes from "prop-types";
import Modal from "../../Elements/Modal";
import Button from "../../Elements/Button";
import Input from "../../Elements/Input";
import { useState } from "react";

const ModalUpdate = (props) => {
  const { setUpdateUser, updateUser, handleUpdate } = props;
  const [updateData, setUpdateData] = useState({});

  const handleChange = (event) => {
    setUpdateData({
      name: event.target.value,
    });
  };

  return (
    <Modal>
      <Input
        className="w-full"
        value={updateUser.name}
        name="update"
        onChange={() => handleChange(event)}
      />
      <div className="flex justify-between gap-2">
        <Button
          variant="bg-blue-500"
          className="w-24 mt-3"
          onClick={() => setUpdateUser({})}
        >
          Batalkan
        </Button>
        <Button
          variant="bg-red-500"
          className="w-24 mt-3"
          onClick={() => {
            handleUpdate(updateUser.id, updateData.name), setUpdateUser({});
          }}
        >
          Update
        </Button>
      </div>
    </Modal>
  );
};

ModalUpdate.propTypes = {
  setUpdateUser: PropTypes.func,
  updateUser: PropTypes.any,
  handleUpdate: PropTypes.func,
};

export default ModalUpdate;
