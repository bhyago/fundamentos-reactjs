import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'

export function App() {
  return (
    <>
    <Header />
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum sit..."
      />
      <Post 
        author="Hyago Mesquita"
        content="Lorem ipsum sit..."
        />
      <Post /> 
    </>

  )
}