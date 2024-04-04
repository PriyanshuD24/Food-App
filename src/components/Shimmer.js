export let Shimmer=()=>{
var arrOfCards=[];
   
        for(let i=0;i<16;i++){
            arrOfCards.push(
              <div class="w-80 animate-pulse h-[378px]">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
            );
        }
    

    return (
      <div className=" mx-auto p-3 ">
      
        <div className="Cardcontainer grid grid-cols-[repeat(auto-fit,_minmax(310px,_1fr))] gap-6 justify-items-center items-center  ">
          {arrOfCards}
        </div>
      </div>
    );
}