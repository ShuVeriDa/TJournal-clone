import EditorJS, {OutputData} from "@editorjs/editorjs";
import {FC, useEffect} from "react";


interface EditorPropsType {
   onChange: (blocks: OutputData['blocks']) => void
   initialBlocks: OutputData['blocks']
}

export const Editor: FC<EditorPropsType> = ({onChange, initialBlocks}) => {
   useEffect(() => {
      const editor = new EditorJS({
         holder: 'editorjs',
         data: {
            blocks: initialBlocks
         },
         placeholder: "Введите текст вашей статьи",
         onChange: async () => {
            const {blocks} = await editor.save()
            onChange(blocks)
         },

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
      <div id="editorjs"/>
   );
};
