export interface TagType {
    id: string,
    label: string
}

export interface NoteType{
    id: number,
    title: string,
    body: string,
    tags?: Array<TagType>
}
