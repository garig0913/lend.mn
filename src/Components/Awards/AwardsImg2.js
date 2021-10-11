const AwardsImg2 = (props) => {
   return (
      <div className="flex w-full justify-center items-center awardImg2">
         <button>
            <img
               className={`m-3 pb-5 mx-10 ${props.AwardsImg}`}
               src={props.img1}
               alt="abc"
            />
         </button>

         <button>
            <img
               className={`m-3 pb-5 mx-10 ${props.AwardsImg}`}
               src={props.img2}
               alt="abc"
            />
         </button>
         <button>
            <img
               className={`m-3 pb-5 mx-10 ${props.AwardsImg}`}
               src={props.img3}
               alt="abc"
            />
         </button>
         <button>
            <img
               className={`m-3 pb-5 mx-10 ${props.AwardsImg}`}
               src={props.img4}
               alt="abc"
            />
         </button>
         <button>
            <img
               className={`m-3 pb-5 mx-10 ${props.AwardsImg}`}
               src={props.img5}
               alt="abc"
            />
         </button>
      </div>
   );
};

export default AwardsImg2;
