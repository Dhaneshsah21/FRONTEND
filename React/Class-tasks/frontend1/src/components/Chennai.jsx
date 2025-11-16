
const Chennai = ()=> {
    return(
        <>
        <Navbar/>
        <Itcompanies/>
        </>
    )
}
export default Chennai

export const Navbar =()=>{

    return(
        <>
        <div className="Nav">
        <div className="logo">
          <h3>Cities</h3>
        </div>
        <div className="links">
          <a href="#">Chennai</a>
          <a href="#">Kerala</a>
          <a href="#">Karnataka</a>
        </div>
      </div>
        </>
    )
}

export const Itcompanies =()=>{
    return(
        <>
        <div className="itcompany">
            <div>
                <h1>IT COMPANIES IN CHENNAI</h1>
            </div>
            <div>
                <p>
                    Chennai has a growing and supportive IT environment with many leading companies like TCS, Infosys, Wipro, Cognizant, and Zoho. Most IT offices are located on OMR, Siruseri, and Sholinganallur, where employees get modern workspaces, good infrastructure, and a calm atmosphere. The areas around these tech parks have plenty of food courts, transport options, and basic facilities that make daily work easier. With a friendly work culture, steady opportunities, and a safe environment, Chennai has become one of the best places for IT professionals to build their careers.
                </p>
            </div>
        </div>
        <Robotics/>
        </>
    )
}
export const Robotics = ()=>{
    return(
        <>
        <div className="robotics">
            <h2>THIS IS ROBOTICS</h2>
            <p>Chennai is becoming a growing hub for robotics, with companies and startups working on automation and smart machines. Areas like OMR and Guindy have robotics firms that build industrial and service robots for factories and hospitals. Colleges such as IIT Madras also support robotics research and training. With increasing demand for automation, Chennai offers good opportunities for students and engineers interested in robotics.</p>
        </div>
        </>
    )
}
