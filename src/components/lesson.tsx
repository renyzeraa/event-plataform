import { CheckCircleIcon, LockIcon } from "@phosphor-icons/react";
import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link, useParams } from "react-router-dom";

interface LessonProps {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
}

export function Lesson({ availableAt, slug, title, type }: LessonProps) {
    const available = isPast(availableAt)
    const dateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })
    const { slug: paramSlug } = useParams<{ slug: string }>()
    const active = slug === paramSlug

    return (
        <Link to={`/event/lesson/${slug}`} className="group">
            <span className="text-gray-300">{dateFormatted}</span>
            <div className={`p-4 rounded relative border border-solid border-gray-500 mt-2 block group-hover:border-green-500 ${active ? 'bg-green-500 after:size-4 after:top-1/2 after:translate-y-[-50%] after:bg-green-500 after:left-[-6px] after:rotate-45 after:absolute after:content-normal border-green-700' : ''}`}>
                <header className="flex items-center justify-between">
                    {available ?
                        (
                            <span className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${active ? 'text-white' : ''}`}>
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
                    <span className={`text-xs py-0.5 px-2 text-white font-bold border border-solid rounded ${active ? 'border-white' : 'border-green-500'}`}>
                        {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className={`mt-5 block ${active ? 'text-white' : 'text-gray-200'}`}>{title}</strong>
            </div>
        </Link>
    )
}