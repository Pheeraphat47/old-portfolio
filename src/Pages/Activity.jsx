import "../Styles/Column.css";


function Activity() {
  return (
    <div>
      
      <h1 className="text-5xl mt-32 text-center font-bold topic text-yellow-500">Activity</h1>
      

      

      <div className="mt-40">
        
        <div className="flex flex-row justify-center first_column">
          <div className="first mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Energynex.jpg"
              alt="energynex"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-xl font-semibold pt-3 pb-2">
              Young Innovators Bootcamp
            </h3>
            <p className="text-center text-lg">EnergyNex (Rank 4th from 10 team)</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button>
          </div>

          <div className="second shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/bettercountry.jpg"
              alt="mybettercountry"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-xl font-semibold pt-3 pb-2">
              My Better Country Hackathon
            </h3>
            <p className="text-center text-lg">Konrad-Adenauer-Stiftung</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button>
          </div>
        </div>
        

        
        <div className="flex flex-row justify-center mt-40 second_column">
          <div className="third mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/42Bangkok.jpg"
              alt="42Bangkok"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-xl font-semibold pt-3 pb-2">
              International Startup Coding 
            </h3>
            <p className="text-center text-lg">42 Bangkok (Rank 19th from 26 team)</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button>
          </div>

          <div className="fourth shadow-2xl hover:scale-110 duration-150">
            <img
              src="../img/Caihackathon.jpg"
              alt="caihackathon"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              CAI CLUB HACKATHON
            </h3>
            <p className="text-center text-lg">CPALL</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Activity;
