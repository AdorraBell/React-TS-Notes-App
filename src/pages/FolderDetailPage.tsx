import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FolderType } from "../types/types";
import FolderDetail from "../components/FolderDetail/FolderDetail";
import AppButton from "../components/UI/button/AppButton";
import { Link } from "react-router-dom";
import ErrorBlock from "../components/ErrorBlock/ErrorBlock";

const FolderDetailPage:FC = () => {
    const id = useParams().id;
    let [foldersList, setFoldersList] = useState<FolderType[]>(JSON.parse(localStorage.getItem('foldersList') || '[]'));
    let [pageData, setPageData] = useState<FolderType | undefined>();

    useEffect(() => {
        foldersList.filter((folder, index) => {
            if(folder.id.toString() == id) return setPageData(folder); 
        })
    }, []);


    return ( 
        <div>
            {pageData ?
                <div>
                    <FolderDetail
                    folder = {pageData}></FolderDetail>
                    <div className = "btns-wrapper">
                        <Link to = "/folders">
                            <AppButton 
                                type = {'button'} 
                                variant = {'greyOutlineButton'}>
                                Back
                            </AppButton>
                        </Link>
                        <Link to = {`/${id}/folder-edit`}>
                            <AppButton 
                                type = {'submit'} 
                                variant = {'orangeButton'}>
                                Edit
                            </AppButton>
                        </Link>
                    </div>
                </div>
                :
                <ErrorBlock></ErrorBlock>
            }
        </div>
    );
}
 
export default FolderDetailPage;