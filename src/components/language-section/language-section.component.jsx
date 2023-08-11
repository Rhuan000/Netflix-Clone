import { Select } from "./language-section.style";
import { AiFillCaretDown } from 'react-icons/ai';
export function LanguageSection(props){
    return (
        <div {...props}>
            
            <Select name="choices" onChange={''} value={'a'}>
                <option value="">Português</option>
                <option value="option1">English</option>
            </Select>
        </div>
    );
}