import { FC, useState, useEffect } from "react";
import { useParams } from "react-router";
import NoteDetail from "../components/NoteDetail/NoteDetail";
import {NoteType} from "../types/types";


const DetailPage:FC= () => {

    const id = Number(useParams().id);
    const notesList = JSON.parse(localStorage.getItem('notesList') || '[]');
    const [pageData, setPageData] = useState<NoteType>();

    useEffect(() => {
        notesList.filter((note: NoteType) => {
            if(note.id == id) return setPageData(note);
        })   
    }, []);

    return ( 
        <>
            {pageData &&
                <NoteDetail
                    body = {pageData!.body}
                    title = {pageData!.title}
                    tags = {pageData!.tags}
                    id = {pageData!.id}
                    ></NoteDetail>
            }
        </> 
     );
}
 
export default DetailPage;