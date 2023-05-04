import { TagType } from "../types/types";

export const deletePoint = (i: number, arrayWithPoints: any, deletedPoint: Array<TagType>) => {
    arrayWithPoints([...deletedPoint.filter((point, index) =>{
        if(index !== i) return point;
    })]);
}