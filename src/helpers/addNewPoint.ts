import { TagType } from "../types/types";

export const addNewPoint = (data: TagType, arrayWithPoints: Function, newPoint: Array<TagType>) => {
    arrayWithPoints([...newPoint, data]);
}