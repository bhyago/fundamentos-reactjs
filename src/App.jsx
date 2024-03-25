import { Post } from './Post'

export function App() {
  return (
    <>
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