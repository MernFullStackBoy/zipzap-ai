import advice from "./images/advice.png"

const Advicor = () => {
    return (
        <div id="advice" className=" phone:h-[1100px] phone:max-w-[100%] h-[800px] bg-purple-950 ">
            <h1 className=" text-center relative top-[80px] text-[50px] text-purple-600 drop-shadow-[0_0_20px_red] ">OUR ADVICOR</h1>
            <p className=" mt-[100px] text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            </p>

            <div className="flex mt-[50px] phone:flex-col justify-center items-center gap-[30px]">
                <div className=' bg-linear border-fuchsia-400 border-[5px] drop-shadow-[0_0_10px_red] w-[350px] h-[450px] flex justify-center items-center rounded-tl-[20%] rounded-br-[20%] rounded-[10px] '>
                    <img className=" h-[440px] " src={advice} alt="" />
                </div>
                <div className=" w-[500px] phone:max-w-[100%] phone:text-center ">
                    <h1 className=" text-[40px] font-serif phone:text-[30px] font-bold ">DAVID THOMAS</h1>
                    <p>Chief Executive Officer</p><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                </div>
            </div>

        </div>
    )
}

export default Advicor