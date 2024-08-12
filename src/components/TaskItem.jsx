import TaskIcon from '../assets/icons/check.svg?react'
import ProgressIcon from '../assets/icons/progress.svg?react'
import DetailIcon from '../assets/icons/detail.svg?react'
const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[#00ADB5] bg-opacity-10 text-[#00ADB5]'
    }
    if (task.status === 'inprogress') {
      return 'bg-[#FFAA04] bg-opacity-10 text-[#FFAA04]'
    }
    if (task.status === 'todo') {
      return 'bg-[#35383E] bg-opacity-10 text-[#35383E]'
    }
  }
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg px-4 py-3 text-sm ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        {' '}
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === 'done'}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {task.status === 'done' && <TaskIcon />}
          {task.status === 'inprogress' && (
            <ProgressIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>
      <a href="#" className="cursor-pointer transition hover:opacity-75">
        <DetailIcon />
      </a>
    </div>
  )
}

export default TaskItem
