import { TagType } from "../types/types";

export const deletePoint = (deletedPointIndex: number, arrayWithPoints: Function, deletedPoint: Array<TagType>) => {
    
    arrayWithPoints([...deletedPoint.filter((point, pointIndex) =>{
        if(pointIndex !== deletedPointIndex) return point;
    })]);
}