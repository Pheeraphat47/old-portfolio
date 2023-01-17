import "../Styles/Column.css";



function Project() {
  return (
    <div>
      
      <h1 className="text-5xl mt-32 text-center font-bold topic text-yellow-500">Projects</h1>
      

      

      <div className="mt-40">
        
        <div className="flex flex-row justify-center first_column">
          <div className="first mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <a href="http://env-2955759.th1.proen.cloud/" target={"_blank"}><img
              src="../img/worldcup.png"
              alt="worldcup"
              className="w-80 h-96 object-scale-down"
            /></a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Worldcup Website
            </h3>
            <p className="text-center text-lg">Nodejs&Expressjs Projects</p>
            <a href="https://drive.google.com/file/d/15kidy-4-QtN3V5DvRbI4sKWyvEAadr-a/view?usp=sharing" target={"_blank"}><button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button></a>
          </div>

          <div className="second shadow-2xl hover:scale-110 duration-150 ">
            <a href="https://form-validation-bypheez.netlify.app/" target={"_blank"}><img
              src="../img/Registrationform.png"
              alt="Registrationform"
              className="w-80 h-96 object-scale-down"
            /></a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Form Validation
            </h3>
            <p className="text-center text-lg">React Projects</p>
            <a href="https://drive.google.com/file/d/1D2GWyFKKejsmLfwRI9IW1OCCAAZB9I5s/view?usp=sharing" target={"_blank"}><button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button></a>
          </div>          
        </div>
        
        
         
       
        <div className="flex flex-row justify-center mt-40 second_column">
          <div className="third mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <a href="https://mydiary.vercel.app/" target={"_blank"}><img
              src="../img/Diary.png"
              alt="Diary"
              className="w-80 h-96 object-scale-down"
            /></a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Diary
            </h3>
            <p className="text-center text-lg">Web Technology Projects</p>
            <a href="https://drive.google.com/file/d/11h3ix_HSlpVvjAU19EdudZvBDvgUO--E/view?usp=sharing" target={"_blank"}><button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button></a>
          </div>

          <div className="fourth shadow-2xl hover:scale-110 duration-150">
            <a href="https://typescript-todolistapp.netlify.app/" target={"_blank"}><img
              src="../img/todolist.png"
              alt="todolist"
              className="w-80 h-96 object-scale-down"
            /></a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              To-do-list
            </h3>
            <p className="text-center text-lg">TypeScript Projects</p>
            <a href="https://drive.google.com/file/d/1no4ghBUxMMkHA-7wuIhWcAu6xLVZ2xEa/view?usp=sharing" target={"_blank"}><button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button></a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Project;
