export interface TagType {
    id: string,
    label: string
}

export interface NoteTitleType {
    id: number,
    label: string
}

export interface NoteType{
    id: number,
    title: string,
    body: string,
    tags?: Array<TagType>
}

export interface FolderType{
    id: number,
    title: string,
    tags?: Array<TagType>, 
    notes?: Array<TagType>
}

