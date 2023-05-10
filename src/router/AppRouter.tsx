import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotesPage from '../pages/NotesPage';
import AddNotePage from '../pages/AddNotePage';
import DetailPage from '../pages/DetailPage';
import EditNotePage from '../pages/EditNotePage';
import FoldersPage from '../pages/FoldersPage';
import ErrorPage from '../pages/ErrorPage';
import AddFolderPage from '../pages/AddFolderPage';
import FolderDetail from '../pages/FolderDetailPage';
import FolderEdit from '../pages/FolderEditPage';
import FormattingInfoPage from "../pages/FormattingInfoPage";

const getBaseName = () => process.env.PUBLIC_URL || '/';

const AppRouter:FC = () => {

    return ( 
        <BrowserRouter basename={getBaseName()}>
            <Routes>
                <Route path = "/" element = {<NotesPage></NotesPage>}></Route>
                <Route path = "/add" element = {<AddNotePage></AddNotePage>}></Route>
                <Route path = "/:id/detail" element = {<DetailPage></DetailPage>}></Route>
                <Route path = "/:id/edit" element = {<EditNotePage></EditNotePage>}></Route>
                <Route path = "/folders" element = {<FoldersPage></FoldersPage>}></Route>
                <Route path = "/add-folder" element = {<AddFolderPage></AddFolderPage>}></Route>
                <Route path = "/:id/folder-detail" element = {<FolderDetail></FolderDetail>}></Route>
                <Route path = "/:id/folder-edit" element = {<FolderEdit></FolderEdit>}></Route>
                <Route path = "/info-page" element = {<FormattingInfoPage></FormattingInfoPage>}></Route>
                <Route path = "/*" element = {<ErrorPage ></ErrorPage>}></Route>
            </Routes>
        </BrowserRouter> 
    );
}
 
export default AppRouter;