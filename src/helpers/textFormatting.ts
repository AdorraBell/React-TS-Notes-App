
export const textFormatting = (data: string) : string => {
    
    let calc = 0;

    const createElem = (data: string) : string => {
        calc ++;
        return (calc %2 == 0) ? `</${tag}>` : `<${tag}>`;
    }

    let tag = 'h3';
    data = data.replace(/###/gi, createElem);
    tag = 'h2';
    data = data.replace(/##/gi, createElem);
    data = data.replace(/\r?\n|\r/gi, '<br>');
    tag = 'strong';
    data = data.replace(/(\*\*|\_\_)/gi, createElem);
    tag = 'i';
    data = data.replace(/(\*|\_)/gi, createElem);

    return data;
}