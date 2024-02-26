import Modal from "./../../Elements/Modal";
import Button from "../../Elements/Button";
import Input from "../../Elements/Input";

const ModalEdit = () => {
  return (
    <Modal>
      <Input className="w-full" />
      <div className="flex justify-between gap-2">
        <Button variant="bg-blue-500" className="w-24 mt-3">
          Batalkan
        </Button>
        <Button variant="bg-red-500" className="w-24 mt-3">
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default ModalEdit;
