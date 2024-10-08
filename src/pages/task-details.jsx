import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ArrowLeftIcon, ChevronRightIcon, TrashIcon } from '../assets/icons'
import Button from '../components/Button'
import Input from '../components/Input'
import Sidebar from '../components/Sidebar'
import TimeSelect from '../components/TimeSelect'

const TaskDetailsPage = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState()

  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'GET',
      })
      const data = await response.json()
      setTask(data)
    }

    fetchTask()
  }, [taskId])
  return (
    <div className="flex">
      <Sidebar />
      {/* Barra do Topo */}
      <div className="w-full px-8 py-16">
        <div className="flex w-full justify-between">
          {/* Parte da Esquerda */}
          <div>
            <button
              onClick={handleBackClick}
              className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary"
            >
              <ArrowLeftIcon />
            </button>
            <div className="flex items-center gap-1 text-xs">
              <span
                className="cursor-pointer text-brand-text-gray"
                onClick={handleBackClick}
              >
                Minhas Tarefas
              </span>
              <ChevronRightIcon />
              <span className="font-semibold text-brand-primary">
                {task?.title}
              </span>
            </div>
            <h1 className="mt-2 text-xl font-semibold">{task?.title}</h1>
          </div>
          <Button className="h-fit self-end" color="danger">
            {' '}
            <TrashIcon />
            Deletar tarefa
          </Button>
        </div>
        {/* Dados da tarefa */}

        <div className="mt-6 space-y-6 rounded-xl bg-brand-white p-6">
          <div>
            <Input label="Título" id="title" value={task?.title} />
          </div>

          <div>
            <TimeSelect value={task?.time} />
          </div>

          <div>
            <Input
              label="Descrição"
              id="description"
              value={task?.description}
            />
          </div>
        </div>

        <div className="mt-2 flex w-full justify-end gap-2">
          <Button size="large" color="secondary">
            Cancelar
          </Button>
          <Button size="large" color="primary">
            Salvar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TaskDetailsPage
