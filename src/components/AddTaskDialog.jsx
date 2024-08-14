import './AddTaskDialog.css'

import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import Button from './Button'
import Input from './Input'
import TimeSelect from './TimeSelect'

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState()
  const [time, setTime] = useState('morning')
  const [description, setDescription] = useState()

  const nodeRef = useRef()

  useEffect(() => {
    if (!isOpen) {
      setTitle('')
      setTime('')
      setDescription('')
    }
  }, [isOpen])

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      // unmountOnExit é para remover o elemento do DOM quando não estiver ativo
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            {/* Dialog */}

            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-[#35383E]">
                Nova Tarefa
              </h2>
              <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
                Insira as informações abaixo
              </p>

              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Insira o título da tarefa"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />

                <TimeSelect
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />

                <div className="flex gap-3">
                  <Button
                    size="large"
                    className="w-full"
                    variant="secondary"
                    onClick={handleClose}
                  >
                    Cancelar{' '}
                  </Button>
                  <Button
                    size="large"
                    className="w-full"
                    onClick={() => {
                      handleSubmit({
                        id: Math.random(),
                        title: title,
                        description: description,
                        time: time,
                        status: 'todo',
                      })
                      handleClose()
                    }}
                  >
                    Salvar{' '}
                  </Button>
                </div>
              </div>
            </div>
          </div>,

          document.body
        )}
      </div>
    </CSSTransition>
  )
}

export default AddTaskDialog
