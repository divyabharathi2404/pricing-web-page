import React , {useState} from "react";
import data from './lib/data.json';

function App() {
  const [toggle,setToggle] = useState(true);

  return (
    <>
      <header className="relative w-full h-[45vh] bg-blue-900 text-white font-sans lg:pt-4">
        <div className="absolute w-[90vh] lg:w-max top-[55%] left-[50%] 
        lg:-translate-y-[90%]  -translate-y-[85%] -translate-x-[50%] ">
          <h1 className=" text-center lg:text-5xl  md:text-3xl text-2xl font-bold mb-4 ">
            Our plans for your business strategies!
          </h1>
          <h2 className=" text-center justify-center w-[50vh] lg:w-full lg:text-lg text-md lg:translate-x-0 translate-x-[40%]">
            Try for free 7 days and get unlimited access to our investment
            service and mangement
          </h2>
          <div className=" mt-8 text-center ">
            <label className="inline-flex w-40 h-9  rounded-full bg-white cursor-pointer">
              <span className={`absolute py-1.5  text-black/70 text-sm font-medium ${!toggle ? 'translate-x-20 px-2 ' : 'translate-0 px-4 ' } transition-none`}>Monthly</span>
              <div className="relative ">
                <input
                  type="checkbox"
                  checked={toggle}
                  onChange={()=>{ setToggle(!toggle)}}
                  className=" sr-only peer "
                />
                <div className="absolute w-20 h-9 py-1.5 text-sm font-medium bg-blue-800 rounded-full  peer-hover:ring-1 peer-checked:translate-x-20  transition" >Yearly</div>
                
              </div>
            </label>
          </div>
        </div>
      </header>
      <main className="  absolute top-[35%]  left-[50%] -translate-x-[50%]  flex gap-5 flex-col  lg:flex-row lg:mt-0 mt-6"  >
        {
          data.map((dat,index)=>{
            console.log(dat)
            return (
              <section key={index} className="relative  w-[22rem]  h-[26rem] bg-slate-100 rounded-md ring-1 ring-slate-600/20 shadow-lg mb-5 text-black p-8 hover:bg-blue-600 hover:text-white hover:fill-white  hover:scale-105 transition group font-sans"  >
                <h3 className="text-3xl font-medium mb-4 text-slate-700 group-hover:text-white ">{dat.plan}</h3>
                <p className= "text-5xl font-bold mb-4">{toggle ? dat.price_list.month : dat.price_list.year}<span className="text-sm font-bold ">{toggle ? '/month' : '/year'}</span></ p>
                <p className="text-md text-slate-700 group-hover:text-white mb-4 ">For business that want to optimize sales</p>
                <section className="flex flex-col gap-2">
                {
                  dat.features.map((feature,idx ) => {
                      return (
                        <div key={idx} className="flex gap-3 items-center ">
                          <svg
                            className="h-4 w-4 rounded-full  text-white group-hover:text-blue-800
                            fill-blue-800 group-hover:fill-white"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M9 12l2 2l4 -4" />
                          </svg>

                          <span className="text-sm text-slate-700 group-hover:text-white  ">{feature}</span>
                        </div>
                      );
                  })
                }
                </section>
                <section className="absolute bottom-0 py-8">
                  <button className="w-[18rem] ring-1 text-sm font-bold  ring-blue-900 py-2 mt-4 rounded-sm text-blue-900 group-hover:bg-white hover:scale-105 transition">
                      Choose Plan
                  </button>
                </section>
               
              </section>
            )
          })
        }
      </main>
    </>
  );
}

export default App;
