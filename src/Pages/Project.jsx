import "../Styles/Column.css";
import { Bounce , JackInTheBox} from "react-awesome-reveal";


function Project() {
  return (
    <div>
      <JackInTheBox>
      <h1 className="text-5xl mt-32 text-center font-bold topic text-yellow-500">Projects</h1>
      </JackInTheBox>

     

      <div className="mt-40">
        <Bounce>
        <div className="flex flex-row justify-center first_column">
          <div className="first mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/worldcup.png"
              alt="worldcup"
              className="w-80 h-96 object-scale-down"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Worldcup Website
            </h3>
            <p className="text-center text-lg">Nodejs&Expressjs Projects</p>
          </div>

          <div className="second shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Registrationform.png"
              alt="Registrationform"
              className="w-80 h-96 object-scale-down"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Form Validation
            </h3>
            <p className="text-center text-lg">React Projects</p>
          </div>          
        </div>
        </Bounce>
        
         
       <Bounce>
        <div className="flex flex-row justify-center mt-40 second_column">
          <div className="third mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Diary.png"
              alt="Diary"
              className="w-80 h-96 object-scale-down"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Diary
            </h3>
            <p className="text-center text-lg">Web Technology Projects</p>
          </div>

          <div className="fourth shadow-2xl hover:scale-110 duration-150">
            <img
              src="../img/todolist.png"
              alt="todolist"
              className="w-80 h-96 object-scale-down"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              To-do-list
            </h3>
            <p className="text-center text-lg">TypeScript Projects</p>
          </div>
        </div>
        </Bounce>
      </div>
    </div>
  );
}

export default Project;
