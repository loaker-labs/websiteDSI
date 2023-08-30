

interface ArrayItemProps {
    email: string;
    UAC: string;
    hasActivated: boolean;
}

const ArrayItem = ({ email, UAC, hasActivated }:ArrayItemProps) => {


    const objetMail = "Votre clé d'activation Loaker";
    const corpsMail = "Bonjour, voici votre clé d'activation : "+UAC;

    return (
        <tr className="flex flex-row odd:bg-slate-200 even:bg-slate-300">
            <td className="flex-1 px-4 w-[10vw] overflow-scroll">{email}</td>
            <td className="flex-1 px-4 w-[10vw] overflow-scroll">{UAC}</td>
            <td className="flex-1 px-4 w-[5vw] overflow-scroll self-center place-content-center">
                {hasActivated ? 
                <svg className="flex self-center" width="18" height="13" viewBox="0 0 18 13" fill="none">
                    <path d="M17 1L6 12L1 7" stroke="#4FDAB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg> : 
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" opacity="0.8">
                    <path d="M13 1L1 13" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M1 1L13 13" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                }
            </td>
            <td className="flex w-[10vw] overflow-scroll place-content-center">
                <a href={"mailto:"+email+"?subject="+objetMail+"&body="+corpsMail} className="flex self-center px-1 bg-slate-900 hover:bg-slate-800 text-white rounded-md" target="_blank" rel="noopener noreferrer">
                    Send
                </a>
            </td>
        </tr>
    );
};

export default ArrayItem;