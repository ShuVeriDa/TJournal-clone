import EditorJS from "@editorjs/editorjs";
import {FC, useEffect} from "react";


type EditorPropsType = {}

export const Editor: FC<EditorPropsType> = () => {
   useEffect(() => {
      const editor = new EditorJS({
         holder: 'editor',
         placeholder: "Введите текст вашей статьи",
      })

      return () => {
         editor.isReady
            .then(() => {
               editor.destroy()
            })
            .catch(error => {
               console.error('ERROR editor cleanup', error)
            })
      }
   }, [])
   return (
      <div id="editor" />
   );
};
