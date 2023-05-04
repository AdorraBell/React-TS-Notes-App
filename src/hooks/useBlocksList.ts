import { useState } from "react";
import { deletePointFromList } from "../localStorage";

export const useBlocksList = (arr: any) => {
    const [array, setArray] = useState(arr);

    const deletePoint = (id: number, listType: string) => {
        setArray(deletePointFromList(id, listType));
    }

    return {
        array, deletePoint
    }
}