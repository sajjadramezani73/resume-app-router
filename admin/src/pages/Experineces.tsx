import { QUERY_KEY } from '@/constants/constants'
import { getExperiences } from '@/services/queries'
import { Card, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

const Experineces = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.EXPERIENCES], getExperiences)
  console.log('data', data, isLoading)
  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center h-[100px]">
        <p className="text-titr text-[18px] font-bold">سابقه کاری</p>
        <Link to="/">
          <Button
            sx={{ '& .MuiButton-startIcon': { m: 0 } }}
            variant="contained"
            startIcon={<AddIcon />}
          >
            افزودن جدید
          </Button>
        </Link>
      </Card>
    </>
  )
}

export default Experineces
