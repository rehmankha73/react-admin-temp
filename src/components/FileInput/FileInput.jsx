import {useState} from "react";
import {XMarkIcon} from "@heroicons/react/20/solid/index.js";

// eslint-disable-next-line react/prop-types
export function FileInput({ Label = null, LabelClasses = null, FieldClasses = null, ButtonClasses = null, PlaceHolder = null }) {
    const [fileName, setFileName] = useState(null);

    const handleClickForOpenImagePicker = () => {
        const el = document.getElementById('imagePicker');
        el.click();
    }

    const handleChangeOnFileInput = (event) => {
        const selectedFiles = event.target.files;

        if (selectedFiles.length > 0) {
            const fileName = selectedFiles[0].name;
            const fileSize = selectedFiles[0].size;

            setFileName(fileName);

            console.log(`Selected file: ${fileName}`);
            console.log(`File size: ${fileSize} bytes`);

            // You can perform additional actions with the selected file here
        } else {
            console.log('No file selected');
        }
    };


    return (
        <>
            {Label && <label className={`${LabelClasses} block mb-2`}>{ Label }</label>}
            {fileName ?
                <div className={`${FieldClasses} flex items-center`}>
                    <span>{fileName}</span>
                    <XMarkIcon className="cursor-pointer" onClick={() => {
                        setFileName(null)
                    }} width={20}/>
                </div>
                :
                <div className="relative p-2">
                    <input type="file"
                           id="imagePicker"
                           className="opacity-0 cursor-pointer w-full h-full"
                           onChange={handleChangeOnFileInput}
                    />
                    <div
                        className={
                        `${ButtonClasses} absolute inset-0`}
                        onClick={handleClickForOpenImagePicker}
                    >
                        {PlaceHolder || "Choose File"}
                    </div>


                    {/*<input type="file"*/}
                    {/*       className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"*/}
                    {/*       onChange={handleChangeOnFileInput}*/}
                    {/*/>*/}
                    {/*<div className="p-2 border-2 border-gray-300 hover:border-gray-400 rounded-lg cursor-pointer">*/}
                    {/*    Choose a File*/}
                    {/*</div>*/}
                </div>

            }
        </>
    );
}