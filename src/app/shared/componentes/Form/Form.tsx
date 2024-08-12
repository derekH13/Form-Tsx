import React, { useState, FormEvent } from "react";
import './Form.css'
import { User } from '../../../types/User'
import { validate } from "../../../Util/validate";



function Form(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [agree, setAgree] = useState(false)

    const [erros, setErros] = useState<User | null>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        //primeiro limpa o seteeror para que ele possa resetar
        setErros(null)


        //cria um objeto do tipo user com as informações do state
        const data: User = {
            name,
            email,
            agree,
        }

        //validateErrors recebe a validação de erros
        const validateErrors = validate(data)
        
        if(Object.keys(validateErrors).length > 0){
            setErros(validateErrors)
            return 
        }

        //depois dos dados serem enviados com sucesso resetar
        setName('')
        setEmail('')
        setAgree(false)


        console.log('d')

    }


    


    return(
       <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col">
            <label htmlFor="" className="text-sm">Nome:</label>
            <input type="text" placeholder="Digite seu Nome" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"  value={name} onChange={(e) => setName(e.target.value)}/>

            {/* logica para aparecer se haver erros (nesse caso erro no nome) */}
            {erros?.name && <small className="text-xs text-red-500 mt-1">{erros?.name}</small>}

        </div>

        <div className="flex flex-col">
            <label htmlFor="" className="text-sm">Email:</label>
            <input type="email" placeholder="Digite seu Email" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400" value={email}  onChange={(e) => setEmail(e.target.value)}/>
        
            {/* logica para aparecer se haver erros (nesse caso erro no nome) */}
            {erros?.email && <small className="text-xs text-red-500 mt-1">{erros?.email}</small>}
        
        </div>

        <div className="flex flex-col">
            <a href="#" className="text-xs underline mb-2">Leia os Termos</a>
            <div className="flex gap-2 items-center">

                {/* validação do checkbox */}
                <input type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                 />
                <label htmlFor="" className="text-sm">Concordo com os termos</label>
            </div>

            
                {/* logica para aparecer se haver erros (nesse caso erro no nome) */}
                {erros?.agree && <small className="text-xs text-red-500 mt-1">{erros?.agree}</small>}
        </div>

        <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Cadastrar</button>
       </form>
    )
}


export default Form