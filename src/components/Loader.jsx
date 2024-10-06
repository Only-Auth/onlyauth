import { MoonLoader } from 'react-spinners'

function Loader({ color = '#000' }) {
  return (
    <MoonLoader
      color={color}
      size={24}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Loader
