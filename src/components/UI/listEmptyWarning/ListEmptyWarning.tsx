import { FC } from "react";

interface ListEmptyWarningProps {
    listName: string
}

const ListEmptyWarning:FC<ListEmptyWarningProps> = ({listName}) => {
    return ( 
        <p className = "alert-message">
            {listName} isn't found
        </p>
    );
}
 
export default ListEmptyWarning;