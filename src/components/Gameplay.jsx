import gameplay from "./images/person-gameplay.png"

const Gameplay = () => {
    return (
        <>
            <div id="gameplay" className=' bg-purple-600 h-[270px] '>
                <div className=' phone:max-w-[100%] top-[70px] w-[1366px] h-[270px] bg-gameplay relative bg-contain bg-no-repeat '>
                    <div className=' mx-auto text-center phone:max-w-[100%] font-semibold relative w-[700px] h-[270px] '>
                        <p className=" phone:text-[12px] ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro, accusamus sunt, voluptatum perspiciatis aperiam delectus debitis consequatur quos illo, dolores maiores eum id reiciendis voluptate eligendi nemo quibusdam dicta magnam? Qui non, ex ratione consectetur nostrum tenetur tempore dicta, quia aliquam distinctio id amet sequi quibusdam vero. Blanditiis eveniet neque, ipsam numquam suscipit, quod rem culpa dolores placeat fuga iste, enim nihil dolorem? Doloribus nesciunt sed neque dolore tempore?
                        </p>
                    </div>
                </div>
            </div>

            <div className=' phone:h-[900px] phone:items-center flex w-[1366px] phone:max-w-[100%] phone:gap-0 phone:flex-col justify-center gap-[170px] h-[350px] bg-purple-700 '>
                <img src={gameplay} alt="Game" className=" w-[330px] h-[442px] relative bottom-[92px] drop-shadow-[0_0_50px_red] " />
                <div className=" w-[400px] h-[350px] phone:text-center drop-shadow-[0_0_50px_red] ">
                    <h1 className=" uppercase text-[40px] ">Frontine</h1>
                    <h1 className=" uppercase text-purple-600 font-bold text-[50px] ">Crew</h1>
                    <p className=" font-semibold  ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate consequatur aliquam officia reprehenderit, ipsa rem incidunt amet laborum
                    </p>
                    <a href="#home">
                        <button className=" bg-transparent border-[3px] rounded-[10px] shadow-[0_5px_2px_1px_purple] rounded-br-[50%] rounded-tl-[50%] mt-7 active:translate-y-[5%] active:shadow-none transition hover:bg-fuchsia-800 border-fuchsia-800 w-[170px] h-[50px] font-semibold ">Watch</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Gameplay