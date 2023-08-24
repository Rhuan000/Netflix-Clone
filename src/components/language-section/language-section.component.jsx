import { Select } from "./language-section.style";
import { AiFillCaretDown } from 'react-icons/ai';
import { useState } from "react";

export function LanguageSection(props){
    const [language, setLanguage] = useState()

    function getSelection(event){
        console.log(getSelection.event.value)
    }
    return (        
        <div {...props}>
            
            <Select name="choices" onChange={getSelection}>
                <option value="option1">Português</option>
                <option value="option2">English</option>
            </Select>
        </div>
    );
}