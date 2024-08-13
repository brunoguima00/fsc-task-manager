import Button from './Button'
import AddIcon from '../assets/icons/add.svg?react'
import Trashicon from '../assets/icons/trash.svg?react'
import SunIcon from '../assets/icons/sun.svg?react'
import CloudSunIcon from '../assets/icons/cloud-sun.svg?react'
import MoonIcon from '../assets/icons/moon.svg?react'
import TasksSeparator from './TasksSeparator'
import TASKS from '../constants/tasks.js'
import { useState } from 'react'
import TaskItem from './TaskItem.jsx'
import { toast } from 'sonner'

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS)

  const morningTasks = tasks.filter((task) => task.time === 'morning')

  const afternoonTasks = tasks.filter((task) => task.time === 'afternoon')

  const eveningTasks = tasks.filter((task) => task.time === 'evening')

  const handeTaskDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId)
    setTasks(newTasks)
    toast.success('Tarefa deletada com sucesso!')
  }

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id != taskId) {
        return task
      }

      if (task.status === 'todo') {
        toast.success('Tarefa iniciada com sucesso!')
        return { ...task, status: 'inprogress' }
      }

      if (task.status === 'inprogress') {
        toast.success('Tarefa concluída com sucesso!')
        return { ...task, status: 'done' }
      }

      if (task.status === 'done') {
        toast.success('Tarefa reaberta com sucesso!')
        return { ...task, status: 'todo' }
      }

      return task
    })

    setTasks(newTasks)
  }

  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            <Trashicon />
            Limpar Tarefa
          </Button>

          <Button>
            <AddIcon />
            Nova tarefa
          </Button>
        </div>
      </div>

      {/* Lista de Tarefas */}

      <div className="space-y-6 rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator icon={<SunIcon />} title="Manhã" />

          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handeTaskDeleteClick}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator icon={<CloudSunIcon />} title="Tarde" />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handeTaskDeleteClick}
            />
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator icon={<MoonIcon />} title="Noite" />
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handeTaskDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
