import { CheckIcon, ProgressIcon, DetailIcon, TrashIcon } from '../assets/icons'
import Button from './Button'

const TaskItem = ({ task, handleCheckboxClick, handleDeleteClick }) => {
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
      className={`flex items-center justify-between gap-2 rounded-lg px-4 py-3 text-sm transition ${getStatusClasses()}`}
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
            onChange={() => handleCheckboxClick(task.id)}
          />
          {task.status === 'done' && <CheckIcon />}
          {task.status === 'inprogress' && (
            <ProgressIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" onClick={() => handleDeleteClick(task.id)}>
          <button>
            {' '}
            <TrashIcon />
          </button>
        </Button>
        <a
          href="#"
          className="flex cursor-pointer gap-2 transition hover:opacity-75"
        >
          <DetailIcon />
        </a>
      </div>
    </div>
  )
}

export default TaskItem
