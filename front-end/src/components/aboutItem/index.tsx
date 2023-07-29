interface Props {
  title: string
  value: string
}

const AboutItem = ({ title, value }: Props) => {
  return (
    <div
      className={`flex justify-between items-center border-b pb-3 last:border-0 border-center-image`}
    >
      <p className="text-tiny font-medium text-primary capitalize">{title}</p>
      <p className="text-tiny font-medium text-caption dark:text-lightCaption">
        {value}
      </p>
    </div>
  )
}

export default AboutItem
