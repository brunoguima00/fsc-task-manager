import { tv } from 'tailwind-variants'
import PropTypes from 'prop-types'

const SidebarButton = ({ children, color }) => {
  const sidebar = tv({
    base: 'flex items-center gap-2 rounded-lg px-6 py-3',
    variants: {
      color: {
        unselected: 'text-brand-dark-blue',
        selected: 'bg-[#E6F7F8] text-brand-primary',
      },
    },
  })

  return (
    <a href="#" className={sidebar({ color })}>
      {children}
    </a>
  )
}

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['unselected', 'selected']),
}

export default SidebarButton
