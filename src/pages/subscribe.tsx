import React, { useState } from "react";
import { Logo } from "../components/logo";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleOnSubmit(event: React.FormEvent) {
        event.preventDefault()
        await createSubscriber({
            variables: {
                name,
                email
            }
        })
        setEmail('')
        setName('')
        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="max-w-[1100px] w-full flex justify-between items-center mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong></h1>
                    <p className="text-gray-200 mt-4 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
                </div>
                <div className="p-8 bg-gray-700 border border-solid border-gray-500 rounded">
                    <strong className="block mb-6 text-2xl">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleOnSubmit} className="flex flex-col gap-2 w-full">
                        <input className="bg-gray-900 h-14 p-4 rounded" onChange={(e) => setName(e.target.value)} placeholder="Seu nome completo" type="text" />
                        <input className="bg-gray-900 h-14 p-4 rounded" onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" type="email" />
                        <button disabled={loading} className="bg-green-500 mt-4 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" type="submit">Garantir minha vaga</button>
                    </form>
                </div>
            </div>
            <img src="./assets/code-mockup.png" alt="imagem mockup" className="mt-10" />
        </div>
    )
}