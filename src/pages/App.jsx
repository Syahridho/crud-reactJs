import { useState } from "react";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import Card from "../components/Fragments/Card";
import ModalDelete from "../components/Fragments/ModalDelete";
import ModalUpdate from "../components/Fragments/ModalUpdate";
import init from "../utils/init";

const App = () => {
  const [datas, setDatas] = useState(init());
  const [newData, setNewData] = useState("");
  const [deleteUser, setDeleteUser] = useState({});
  const [updateUser, setUpdateUser] = useState({});

  const handleChange = (event) => {
    setNewData({
      name: event.target.value,
    });
  };

  const handleCreate = ({ name }) => {
    const newData = {
      id: +new Date(),
      name: name,
    };
    setDatas([...datas, newData]);
    setNewData("");
  };

  const handleDelete = (id) => {
    const data = datas.filter((data) => data.id !== id);
    setDatas(data);
  };

  const handleUpdate = (id, name) => {
    const updateDatas = datas.map((data) => {
      if (data.id === id) {
        return { ...data, name: name };
      }
      return data;
    });
    setDatas(updateDatas);
  };

  return (
    <div className="max-w-lg mx-auto ">
      <div className="p-6 bg-white ring-1 ring-gray-950/5 mb-4 rounded-b-xl">
        <h1 className="text-3xl font-bold mb-4">CRUD</h1>
        <div className="flex justify-between gap-4">
          <Input
            name="search"
            className="shadow-sm"
            defaultValue={newData.name}
            onChange={() => handleChange(event)}
          />
          <Button
            variant="bg-slate-800"
            className="w-1/5"
            onClick={() => handleCreate(newData)}
          >
            Add
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {datas.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            onUpdate={() => setUpdateUser(data)}
            onDelete={() => setDeleteUser(data)}
          >
            {data.name}
          </Card>
        ))}

        {Object.keys(deleteUser).length && (
          <ModalDelete
            setDeleteUser={() => setDeleteUser({})}
            deleteUser={deleteUser}
            handleDelete={handleDelete}
          />
        )}

        {Object.keys(updateUser).length && (
          <ModalUpdate
            setUpdateUser={() => setUpdateUser({})}
            updateUser={updateUser}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default App;
