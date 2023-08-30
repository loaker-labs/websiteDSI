import ArrayItem from "./ArrayItem"
import { useAppContext } from "../AppContext"

const Array = () => {

    const { isConnected, employees } = useAppContext();

    if(!isConnected){
        window.location.href = "/"
        return null
    }

    return (
        <table className="flex flex-col w-[80vw] self-center border rounded-md mt-56 overflow-hidden">
            <div className="flex flex-row font-bold text-lg bg-teal-400">
                <div className="flex-1 border-x text-center rounded-tl-md">Email</div>
                <div className="flex-1 border-x text-center">Code d'activation</div>
                <div className="flex-1 border-x text-center w-[10vw]">État</div>
                <div className="flex border-x text-center w-[10vw] place-content-center rounded-tr-md">Send mail</div>
            </div>
            <tbody>
                {employees.map((item, index) => {
                    return <ArrayItem key={index} email={item.email} UAC={item.UAC} hasActivated={item.hasActivated}/>
                }
                )}
            </tbody>
        </table>
    )
}

export default Array