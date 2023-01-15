function Activity() {
  return (
    <div>
      <h1 className="text-5xl mt-32 text-center font-bold">Activity</h1>

      {/* เรียงตามวันที่ได้  (ก่อน-หลัง)
              1. Tobeit66
              2. Charmcase Competition
              3. Climathon
              4. SIT Helloworld
            */}

      <div className="mt-40">
        <div className="flex flex-row justify-center">
          <div className="helloworld mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Energynex.jpg"
              alt="helloworld"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-xl font-semibold pt-3 pb-2">
              Young Innovators Bootcamp
            </h3>
            <p className="text-center text-lg">EnergyNex (Rank 4th from 10 teams)</p>
          </div>

          <div className="climathon shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/bettercountry.jpg"
              alt="environhack"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-xl font-semibold pt-3 pb-2">
              My Better Country Hackathon
            </h3>
            <p className="text-center text-lg">Konrad-Adenauer-Stiftung</p>
          </div>
        </div>

        <div className="flex flex-row justify-center mt-40">
          <div className="charmcase mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/42Bangkok.jpg"
              alt="chula"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-xl font-semibold pt-3 pb-2">
              International Startup Coding 
            </h3>
            <p className="text-center text-lg">42 Bangkok (Rank 19th from 26 teams)</p>
          </div>

          <div className="tobeit shadow-2xl hover:scale-110 duration-150">
            <img
              src="../img/Caihackathon.jpg"
              alt="tobeit"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              CAI CLUB HACKATHON
            </h3>
            <p className="text-center text-lg">CPALL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
