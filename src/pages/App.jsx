import { useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import Card from "../components/Fragments/Card";
import ModalDelete from "../components/Fragments/ModalDelete";
import ModalUpdate from "../components/Fragments/ModalUpdate";

const App = () => {
  const [datas, setDatas] = useState(JSON.parse(localStorage.getItem("notes")));
  const [newData, setNewData] = useState({});
  const [deleteUser, setDeleteUser] = useState({});
  const [updateUser, setUpdateUser] = useState({});

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(datas));
  }, [datas]);

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

    if (datas) {
      setDatas([...datas, newData]);
      setNewData({});
    } else {
      setDatas([newData]);
      setNewData({});
    }
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
      <div className="p-6 bg-white ring-1 ring-gray-950/5 mb-4 rounded-b-xl sticky top-0 shadow-md">
        <h1 className="text-3xl font-bold mb-4">CRUD</h1>
        <div className="flex justify-between gap-4">
          <Input
            name="search"
            className="shadow-sm"
            value={newData}
            onChange={(event) => handleChange(event)}
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
        {datas ? (
          datas.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              onUpdate={() => setUpdateUser(data)}
              onDelete={() => setDeleteUser(data)}
            >
              {data.name}
            </Card>
          ))
        ) : (
          <h1 className="text-center text-slate-400">Data Kosong</h1>
        )}

        {Object.keys(deleteUser).length > 0 && (
          <ModalDelete
            setDeleteUser={() => setDeleteUser({})}
            deleteUser={deleteUser}
            handleDelete={handleDelete}
          />
        )}

        {Object.keys(updateUser).length > 0 && (
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
