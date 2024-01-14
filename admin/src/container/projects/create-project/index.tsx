import { skillExperience } from '@/enums'
import { Autocomplete, Button, Card, TextField } from '@mui/material'
import { useState } from 'react'
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined'
import { useProjectActions } from '@/store/projectSlice'

const CreateProject = () => {
  const { project, updateAddProject, updateAddProjectOneProperty } =
    useProjectActions()

  console.log('project', project)

  const [links, setLinks] = useState(['']) // State to store link inputs

  const handleAddLink = () => {
    updateAddProjectOneProperty([...project.addProject.links, ''])
  }

  const handleLinkChange = (index: number, value: string) => {
    const updatedLinks = [...links]
    updatedLinks[index] = value
    setLinks(updatedLinks)
  }

  // save data form in redux store
  const onChangeHandler = (e: { target: { name: string; value: string } }) => {
    const title = e.target.name.split('.')[0]
    const lang = e.target.name.split('.')[1]
    const obj = { name: title, amount: { [lang]: e.target.value } }
    updateAddProject(obj)
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
        </Card>
      </div>
    </>
  )
}

export default CreateProject
