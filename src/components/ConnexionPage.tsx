import { useRef } from 'react';
import fond1 from '../assets/fond1.jpg';
import TopNav from './TopNav';
import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';

const ConnexionPage = () => {

    const { isConnected, setIsConnected, setLogin, setEmployees } = useAppContext();
    const navigate = useNavigate();

    const handleEyeClick = () => {
        if (inputPasswordRef.current?.getAttribute("type") === "password") {
            inputPasswordRef.current.setAttribute("type", "text");
            if(lineRef.current != null){
                lineRef.current.style.display = "block"
            }
            
        } else {
            inputPasswordRef.current.setAttribute("type", "password");
            if(lineRef.current != null){
                lineRef.current.style.display = "none"
            }
        }
    }


    const handleConnexion = (e: React.FormEvent<HTMLFormElement>) => { // START LOUIS c'est ici que tu dois faire la requête axios pour la demande de connexion
        e.preventDefault();
        console.log("Connexion")
        setLogin("Louis") // tu dois mettre le login de la personne qui se connecte si la connexion reussit
        setIsConnected(true) // si la connexion reussit tu dois mettre cette ligne
        navigate("/dashboard") //cette ligne permet de rediriger vers la page dashboard
        let employees = [] as {email:string, UAC:string, hasActivated:boolean}[] // tu dois mettre ici la liste des employés reçu par la requête axios
        employees = [ // CECI EST UN EXEMPLE POUR TESTER
            {email:"louis@gmail.com", UAC:"UAClouis", hasActivated:true},
            {email:"pierre@gmail.com", UAC:"UACpierre", hasActivated:false},
            {email:"paul@gmail.com", UAC:"UACpaul", hasActivated:true},
            {email:"jacques@gmail.com", UAC:"UACjacques", hasActivated:false}
        ]
        setEmployees(employees) // tu dois mettre la liste des employés dans le contexte
        // N'oublie pas de mettre le token JWT dans le local storage
        window.localStorage.setItem("tokenJWT", "token")
    } // END LOUIS



    const inputPasswordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const lineRef = useRef() as React.MutableRefObject<SVGLineElement>;

    if(isConnected){
        window.location.href = "/dashboard"
        return null
    }

    return (
        <div className="flex flex-col h-screen text-black place-content-center">
            <TopNav />
            <img src={fond1} className="fixed opacity-100 top-0 left-0 w-screen h-screen object-cover z-[-1]"/>
            <form onSubmit={handleConnexion} className='flex flex-col self-center rounded-sm gap-6 p-6 bg-teal-500'>
                <input type="text" placeholder="Email" className="flex w-full self-center px-1 bg-slate-100 rounded-sm border-none outline-none" />
                <div className="flex self-center px-1 bg-slate-100 rounded-sm border-none outline-none">
                    <input ref={inputPasswordRef} type="password" placeholder="Mot de passe" className="flex px-1 bg-transparent border-none outline-none" />
                    <svg onClick={handleEyeClick} className="flex left-0 h-full p-0 stroke-black self-center ml-1 cursor-pointer duration-300 transform ease-in-out" width="24" height="24" viewBox="1.5 1.5 21 21" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z" />
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"/>
                        <line ref={lineRef} style={{display : 'none'}} x1="4" y1="4" x2="20" y2="20" />
                    </svg>
                </div>
                <button className="flex self-center px-1 bg-slate-300 hover:bg-slate-400 rounded-sm duration-150 transition-colors" type="submit">Connexion</button>
            </form>
        </div>
    )
}

export default ConnexionPage