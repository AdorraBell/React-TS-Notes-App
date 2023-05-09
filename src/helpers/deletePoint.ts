import { TagType } from "../types/types";

export const deletePoint = (deletedPointIndex: number, arrayWithPoints: Function, deletedPoint: Array<TagType>) => {
    console.log('delete')
    arrayWithPoints([...deletedPoint.filter((point, pointIndex) =>{
        if(pointIndex !== deletedPointIndex) return point;
    })]);
}