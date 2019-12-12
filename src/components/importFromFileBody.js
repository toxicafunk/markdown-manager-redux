import React from 'react';

const ImportFromFileBody = (props) => {
  let fileReader;

  const { upload } = props;

  const handleFileRead = (e) => {
    const content = fileReader.result;
    upload(content)
  }

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  }

  return <div className='upload-expense'>
    <input type='file' id='file' className='input-file' accept='.md' onChange={e => handleFileChosen(e.target.files[0])} />
    </div>;
}

export default ImportFromFileBody;
