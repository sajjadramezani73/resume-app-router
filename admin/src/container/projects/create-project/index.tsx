import { skillExperience } from '@/enums'
import { Autocomplete, Button, Card, TextField } from '@mui/material'
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined'
import { useProjectActions } from '@/store/projectSlice'
import { useMutate } from '@/services/axios/useRequest'
import { Paths } from '@/constants/Paths'
import { toast } from 'sonner'
import { Keys } from '@/constants/Keys'
import { useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const CreateProject = ({ mode }: { mode?: string }) => {
  const { id } = useParams()
  const cache = useQueryClient()
  const navigate = useNavigate()
  const {
    project,
    updateAddProject,
    updateAddProjectOneProperty,
    resetProject,
  } = useProjectActions()

  console.log('project', project)

  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (mode === 'edit') {
      console.log('')
    } else {
      resetProject()
    }
  }, [mode])

  // check for desabled button step 1 and step 2
  useEffect(() => {
    project.addProject.title.fa === '' ||
    project.addProject.title.en === '' ||
    project.addProject.briefDescription.fa === '' ||
    project.addProject.briefDescription.en === '' ||
    project.addProject.description.fa === '' ||
    project.addProject.description.en === '' ||
    project.addProject.skills.length === 0 ||
    project.addProject.links.findIndex((item) => item === '') > -1
      ? setDisabled(true)
      : setDisabled(false)
  }, [project.addProject])

  const handleAddLink = () => {
    updateAddProjectOneProperty({ links: [...project.addProject.links, ''] })
  }

  const handleLinkChange = (index: number, value: string) => {
    const updatedLinks: string[] = [...project.addProject.links]
    updatedLinks[index] = value
    updateAddProjectOneProperty({ links: updatedLinks })
  }

  // save data form in redux store
  const onChangeHandler = (e: { target: { name: string; value: string } }) => {
    const title = e.target.name.split('.')[0]
    const lang = e.target.name.split('.')[1]
    const obj = { name: title, amount: { [lang]: e.target.value } }
    updateAddProject(obj)
  }

  const handleReset = () => {
    resetProject()
    navigate('/dashboard/project-list')
  }

  const postProject = useMutate({
    method: 'post',
    url: Paths.project.base,
    successCallback() {
      toast.success('درخواست شما با موفقیت ثبت شد')
      cache.invalidateQueries(Keys.project.project)
      handleReset()
    },
    errorCallback: () => {
      toast.error('مشکلی در ثبت درخواست شما به وجود آمده است')
      console.log('errrrrr')
    },
  })

  const editProject = useMutate({
    method: 'put',
    url: Paths.project.base,
    successCallback() {
      toast.success('پروژه با موفقیت ویرایش شد')
      cache.invalidateQueries(Keys.project.project)
      handleReset()
    },
    errorCallback: () => {
      toast.error('مشکلی در ثبت درخواست شما به وجود آمده است')
      console.log('errrrrr')
    },
  })

  const handleSubmit = () => {
    postProject.mutate({
      query: project.addProject,
    })
  }

  const handleEdit = () => {
    editProject.mutate({
      query: project.addProject,
      id: id,
    })
  }

  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center h-[100px]">
        <p className="text-titr text-[18px] font-bold">پروژه جدید</p>
      </Card>

      <div className="p-8">
        <Card className="p-8">
          <div className="grid grid-cols-2 gap-4">
            <TextField
              label="عنوان"
              variant="outlined"
              size="small"
              name="title.fa"
              value={project.addProject.title.fa}
              onChange={onChangeHandler}
            />
            <TextField
              label="Title"
              variant="outlined"
              size="small"
              className="ltr"
              name="title.en"
              value={project.addProject.title.en}
              onChange={onChangeHandler}
            />
            <TextField
              label="خلاصه توضیحات"
              variant="outlined"
              size="small"
              name="briefDescription.fa"
              multiline
              rows={4}
              value={project.addProject.briefDescription.fa}
              onChange={onChangeHandler}
            />
            <TextField
              label="briefDescription"
              variant="outlined"
              size="small"
              className="ltr"
              name="briefDescription.en"
              multiline
              rows={4}
              value={project.addProject.briefDescription.en}
              onChange={onChangeHandler}
            />
            <div className="col-span-2">
              <TextField
                label="توضیحات"
                variant="outlined"
                size="small"
                className="w-full"
                name="description.fa"
                multiline
                rows={4}
                value={project.addProject.description.fa}
                onChange={onChangeHandler}
              />
            </div>
            <div className="col-span-2">
              <TextField
                label="description"
                variant="outlined"
                size="small"
                className="ltr w-full"
                name="description.en"
                multiline
                rows={4}
                value={project.addProject.description.en}
                onChange={onChangeHandler}
              />
            </div>
            <div className="col-span-2">
              <Autocomplete
                multiple
                size="small"
                options={skillExperience}
                getOptionLabel={(option) => option}
                defaultValue={project.addProject.skills}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField {...params} label="مهارت ها" />
                )}
                onChange={(event, value) =>
                  updateAddProjectOneProperty({
                    skills: [...value],
                  })
                }
              />
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {project.addProject.links.map((link, index) => (
                  <TextField
                    key={index}
                    label={`لینک ${index + 1}`}
                    size="small"
                    value={link}
                    onChange={(e) => handleLinkChange(index, e.target.value)}
                    fullWidth
                  />
                ))}
              </div>
              <div className="mt-4">
                <Button
                  type="button"
                  onClick={handleAddLink}
                  variant="contained"
                >
                  افزودن لینک جدید
                </Button>
              </div>
            </div>
            <div className="col-span-2">
              <div className="rounded border border-solid border-border">
                <div className="bg-body px-4 py-3 border-b border-x-0 border-t-0 border-solid border-border">
                  <p className="text-sm font-medium">گالری تصاویر</p>
                </div>
                <div className="p-4">
                  <div className="w-32 h-32 border border-dashed border-border rounded flex flex-col justify-center items-center gap-y-2 cursor-pointer">
                    <PermMediaOutlinedIcon />
                    <p className="text-xs font-medium">انتخاب تصویر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button
              variant="contained"
              disabled={disabled}
              onClick={mode === 'edit' ? handleEdit : handleSubmit}
            >
              ارسال
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default CreateProject
