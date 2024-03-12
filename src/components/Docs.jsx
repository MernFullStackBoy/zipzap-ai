import title from "./images/Title.png"
import title2 from "./images/title2.png"

const Docs = () => {
    return (
        <div id="docs" className=" h-[600px] phone:h-[1000px] bg-purple-950 ">
            <h1 className=" uppercase font-semibold text-center text-purple-800 drop-shadow-[0_0_20px_red] text-[50px] ">Docs</h1>
            <div className=" flex phone:items-center phone:flex-col phone:gap-[50px] gap-[100px] justify-center mt-[100px] ">
                <img className=" phone:w-[380px] hover:scale-[1.1] transition drop-shadow-[0_0_70px_red] " src={title} alt="" />
                <img className=" hover:scale-[1.1] phone:w-[380px] transition drop-shadow-[0_0_70px_red] " src={title2} alt="" />
            </div>
        </div>
    )
}

export default Docs