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
      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${getStatusClasses()}`}
    >
      {task.title}
    </div>
  )
}

export default TaskItem
