import { FC } from "react";
import styles from "./FolderBlock.module.css";
import { TagType } from "../../../types/types";
import AppButton from "../button/AppButton";

interface FolderBlockProps{
    folder: any,
    deleteFolder: (id: number) => void
}

const FolderBlock:FC<FolderBlockProps> = ({folder, deleteFolder}) => {
    let tags = folder.tags;
    let notes = folder.notes;
    let id = folder.id;

    return ( 
        <div className = {styles.folderBlock}>
            <div className = {styles.deleteCircleWrapper}>
                <div className = {styles.deleteCircle} onClick = {() => deleteFolder(id)}>
                    <span className = {styles.deleteCircle__line}></span>
                    <span className = {styles.deleteCircle__line}></span>
                </div>
            </div>
            <div className = {styles.folderBlockLine}>
                <h3 className = {styles.folderBlockTitle}>{folder.title}</h3>
            </div>
            <div className = {styles.folderBlockLine}>   
                {tags.map((tag: TagType) =>
                    <div className = {styles.tagBlock} key = {tag.id}>
                        #{tag.label}
                    </div>
                )}       
            </div>
            <div className = {styles.folderBlockLine}>
                
                <span className = {styles.boldText}>Included notes:</span>
                
                    {notes.map((note: TagType) =>
                        <div className = {styles.tagBlock} key = {note.id}>
                            {note.label}
                        </div>
                    )}
                
            </div>
            
                <div className = {styles.btnsLine}>
                    <AppButton
                        type = {'button'}
                        variant = {'greyOutlineButton'}
                        >
                        Open
                    </AppButton>
                    <AppButton
                        type = {'button'}
                        variant = {'orangeButton'}
                        >
                        Edit
                    </AppButton>
                </div>
                
            
        </div>
    );
}
 
export default FolderBlock;