import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FolderType } from "../types/types";
import FolderDetail from "../components/FolderDetail/FolderDetail";
import AppButton from "../components/UI/button/AppButton";
import { Link } from "react-router-dom";
import ErrorBlock from "../components/ErrorBlock/ErrorBlock";

const FolderDetailPage:FC = () => {
    
    const id = Number(useParams().id);
    const foldersList:Array<FolderType> = (JSON.parse(localStorage.getItem('foldersList') || '[]'));
    const [pageData, setPageData] = useState<FolderType | undefined | null>(null);

    useEffect(() => {
        foldersList.filter(folder => {
            if(folder.id === id) return setPageData(folder); 
        })
    }, []);

    return ( 
        <>
            {pageData ?
                <div>
                    <FolderDetail
                        folder={pageData} />
                    <div className="btns-wrapper">
                        <Link to="/folders">
                            <AppButton 
                                type={'button'} 
                                variant={'greyOutlineButton'}>
                                Back
                            </AppButton>
                        </Link>
                        <Link to={`/${id}/folder-edit`}>
                            <AppButton 
                                type={'submit'} 
                                variant={'orangeButton'}>
                                Edit
                            </AppButton>
                        </Link>
                    </div>
                </div>
                :
                <ErrorBlock />
            }
        </>
    );
}
 
export default FolderDetailPage;