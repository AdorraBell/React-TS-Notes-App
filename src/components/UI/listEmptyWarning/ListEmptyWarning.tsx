import { FC } from "react";

interface ListEmptyWarningProps {
    listName: string
}

const ListEmptyWarning:FC<ListEmptyWarningProps> = ({listName}) => {
    return ( 
        <p className = "alert-message">You don't have any {listName} yet</p>
    );
}
 
export default ListEmptyWarning;