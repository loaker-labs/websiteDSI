import TopNav from "./TopNav"
import Array from "./Array"
import fond1 from "../assets/fond1.jpg"
import { useAppContext } from "../AppContext"

const Dashboard = () => {

    const { isConnected } = useAppContext();

    if(!isConnected){
        window.location.href = "/"
        return null
    }

    return (
        <div className="flex flex-col h-screen text-black">
          <img src={fond1} className="fixed opacity-100 top-0 left-0 w-screen h-screen object-cover z-[-1]"/>
          <TopNav />
          <Array />
        </div>
    )
}

export default Dashboard