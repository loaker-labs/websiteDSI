import ArrayItem from "./ArrayItem"

const Array = () => {

    const array: {email:string, UAC:string, hasActivated:boolean}[] = [{email:"louis@gmail.com", UAC:"njklbjklvfdjomxejze", hasActivated:true}]

    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex-1">Email</div>
                <div className="flex-1">UAC</div>
                <div className="flex-1">Has Activated</div>
            </div>
            {array.map((item, index) => {
                return <ArrayItem key={index} email={item.email} UAC={item.UAC} hasActivated={item.hasActivated}/>
            }
            )}
        </div>
    )
}

export default Array