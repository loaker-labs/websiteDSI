import { useAppContext } from "../AppContext"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const TopNav = () => {

    const { isConnected, setIsConnected, login, setLogin, setEmployees } = useAppContext();
    const modaleLoginRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const navigate = useNavigate();

    const handleClickProfile = () => {
        if(modaleLoginRef.current != null){
            if(modaleLoginRef.current.style.display === "flex"){
                modaleLoginRef.current.style.display = "none"
            } else {
                modaleLoginRef.current.style.display = "flex"
            }
        }
    }


    const handleDeconnexion = () => { // LOUIS tu dois faire la déconnexion ICI
        // ces lignes sont pour la déconnexion
        setLogin("")
        setEmployees([])
        // N'oublie pas de virer le token JWT dans le local storage
        window.localStorage.removeItem("tokenJWT")
        // N'oublie pas de rediriger vers la page de connexion
        navigate("/")
        setIsConnected(false)// TOUJOURS A FAIRE EN DERNIER
    }

    return (
        <nav className="fixed flex p-4 top-0 w-full z-50 justify-between bg-white bg-opacity-30 backdrop-blur-md">
            <a className="h-18 lg:h-16 w-fit h-fit no-underline flex flex-row place-content-center items-center place-self-center hover:scale-110 duration-150" href="loaker.fr">
                <svg className="flex" height="40px" viewBox="34 160 300 100">
                    <path fill="#000" stroke="#000" stroke-width="3" d="M42 187h12v39h19v10H42v-49zm118.09 38.91l-3.05 9.92L144 236l10.67-36 4.46-12.96L177 187l15 49h-13.22l-2.82-10.09h-15.87zM211 187h-12v49h12l-.05-16.95 5.05-2.04L226.05 236H240l-15.05-26.97L240 187l-13.94.05L212.89 208l-1.86-.03L211 187zm64.02 10H259v9h14v9h-14v11h16l.02 9.93-9.02.07h-20v-49h29l.02 10zm25.95 21.06L296 218v18h-12v-49c7.83 0 22.25-.9 28.96 2.68 8.39 4.5 8.82 18.39-1.96 24.32l14 22c-3.73 0-13.78-.09-13.78-.09l-10.25-17.85zM169 195h-2l-5 21h11l-4-21zm127 13.58s11.11.95 11.07-6.02c-.23-7.32-11.07-6.14-11.07-6.14v12.16z"/>
                    <g transform="matrix(.185561 0 0 .185949 70.581912 166.20184)">
                        <path fill="#462100" d="M152 350l28-110h52l28 110z"/>
                        <circle cx="206" cy="200" r="50" fill="#5a9e44"/>
                        <path fill="#287011" stroke="#000" d="M206.55 472C16.5 368 20.5 268.5 16.06 81.06 82.73 74 129.45 55.27 206.85 15.37c80.24 41.54 102.24 54.45 189.03 65.72C391 313 376 375 206.55 472zm159.53-364.98C320 102.36 216.91 57.64 206.41 49.11 184.91 63.31 73.82 106.4 46 106.13 49.5 292.5 66.5 357 206.59 438.06 349.5 346 359.5 306 366.08 107.02z" stroke-width="5.384"/>
                    </g>
                </svg>
            </a>
            <a href="" className="hidden xl:inline-block cursor-pointer text-sm py-2 whitespace-nowrap text-black uppercase h-fit w-fit self-center font-extrabold relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-[#4FDAB8] after:origin-bottom-right after:ease-out after:duration-300 after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
                Support technique
            </a>
            {
                isConnected ?
                <svg onClick={handleClickProfile} className="rounded-full p-2 cursor-pointer bg-slate-300 hover:bg-teal-400" width="40" height="40" viewBox="-5 -5 30 30" >
                    <path d="M10 10c-2.217 0-4.019-1.794-4.019-4S7.783 2 10 2s4.019 1.794 4.019 4-1.803 4-4.019 4m3.776.673C15.37 9.396 16.3 7.331 15.958 5.07 15.561 2.447 13.369.348 10.722.042 7.07-.381 3.971 2.449 3.971 6c0 1.89.88 3.574 2.253 4.673C2.852 11.934.39 14.895.005 18.891-.052 19.482.412 20 1.008 20a.99.99 0 0 0 .993-.891C2.404 14.646 5.837 12 10 12s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.597 0 1.06-.518 1.004-1.109-.386-3.996-2.847-6.957-6.219-8.218" fillRule="evenodd"/>
                </svg>
                :
                null
            }
            <div ref={modaleLoginRef} className="hidden flex-col absolute p-4 gap-4 right-2 top-24 rounded-sm bg-teal-400">
                <p>Bonjour {login} !</p>
                <button onClick={handleDeconnexion} className="flex p-1 h-fit w-fit bg-slate-200 hover:bg-slate-300 duration-150 transition-colors rounded-sm self-center">Déconnexion</button>
            </div>
        </nav>
    )
}

export default TopNav