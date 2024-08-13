import { useState } from 'react'
import { toast } from 'sonner'

import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from '../assets/icons'
import TASKS from '../constants/tasks.js'
import AddTaskDialog from './AddTaskDialog.jsx'
import Button from './Button'
import TaskItem from './TaskItem.jsx'
import TasksSeparator from './TasksSeparator'

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS)

  const [addTaskDialogIsOpen, setTaskDialogIsOpen] = useState(false)

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
            <TrashIcon />
            Limpar Tarefa
          </Button>

          <Button onClick={() => setTaskDialogIsOpen(true)}>
            <AddIcon />
            Nova tarefa
          </Button>

          <AddTaskDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={() => setTaskDialogIsOpen(false)}
          />
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
