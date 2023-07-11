import Button from "./Button";

function RecentWork() {
  return (
    <div className="flex flex-col md:flex-row justify-between m-10">
      <h2 className="text-3xl">Nuestro Trabajo Reciente</h2>
      <Button porDefecto={true} className="mt-6 md:mt-0">Encuentra más</Button>
    </div>
  );
}

export default RecentWork;
