import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import Card from "../components/Fragments/Card";
// import ModalDelete from "../components/Fragments/ModalDelete";
// import ModalEdit from "../components/Fragments/ModalEdit";

const App = () => {
  return (
    <div className="max-w-lg mx-auto ">
      <div className="p-4 bg-slate-100">
        <h1 className="text-2xl font-bold mb-4">CRUD</h1>
        <Input />
        <Button variant="bg-slate-800" className="w-1/5">
          Add
        </Button>
      </div>
      {/* <ModalEdit /> */}
      {/* <ModalDelete /> */}
      <div>
        <Card>Makan Siang 1</Card>
        <Card>Makan Siang 2</Card>
        <Card>Makan Siang 3</Card>
        <Card>Makan Siang 4</Card>
      </div>
    </div>
  );
};

export default App;
