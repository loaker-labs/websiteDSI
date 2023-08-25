

interface ArrayItemProps {
    email: string;
    UAC: string;
    hasActivated: boolean;
}

const ArrayItem = ({ email, UAC, hasActivated }:ArrayItemProps) => {
    return (
        <div className="flex-1">
            <div className="flex-1">{email}</div>
            <div className="flex-1">{UAC}</div>
            <div className="flex-1">{hasActivated}</div>
        </div>
    );
};

export default ArrayItem;