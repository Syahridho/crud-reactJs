import Button from "../../Elements/Button";
import Modal from "./../../Elements/Modal";

const ModalDelete = () => {
  return (
    <Modal>
      <h1 className="text-md font-medium">Yakin ingin Menghapus?</h1>
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

export default ModalDelete;
