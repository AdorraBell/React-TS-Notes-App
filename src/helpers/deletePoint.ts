import { TagType } from "../types/types";

export const deletePoint = (i: number, arrayWithPoints: Function, deletedPoint: Array<TagType>) => {
    arrayWithPoints([...deletedPoint.filter((point, index) =>{
        if(index !== i) return point;
    })]);
}