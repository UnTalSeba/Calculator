import Button from "./Button";
import Screen from "./Screen";

export const Base = () => {
  const numbers = ['*', 'x^b', 'c', 'x', 
                  '7' ,"8", "9", "/", 
                  "4", "5", '6', '*', 
                  '1', '2','3', '-',
                  '+/-', '0', '=', '+'];

  return (
    <>
      
      <div className="bg-sky-700 w-96 h-auto flex flex-wrap justify-center rounded-lg p-3 my-16">
        <div className="">
          <Screen symbol="a"/>
        </div>

        <div className="flex flex-wrap justify-center">

          {numbers.map((number) => (
          <Button key={number} symbol={number} />
            ))}

        </div>
      </div>
    </>
  );
}


