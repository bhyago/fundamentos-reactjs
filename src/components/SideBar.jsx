import { PencilLine } from 'phosphor-react'
import styles from './SideBar.module.css'
import { Avatar } from './Avatar'

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/40799862?v=4"/>
        <strong>Hyago Mesquita</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}