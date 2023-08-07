import { useThemeAction } from '@/store/themeSlice'
import LoadSvgIcon from '@/utils/LoadSvgIcon'

const SwitchTheme = () => {
  const { theme, toggleTheme } = useThemeAction()

  return (
    <span
      className="w-full flex flex-col items-center py-5 cursor-pointer"
      onClick={() => toggleTheme()}
    >
      {theme === 'dark' ? (
        <LoadSvgIcon
          name="sun"
          size={20}
          weight={1.5}
          color="var(--color-lightCaptionLight)"
        />
      ) : (
        <LoadSvgIcon
          name="moon"
          size={20}
          weight={1.5}
          color="var(--color-captionDark)"
        />
      )}
    </span>
  )
}

export default SwitchTheme
