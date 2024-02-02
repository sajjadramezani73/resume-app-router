import { IImage } from '../uploader/type'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Dialog, IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useState } from 'react'

interface Props {
  image: IImage
  handleDelete: (id: string) => void
}

const Image = ({ image, handleDelete }: Props) => {
  const [showModal, setShowModal] = useState(false)

  const showImage = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="w-full h-full border border-dashed border-border rounded flex justify-center items-center overflow-hidden relative group">
        <img src={image?.url} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
          <IconButton sx={{ color: grey[300] }} onClick={showImage}>
            <VisibilityIcon />
          </IconButton>
          <IconButton
            sx={{ color: grey[300] }}
            onClick={() => handleDelete(image._id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>

      <Dialog
        open={showModal}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            background: 'transparent',
          },
        }}
      >
        <img src={image.url} alt="" />
      </Dialog>
    </>
  )
}

export default Image
