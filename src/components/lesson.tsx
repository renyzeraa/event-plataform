import { CheckCircleIcon, LockIcon } from "@phosphor-icons/react";
import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface LessonProps {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
}

export function Lesson({ availableAt, slug, title, type }: LessonProps) {
    const available = isPast(availableAt)
    const dateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })

    return (
        <a href={slug}>
            <span className="text-gray-300">{dateFormatted}</span>
            <div className="p-4 rounded border border-solid border-gray-500 mt-2 block">
                <header className="flex items-center justify-between">
                    {available ?
                        (
                            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                                <CheckCircleIcon size={20} />
                                Conteúdo liberado
                            </span>
                        ) :
                        (
                            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                <LockIcon size={20} />
                                Em breve
                            </span>
                        )
                    }
                    <span className="text-xs py-0.5 px-2 text-white font-bold border border-solid rounded border-green-500">
                        {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">{title}</strong>
            </div>
        </a>
    )
}