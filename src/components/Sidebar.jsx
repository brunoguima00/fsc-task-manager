import { HomeIcon, TasksIcon } from '../assets/icons'
import SidebarButton from './SidebarButton'

const Sidebar = () => {
  return (
    <div className="h-screen w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-brand-primary">
          {' '}
          Task Manager
        </h1>
        <p>
          Um simples{' '}
          <span className="text-brand-primary">organizador de tarefas.</span>
        </p>
      </div>
      {/* flex flex-col para deixar um embaixo do outro, gap é o espaçamento entre os elementos da div */}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton color="unselected">
          <HomeIcon />
          Início
        </SidebarButton>

        <SidebarButton color="selected">
          <TasksIcon />
          Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar
