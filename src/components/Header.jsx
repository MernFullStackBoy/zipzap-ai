import { useState } from "react"

const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <div id="home" className=" phone:max-w-[100%] w-[100%] h-[633px] bg-header phone:bg-center bg-cover ">
            <nav className=" pl-[70px] phone:pl-[30px] phone:pr-[30px] phone:max-w-[100%] z-10 pr-[70px] fixed flex items-center justify-between w-[1366px] h-[60px] bg-opacity-[0.4] bg-black ">
                <code className=" uppercase text-[30px] text-red-700 font-extrabold ">Zipzap AI</code>
                <div className=" phone:hidden w-[700px] flex justify-between font-semibold  ">
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#home">Home</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#about">About US</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#gameplay">Gameplay</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#item">NFS Item</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#team">Team</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#advice">Advicor</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#partner">Partner</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#docs">Docs</a>
                </div>

                <a href="#footer" className=" phone:hidden ">
                    <button className=" rounded-br-[50%] rounded-tl-[50%] bg-transparent border-[3px] rounded-[10px] shadow-[0_5px_2px_1px_purple] active:translate-y-[5%] active:shadow-none transition hover:bg-fuchsia-800 border-fuchsia-800 w-[170px] h-[50px] font-semibold ">Calling</button>
                </a>

                <button onClick={() => setMenu(true)} className="fa-solid hidden phone:block z-30 text-[30px] relative fa-bars"></button>
            </nav>

            <div className={`" hidden ${menu ? "phone:block" : "phone:hidden"} phone:transition phone:fixed phone:right-0 phone:w-[300px] phone:h-[80vh] bg-black z-20 "`}>
                <button onClick={() => setMenu(false)} className="fas fa-xmark relative left-[270px] text-[30px] "></button>
                <div className=" w-[100%] gap-5 pl-[30px] flex flex-col justify-between font-semibold  ">
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#home">Home</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#about">About US</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#gameplay">Gameplay</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#item">NFS Item</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#team">Team</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#advice">Advicor</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#partner">Partner</a>
                    <a className=" hover:scale-[1.1] transition hover:text-red-500 " href="#docs">Docs</a>
                </div> <br /> <br />
                <a href="#footer">
                    <button className=" ml-[30px] rounded-br-[50%] rounded-tl-[50%] bg-transparent border-[3px] rounded-[10px] shadow-[0_5px_2px_1px_purple] active:translate-y-[5%] active:shadow-none transition hover:bg-fuchsia-800 border-fuchsia-800 w-[170px] h-[50px] font-semibold ">Calling</button>
                </a>
            </div>

            <div className=" phone:top-[150px] bottom-[40px] phone:max-w-[100%] phone:text-center drop-shadow-[0_0_30px_red] h-[350px] relative pl-[70px] pr-[70px] top-[280px] ">
                <code className=" phone:text-[30px] text-[50px] font-bold ">TRANSFORMATION</code> <br />
                <code className=" phone:text-[30px] phone:text-center phone:text-red-500 text-[50px] text-fuchsia-800 font-bold ">AND RACE TO EARN</code>
                <p className=" phone:text-[12px] phone:text-center font-bold ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quasi earum vero ullam suscipit veritatis aliquam <br /> iure reiciendis. Vero, totam labore!
                </p>
                <a href="#footer">
                    <button className=" rounded-br-[50%] rounded-tl-[50%] bg-transparent border-[3px] rounded-[10px] shadow-[0_5px_2px_1px_purple] mt-7 active:translate-y-[5%] active:shadow-none transition hover:bg-fuchsia-800 border-fuchsia-800 w-[170px] h-[50px] font-semibold ">Calling</button>
                </a>
            </div>

        </div>
    )
}

export default Header