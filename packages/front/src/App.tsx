import React, { useState } from "react";
import "./App.css";
import { DropzoneDialog } from "material-ui-dropzone";
import axios from 'axios';


function App() {
  const [open, setOpen] = useState(true);
  const [files, setFiles] = useState<any>([]);


  function handleSave(files: any) {
    //Saving files to state for further use and closing Modal.
    setFiles(files)
    setOpen(false)
  }

  function enviarParaBackEnd() {
    const formData = new FormData() as any;

    // 'arquivos' é o campo que o 'multer' procura o arquivo de imagem.
    files.forEach( (file: any) => {
      formData.append("arquivos", file);
    })

    axios.post("http://localhost:3333/upload", formData, {
      headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      }
    }).then(response => console.log(response));
  }
  


  return (
    <div className="App">
      <h1>Multi Part</h1>
      { files.length > 0 && <button onClick={enviarParaBackEnd} >Enviar para o backend</button> }
      <DropzoneDialog
        open={open}
        onSave={handleSave}
        acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
        showPreviews={true}
        maxFileSize={5000000}
      />
    </div>
  );
}

export default App;
