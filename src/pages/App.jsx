import { useState } from "react";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import Card from "../components/Fragments/Card";
import ModalDelete from "../components/Fragments/ModalDelete";
// import ModalEdit from "../components/Fragments/ModalEdit";
import init from "../utils/init";

const App = () => {
  const [datas, setDatas] = useState(init());
  const [data, setData] = useState([]);
  const [deleteUser, setDeleteUser] = useState({});
  const [updateUser, setUpdateUser] = useState({});
  return (
    <div className="max-w-lg mx-auto ">
      <div className="p-4 bg-slate-100">
        <h1 className="text-2xl font-bold mb-4">CRUD</h1>
        <Input />
        <Button variant="bg-slate-800" className="w-1/5">
          Add
        </Button>
      </div>
      <div>
        {datas.map((data, index) => (
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
          />
        )}
        {/* <ModalEdit /> */}
      </div>
    </div>
  );
};

export default App;
