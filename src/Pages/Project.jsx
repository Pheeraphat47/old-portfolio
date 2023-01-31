import "../Styles/Column.css";

function Project() {
  return (
    <div>
      <h1 className="text-5xl mt-32 text-center font-bold topic text-yellow-500">
        Projects
      </h1>

      <div className="mt-40">
        <div className="flex flex-row justify-center first_column">
          <div className="first mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <a
              href="https://pheeraphat.netlify.app"
              target={"_blank"}
            >
              <img
                src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.15752-9/328598492_1223007128600305_1123524543806411818_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGcwCNfVyH_FgMX20vuhMXLOacJlObf__E5pwmU5t__8bx0QH_KgaMD9CJpunDn6g-D1QFM0miNCCywq3JjSPjn&_nc_ohc=VEsaBC-gAr8AX_GY93A&_nc_ht=scontent.fbkk22-3.fna&oh=03_AdR4e2VdkffcyyF4eErp1lICKnCuaCj5HaY57nT3masvNg&oe=64002C4D"
                className="w-80 h-96 object-scale-down"
              />
            </a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Portfolio Website
            </h3>
            <p className="text-center text-lg">React Project</p>
            <a
              href="https://github.com/Pheeraphat47/webportfolio"
              target={"_blank"}
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full ml-16 mt-5 mb-5">
                Github Repository
              </button>
            </a>
          </div>

          <div className="second shadow-2xl hover:scale-110 duration-150 ">
            <a
              href="https://country-info-search-pheeraphat.netlify.app/"
              target={"_blank"}
            >
              <img
                src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.15752-9/328532531_1261843381035802_2202153336443522757_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEbrOJYwd7S6VcItL07RU_UxeoA2FlosbvF6gDYWWixuzBSvMQ2wdQrwuEQ2rdCy_9nY8Zt461jdwCMrF051MXL&_nc_ohc=a5TOcheug64AX8wRZoh&tn=HhRAICo2U-C__Bsm&_nc_ht=scontent.fbkk22-1.fna&oh=03_AdQsfdZhijup_nZ4wnxtzC3JB7HtGXRot-dPwZBAer7UBg&oe=640020AE"
                className="w-80 h-96 object-scale-down"
              />
            </a>
            <h3 className="text-center text-xl font-semibold pt-3 pb-2">
              Country Information Search
            </h3>
            <p className="text-center text-lg">React Project</p>
            <a
              href="https://github.com/Pheeraphat47/Country_Information_Search"
              target={"_blank"}
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full ml-16 mt-5 mb-5">
                Github Repository
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-center first_column mt-40">
          <div className="first mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <a
              href="https://calculator-webapp-bypheeraphat.netlify.app/"
              target={"_blank"}
            >
              <img
                src="../img/calculator.png"
                className="w-80 h-96 object-scale-down"
              />
            </a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Calculator App
            </h3>
            <p className="text-center text-lg">React Project</p>
            <a
              href="https://github.com/Pheeraphat47/Calculator_WebApp"
              target={"_blank"}
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full ml-16 mt-5 mb-5">
                Github Repository
              </button>
            </a>
          </div>

          <div className="second shadow-2xl hover:scale-110 duration-150 ">
            <a
              href="https://form-validation-by-pheeraphat.netlify.app"
              target={"_blank"}
            >
              <img
                src="../img/Registrationform.png"
                className="w-80 h-96 object-scale-down"
              />
            </a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Form Validation
            </h3>
            <p className="text-center text-lg">React Project</p>
            <a
              href="https://github.com/Pheeraphat47/form-validation"
              target={"_blank"}
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full ml-16 mt-5 mb-5">
                Github Repository
              </button>
            </a>
          </div>
        </div>

        {/* javascript projects */}

        <div className="flex flex-row justify-center first_column mt-40">
          <div className="first mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <a href="https://mydiary.vercel.app/" target={"_blank"}>
              <img
                src="../img/Diary.png"
                className="w-80 h-96 object-scale-down"
              />
            </a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Diary
            </h3>
            <p className="text-center text-lg">Web Technology Project</p>
            <a href="https://github.com/Pheeraphat47/Diary" target={"_blank"}>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full ml-16 mt-5 mb-5">
                Github Repository
              </button>
            </a>
          </div>

          <div className="second shadow-2xl hover:scale-110 duration-150 ">
            <a
              href="https://weather-webapp-pheeraphat.vercel.app/"
              target={"_blank"}
            >
              <img
                src="../img/weatherapp.png"
                className="w-80 h-96 object-scale-down"
              />
            </a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Weather App
            </h3>
            <p className="text-center text-lg">JavaScript Project</p>
            <a
              href="https://github.com/Pheeraphat47/WeatherWebApp"
              target={"_blank"}
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full ml-16 mt-5 mb-5">
                Github Repository
              </button>
            </a>
          </div>
        </div>

        {/* last row => include typescript and nodejs project  */}

        <div className="flex flex-row justify-center mt-40 second_column">
          <div className="third mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <a href="https://mydiary.vercel.app/" target={"_blank"}>
              <img
                src="../img/worldcup.png"
                className="w-80 h-96 object-scale-down"
              />
            </a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Worldcup Website
            </h3>
            <p className="text-center text-lg">Nodejs&Expressjs Project</p>
            <a
              href="https://github.com/Pheeraphat47/Nodejs-Expressjs_project"
              target={"_blank"}
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full ml-16 mt-5 mb-5">
                Github Repository
              </button>
            </a>
          </div>

          <div className="fourth shadow-2xl hover:scale-110 duration-150">
            <a
              href="https://typescript-todolistapp.netlify.app/"
              target={"_blank"}
            >
              <img
                src="../img/todolist.png"
                className="w-80 h-96 object-scale-down"
              />
            </a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              To-do-list
            </h3>
            <p className="text-center text-lg">TypeScript Project</p>
            <a
              href="https://github.com/Pheeraphat47/TypeScript-Project"
              target={"_blank"}
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full ml-16 mt-5 mb-5">
                Github Repository
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
