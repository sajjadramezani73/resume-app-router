import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

interface Props {
  onChange: (value: string) => void
  editorLoaded: boolean
  value: string
  placeholder?: string
}

function TextEditor({
  onChange,
  editorLoaded,
  value,
  placeholder = '',
}: Props) {
  const toolbarConfig = [
    // 'undo',
    // 'redo',
    // '|',
    'heading',
    '|',
    'fontfamily',
    'fontsize',
    'fontColor',
    'fontBackgroundColor',
    '|',
    'bold',
    'italic',
    'strikethrough',
    'subscript',
    'superscript',
    'code',
    '|',
    // 'uploadImage',
    'blockQuote',
    'codeBlock',
    '|',
    'bulletedList',
    'numberedList',
    'todoList',
    'outdent',
    'indent',
    'customButton',
  ]

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          config={{
            toolbar: toolbarConfig,
            language: 'ar',
            placeholder: placeholder,
          }}
          editor={ClassicEditor}
          data={value}
          onChange={(_, editor: any) => {
            console.log(editor)

            const data = editor.getData()
            onChange(data)
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  )
}

export default TextEditor
