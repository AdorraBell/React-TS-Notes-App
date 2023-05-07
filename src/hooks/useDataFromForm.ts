import { useNavigate } from "react-router";
import { addPointToList } from "../localStorage";
import { NoteFolderTypes } from "../types/types";
import useUpdatedList from "../hooks/useMainInfoList";

export const useDataFromForm = () => {

    const navigate = useNavigate();
    const updateData = useUpdatedList();

    const saveData = (data: NoteFolderTypes, dataType: string, link: string) => {
        addPointToList(data, dataType);
        updateData.update(dataType);
        return navigate(link);
    }

    return { saveData };
}