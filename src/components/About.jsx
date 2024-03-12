import game from "./images/about.png"

const About = () => {
    return (
        <>
            <div id="about" className=" h-[633px] phone:max-w-[100%] bg-about bg-cover bg-center after:w-[1366px] after:h-[1503px] phone:after:max-w-[100%] after:absolute after:backdrop-brightness-[0.1] after:m-0 after:p-0 ">

                <div className=" absolute z-10 w-[1366px] phone:max-w-[100%] mt-[70px] ">
                    <h1 className=" text-center uppercase phone:text-[30px] mt-[40px] text-[40px] ">Welcome to</h1>
                    <h1 className=" text-purple-700 font-bold phone:text-[50px] text-center text-[100px] ">MOON2025</h1>
                    <p className=" text-center phone:text-[12px] mt-9 ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia maxime, rerum placeat nihil <br /> tempora omnis consectetur corporis veritatis est enim voluptate brfacere? <br /> Cum voluptatibus minus expedita? Odit nulla consectetur earum eius sequi ea saepe, eaque <br /> quo sunt non quam? Odit error omnis labore quod. Totam ab ad tempora dignissimos reiciendis.
                    </p>
                </div>

            </div>

            <div className=" flex flex-col items-center phone:max-w-[100%] w-[1366px] h-[600px] bg-purple-800 ">
                <img src={game} alt="Game" className="relative phone:w-[] phone:h-[200px] w-[900px] bottom-7 h-[400px] " />
                <h1 className=" text-purple-800 relative font-bold text-[70px] mt-[80px] after:w-[340px] after:m-0 after:p-0 after:top-[110px] after:left-0 after:h-[2px] after:bg-purple-800  after:absolute  ">Gameplay</h1>
            </div>

        </>
    )
}

export default About