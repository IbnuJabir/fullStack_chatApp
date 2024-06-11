import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import './notify.css'

const Notification = () => {
  return (
    <div className='notify'>
      <ToastContainer position="bottom-center"/>
    </div>
  )
}

export default Notification