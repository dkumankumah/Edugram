import React from 'react';
import {Button, Input} from "@chakra-ui/react";
const FileUploader = props  => {

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
        console.log(fileUploaded)
    };
    return (
        <>
            <Button onClick={handleClick} type="file" variant="link">
                Open Explorer
            </Button>
            <Input  type="file"
                   style={{display:'none'}}
                   ref={hiddenFileInput}
                   onChange={handleChange}
                   accept=".jpg, .jpeg, .png" />
        </>
    );
};
export default FileUploader;
