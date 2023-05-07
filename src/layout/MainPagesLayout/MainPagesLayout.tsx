import { FC } from "react";
import AppNavbar from "../../components/UI/navbar/AppNavbar";
import MainTitle from "../../components/UI/mainTitle/MainTitle";
import PlusButton from "../../components/UI/plusBtn/PlusButton";
import QuestionButton from "../../components/UI/questionBtn/QuestionButton";
import { Link } from "react-router-dom";
import AppFilters from "../../components/AppFilters/AppFilters";
import ListEmptyWarning from "../../components/UI/listEmptyWarning/ListEmptyWarning";
import { useMainPagesFiltersActions } from "../../hooks/useMainPagesFiltersActions";
import { FolderType, TagType } from "../../types/types";

interface MainPagesLayoutProps{
    children: React.ReactNode,
    title: string,
    addLink: string,
    searchedTags: Array<TagType>,
    dataList: Array<FolderType>,
    contentListName: string,
    tagsListName: string,
    sortTypeName: string,
    sortType: string,
    listType: string
}

const MainPagesLayout:FC<MainPagesLayoutProps> = 
    ({children, title, addLink, searchedTags, dataList, contentListName, sortTypeName, tagsListName, sortType, listType}) => {
    
    const filterActions = useMainPagesFiltersActions(searchedTags, dataList, contentListName);
    
    return ( 
        <>
            <MainTitle>{title}</MainTitle>
            <AppNavbar></AppNavbar>
            <AppFilters
                selectedSort = {(sort) => filterActions.setSort(sort, contentListName, sortTypeName)}
                defaultSortType = {sortType}
                searchByBody = {false}
                addTag = {(data) => filterActions.addTag(data, tagsListName)}
                deleteTag={(index) => filterActions.deleteTag(index, tagsListName, contentListName)}
                deleteAllSelectedTags={() => filterActions.deleteAllSelectedTags(tagsListName, contentListName)}
                selectedTags = {searchedTags}
                ></AppFilters>  
            { dataList.length < 1 &&
                <ListEmptyWarning
                    listName = {listType}></ListEmptyWarning>
            }
            {children}
            <Link to = "/info-page">
                <QuestionButton></QuestionButton>
            </Link>
            <Link to = {addLink}>
                <PlusButton></PlusButton>
            </Link>
        </>
     );
}
 
export default MainPagesLayout;