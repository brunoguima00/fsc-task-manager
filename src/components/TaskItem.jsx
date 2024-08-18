import { CheckIcon, DetailIcon, ProgressIcon, TrashIcon } from '../assets/icons'
import Button from './Button'
import PropTypes from 'prop-types'

const TaskItem = ({ task, handleCheckboxClick, handleDeleteClick }) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-brand-primary bg-opacity-10 text-brand-primary'
    }
    if (task.status === 'inprogress') {
      return 'bg-brand-process bg-opacity-10 text-brand-process'
    }
    if (task.status === 'todo') {
      return 'bg-brand-dark-blue bg-opacity-10 text-brand-dark-blue'
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
        <Button color="ghost" onClick={() => handleDeleteClick(task.id)}>
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

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.oneOf(['morning', 'afternoon', 'evening']).isRequired,
    status: PropTypes.oneOf(['done', 'inprogress', 'todo']).isRequired,
  }).isRequired,
  handleCheckboxClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
}

export default TaskItem
