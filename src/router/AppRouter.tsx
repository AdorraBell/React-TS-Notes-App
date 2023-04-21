import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotesPage from '../pages/NotesPage';
import AddNotePage from '../pages/AddNotePage';
import DetailPage from '../pages/DetailPage';
import EditNotePage from '../pages/EditNotePage';
import FoldersPage from '../pages/FoldersPage';
import ErrorPage from '../pages/ErrorPage';

const AppRouter = () => {
    return ( 
        <BrowserRouter>
            <Routes>
            <Route path = "/" element = {<NotesPage></NotesPage>}></Route>
            <Route path = "/add" element = {<AddNotePage></AddNotePage>}></Route>
            <Route path = "/:id/detail" element = {<DetailPage></DetailPage>}></Route>
            <Route path = "/:id/edit" element = {<EditNotePage></EditNotePage>}></Route>
            <Route path = "/folders" element = {<FoldersPage></FoldersPage>}></Route>
            <Route path = "/*" element = {<ErrorPage ></ErrorPage>}></Route>
            </Routes>
        </BrowserRouter> 
    );
}
 
export default AppRouter;