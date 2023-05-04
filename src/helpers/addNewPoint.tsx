import { TagType } from "../types/types";

export const addNewPoint = (data: TagType, arrayWithPoints: any, newPoint: Array<TagType>) => {
    arrayWithPoints([...newPoint, data]);
}