const Footer = () => {
    return (
        <>
            <div className=" h-[500px] phone:h-[1000px] phone:justify-end  phone:flex-col flex items-center gap-[150px] justify-center bg-purple-950 " id="footer">
                <div className=" w-[360px] phone:text-center ">
                    <h1 className=" font-bold uppercase text-red-700 text-[60px] ">Zipzap AI</h1> <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </p>
                    <div className=" phone:relative phone:left-[110px] phone:text-[20px] mt-3 flex items-center gap-3 ">
                        <i className=" fas fa-phone "></i>
                        <a href="#home">0909152561</a>
                    </div>
                    <div className=" mt-3 flex items-center gap-3 phone:relative phone:left-[80px] phone:text-[20px] ">
                        <i className="fa-solid fa-envelope"></i>
                        <a href="home">info@aizipzap.com</a>
                    </div>
                </div>

                <div className=" phone:text-center flex flex-col gap-4 ">
                    <h1 className=" phone:text-[40px] font-bold text-purple-600 text-[20px] drop-shadow-[0_0_20px_red] ">QUICK LINKS</h1>
                    <a className=" mt-5 phone:text-[20px] " href="#home">White paper</a>
                    <a className=" phone:text-[20px] " href="#home">User support</a>
                    <a className=" phone:text-[20px] " href="#home">Report a Bug</a>
                    <a className=" phone:text-[20px] " href="#home">Terms & Service</a>
                    <a className=" phone:text-[20px] " href="#home">News</a>
                    <a className=" phone:text-[20px] " href="#home">FAQs</a>
                </div>

                <div className=" phone:m-[50px] w-[350px] phone:text-center ">
                    <h1 className=" font-bold text-purple-600 text-[20px] drop-shadow-[0_0_20px_red] uppercase phone:text-[30px] ">Join newsletter</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    </p>

                    <label>
                        <input type="text" className=" mt-[15px] w-[100%] h-[50px] outline-none bg-opacity-[0.4] bg-purple-600 pl-[20px] pr-[20px] font-semibold rounded-[10px] rounded-tr-[50px] " placeholder="Enter email to subscribe" />
                        <button className=" fa-brands text-[40px] relative phone:left-[130px] bottom-[45px] left-[300px] fa-telegram "></button>
                    </label>
                    <h2 className=" uppercase font-semibold text-[20px] text-purple-700 drop-shadow-[0_0_20px_red] phone:text-[30px] ">Follow US</h2>
                    <div className=" phone:justify-center flex gap-3 mt-2 ">
                        <a href="#home" className=" phone:text-[30px] fa-brands fa-discord "></a>
                        <a href="#home" className=" phone:text-[30px] fa-brands fa-facebook "></a>
                        <a href="#home" className=" phone:text-[30px] fa-brands fa-medium "></a>
                        <a href="#home" className=" phone:text-[30px] fa-brands fa-telegram "></a>
                        <a href="#home" className=" phone:text-[30px] fa-brands fa-twitter"></a>
                    </div>
                </div>

            </div>
            <hr />
            <h1 className=" text-center m-10 font-semibold ">
                Ushbu loyiha shunchaki tailwindcssni <br /> o'rganish uchun figma edi <br /> uning funksionalligi <br /> kam
            </h1>
        </>
    )
}

export default Footer