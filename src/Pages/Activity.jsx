import "../Styles/Column.css";


function Activity() {
  return (
    <div>
      
      <h1 className="text-5xl mt-32 text-center font-bold topic text-yellow-500">Activity</h1>
      

      

      <div className="mt-40">
        
        <div className="flex flex-row justify-center first_column">
          <div className="first mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <a href="https://www.figma.com/proto/uXKjmp1WMQsSwuGeH0V6Nf/Untitled?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2" target={"_blank"}><img
              src="../img/Energynex.jpg"
              alt="energynex"
              className="w-80 h-96 object-cover"
            /></a>
            <h3 className="text-center text-xl font-semibold pt-3 pb-2">
              Young Innovators Bootcamp
            </h3>
            <p className="text-center text-lg">EnergyNex (Rank 4th from 10 team)</p>
            <a href="https://drive.google.com/file/d/16K837KO27VAYEIUTidUNnnMfNo6tjAXC/view?usp=sharing" target={"_blank"}><button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button></a>
          </div>

          <div className="second shadow-2xl hover:scale-110 duration-150 ">
            <a href="https://drive.google.com/file/d/1bkipmSZhFA9p9TDhcuVIjpm1WcOhtXyL/view?usp=sharing" target={"_blank"}><img
              src="../img/bettercountry.jpg"
              alt="mybettercountry"
              className="w-80 h-96 object-cover"
            /></a>
            <h3 className="text-center text-xl font-semibold pt-3 pb-2">
              My Better Country Hackathon
            </h3>
            <p className="text-center text-lg">Konrad-Adenauer-Stiftung</p>
            <a href="https://drive.google.com/file/d/11fpUcxTGrz4Dbe0s5EmeFE07zlXFoicN/view?usp=sharing" target={"_blank"}><button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button></a>
          </div>
        </div>
        

        
        <div className="flex flex-row justify-center mt-40 second_column">
          <div className="third mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <a href="https://drive.google.com/file/d/1wNBaNXyOt99ejVzTMnzRfPpM2bgTnoB-/view?usp=sharing" target={"_blank"}><img
              src="../img/42Bangkok.jpg"
              alt="42Bangkok"
              className="w-80 h-96 object-cover"
            /></a>
            <h3 className="text-center text-xl font-semibold pt-3 pb-2">
              International Startup Coding 
            </h3>
            <p className="text-center text-lg">42 Bangkok (Rank 19th from 26 team)</p>
            <a href="https://drive.google.com/file/d/1qQkBhHCX2PPhj_0tNkFhAsjYpd1Vz8CE/view?usp=sharing" target={"_blank"}><button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button></a>
          </div>

          <div className="fourth shadow-2xl hover:scale-110 duration-150">
            <a href="https://drive.google.com/file/d/1lNJx3cU62Qx3beL8c6A12xMu588PDWL5/view?usp=sharing" target={"_blank"}><img
              src="../img/Caihackathon.jpg"
              alt="caihackathon"
              className="w-80 h-96 object-cover"
            /></a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              CAI CLUB HACKATHON
            </h3>
            <p className="text-center text-lg">CPALL</p>
            <a href="https://drive.google.com/file/d/1z1axU2z_v3t0e9u0VwMI8R4XwdUd5kub/view?usp=sharing" target={"_blank"}><button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button></a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Activity;
