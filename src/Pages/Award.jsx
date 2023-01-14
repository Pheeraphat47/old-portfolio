function Award() {
  return (
    <div>
      <h1 className="text-5xl mt-32 text-center font-bold">Award&Honors</h1>

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
              src="../img/Helloworld.jpg"
              alt="helloworld"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">SIT Helloworld</h3>
            <p className="text-center text-lg">Best FrontEnd Development</p>
          </div>

          <div className="climathon shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Environhack.jpg"
              alt="environhack"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">Climathon BKK</h3>
            <p className="text-center text-lg">1st Runner Up</p>
          </div>
        </div>

        <div className="flex flex-row justify-center mt-40">
          <div className="charmcase mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Chula.png"
              alt="chula"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">Charm case Chula</h3>
            <p className="text-center text-lg">1st Runner Up</p>
          </div>

          <div className="tobeit shadow-2xl hover:scale-110 duration-150">
            <img
              src="../img/Tobeit.jpg"
              alt="tobeit"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">Tobeit66</h3>
            <p className="text-center text-lg">Best Project Award</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Award;
