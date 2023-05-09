import React, { FC } from "react";
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
    listType: string,
    searchByBody?: boolean
}

const MainPagesLayout:FC<MainPagesLayoutProps> = (props) => {

    const {
        children, 
        title, 
        addLink, 
        searchedTags, 
        dataList, 
        contentListName, 
        sortTypeName, 
        tagsListName, 
        sortType, 
        listType,
        searchByBody
    } = props;
    
    const filterActions = useMainPagesFiltersActions(searchedTags, dataList, contentListName);
    const deleteAllSelectedTags = () => filterActions.deleteAllSelectedTags(tagsListName, contentListName);
    const deleteTag = (index: number) => filterActions.deleteTag(index, tagsListName, contentListName);
    const addTag = (data: TagType) => filterActions.addTag(data, tagsListName);
    const setSort = (sort: string) => filterActions.setSort(sort, contentListName, sortTypeName);
    
    return ( 
        <>
            <MainTitle>{title}</MainTitle>
            <AppNavbar />
            <AppFilters
                selectedSort={setSort}
                defaultSortType={sortType}
                searchByBody={searchByBody}
                addTag={addTag}
                deleteTag={deleteTag}
                deleteAllSelectedTags={deleteAllSelectedTags}
                selectedTags={searchedTags}
                />  
            { dataList.length < 1 &&
                <ListEmptyWarning
                    listName={listType} />
            }
            {children}
            <Link to="/info-page">
                <QuestionButton />
            </Link>
            <Link to={addLink}>
                <PlusButton />
            </Link>
        </>
     );
}
 
export default MainPagesLayout;