import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <>
    <Header />
      <div className={styles.wrapper}>
      <SideBar />
      <main>
        <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum sit..."
      />
      <Post 
        author="Hyago Mesquita"
        content="Lorem ipsum sit..."
        />
      <Post /> 
        </main>
      <Post /> 
      </div>
    </>
  )
}