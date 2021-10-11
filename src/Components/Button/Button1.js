const Button1 = (props) => {
   return (
      <a href={props.link} target="_blank">
         <button className="w-60 h-10 rounded-full m-7 btn flex justify-center items-center text-white bg-black">
            <h1 className="text-white mr-1 text-xl">{props.children}</h1>
            <h2>{props.text}</h2>
         </button>
      </a>
   );
};

export default Button1;
