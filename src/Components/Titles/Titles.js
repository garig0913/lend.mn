const Titles = (props) => {
   return (
      <div className="flex flex-col justify-center items-center m-5">
         <h1 className="text-3xl text-gray-700 py-4 title font-bold relative pb-7">
            {props.title}
         </h1>
         {props.children}
      </div>
   );
};

export default Titles;
