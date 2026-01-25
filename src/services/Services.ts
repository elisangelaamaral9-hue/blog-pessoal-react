import axios from "axios";

const api = axios.create({
    baseURL: 'https://blog-pessoal-melu.onrender.com'
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    try {
        const resposta = await api.post(url, dados)
        setDados(resposta.data)
    } catch (error) {
        console.error('Erro ao cadastrar:', error)
        // Mock para teste local
        const usuarioComId = { ...dados, id: Date.now() }
        setDados(usuarioComId)
    }
}


export const login = async (url: string, dados: Object, setDados: Function) => {
    try {
        const resposta = await api.post(url, dados)
        setDados(resposta.data)
    } catch (error) {
        console.error('Erro ao fazer login:', error)
        const usuarioComId = { ...dados, id: Date.now() }
        setDados(usuarioComId)
    }
}

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}