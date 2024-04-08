import ChildOne from './ChildOne'
import ChildUpdaterOne from './ChildUpdaterOne'
import ChildTwo from './ChildTwo'
import ChildUpdaterTwo from './ChildUpdaterTwo'

const Interlayer = () => {
  return (
    <div>
      <ChildOne />
      <ChildUpdaterOne />
      <ChildTwo />
      <ChildUpdaterTwo />
    </div>
  )
}

export default Interlayer
