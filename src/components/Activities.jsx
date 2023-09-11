import React from "react";
// import coments

const Activities = ( {visible} ) => {
  return (
    <div className={`transition-all ${visible ? 'h-auto opacity-100' : 'h-0 opacity-0'} overflow-hidden`}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col space-y-6 space-x-0 md:space-x-6 md:space-y-0 md:flex-row">
          <div className="text-center">
            <img
              className="w-[250px] rounded-2xl md:w-[380px] lg:w-[200px]"
              src="https://dibujosycolores.com/numeros/numero-1/numero-1-1.jpg"
              alt=""
            />
            <h3>actividad 1</h3>
          </div>
          <div className="text-center">
            <img
              className="w-[250px] rounded-2xl md:w-[380px] lg:w-[200px]"
              src="https://dibujosycolores.com/numeros/numero-2/numero-2-1.jpg"
              alt=""
            />
            <h3>actividad 2</h3>
          </div>
          <div className="text-center">
            <img
              className="w-[250px] rounded-2xl md:w-[380px] lg:w-[200px]"
              src="https://dibujosycolores.com/numeros/numero-3/numero-3-1.jpg"
              alt=""
            />
            <h3>actividad 3</h3>
          </div>
        </div>
        {/* <Coments /> */}
      </div>
    </div>
  );
};

export default Activities;