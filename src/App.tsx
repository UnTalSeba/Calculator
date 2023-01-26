import { Base } from "./components/Base";

function App() {
  return (
    <>
      <h1 className="text-neutral-50 font-bold text-2xl justify-center m-5 ">
        React + TypeScript Calculator
      </h1>

      <div className="flex justify-center items-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className="w-16"/>
      <p className="text-neutral-50 font-bold text-2xl mx-2">+</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg " className="w-16"/>

      </div>

      <Base />
    </>
  );
}

export default App;
