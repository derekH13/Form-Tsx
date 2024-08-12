import { Link } from 'react-router-dom'
import Provider from '../../shared/contexts/Provider'
import Form from '../../shared/componentes/Form/Form'




//aqui é uma pagina
export const Dashboard = () => {
    return(
        <Provider>
            <div  className='bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center'>
                <h1 className='font-bold text-[2rem] text-white'>pagina Dash</h1>
                <p className='text-white'>Assine nossa Newsletter e mantenha-se informado</p>

                <div className='w-96 mt-4 bg-slate-200 px-4 py-5 rounded-lg'>
                 <Form />                
                </div>

                <p className='text-slate-100 text-xs w-96 text-center'>Ao se increver, voçê passará a receber os nossos e-mails com as melhores dicas, novidades e ofertas!</p>
            </div>
        </Provider> 
    )

}