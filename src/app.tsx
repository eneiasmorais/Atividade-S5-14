import { useState, useEffect } from 'preact/hooks'
import { ToastContainer , toast } from 'react-toastify'
import { api } from './services/api'
import { FruitList } from './components/FruitsList';
import { AxiosError } from 'axios';
import 'react-toastify/dist/ReactToastify.min.css'



export interface iFruit{
  id: number;
  name: string;
  category: string;
  price: number;
}

export function App() {

  const [ fruitList , setFruitList] = useState<iFruit[]>([]);

  
  
  useEffect(() => {
    
    const getFruits = async () => {
      try {
        const response = await api.get('/fruits')
        console.log(response)
        toast.success('Requisição concluída com sucesso!')
        setFruitList(response.data)
        console.log(response.data)
      } catch (error) {
        const currentError = error as AxiosError<string>
        console.log(currentError);
        toast.error('Requisição não realizada. Verifique o erro e tente novamente!')
      }
    } 
    getFruits()
    }, [])
    
    
  return (
    <div className='App'>
      <ToastContainer position='top-right' />
      <FruitList fruitList={fruitList} />
    </div>
  )
}
