import { User } from "../types/User";

//validação de informações de cadastro
type Error = {
    [key: string]: string;
}

export const validate = (data: User) => {

    const erros: Error = {}


    if(!data.name){
        erros['name'] = "O nome é obrigatorio";
    }

    if(!data.email){
        erros['email'] = "O email é obrigatorio";
    }

    if(!data.agree){
        erros['agree'] = "Você precisa concordar com os termos!";
    }

    return erros

}
