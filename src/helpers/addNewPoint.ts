import { TagType } from "../types/types";

export const addNewPoint = (newPoint: TagType, setArrayWithPoints: Function, arrayWithPoints: Array<TagType>) => {
    setArrayWithPoints([...arrayWithPoints, newPoint]);
}