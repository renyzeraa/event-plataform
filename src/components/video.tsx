import { CaretRightIcon, DiscordLogoIcon, FileArrowDownIcon, LightningIcon } from "@phosphor-icons/react";
import { LoadingVideo } from "./loading-video";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import ReactPlayer from 'react-player'

interface VideoProps {
    lessonSlug: string
}

export interface GetLessonBySlugResponse {
    lesson: {
        title: string
        videoId: string
        description: string
        teacher: {
            name: string
            bio: string
            avatarURL: string
        }
    }
}

export function Video({ lessonSlug }: VideoProps) {
    const { data, loading } = useGetLessonBySlugQuery({ variables: { slug: lessonSlug } })

    if (!data || !data.lesson || loading) {
        return (
            <LoadingVideo />
        )
    }

    const { description, teacher, title, videoId } = data.lesson

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="bg-gray-600 w-full max-w-[1100px] max-h-[70vh] aspect-video overflow-clip">
                    <ReactPlayer controls className="!w-full !h-full" src={`https://www.youtube.com/watch?v=${videoId}`} />
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1 flex flex-col">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="text-gray-200 mt-4 block leading-relaxed">{description}</p>
                        {teacher &&
                            <div className="flex items-center gap-4 mt-6">
                                <img className="h-16 w-16 rounded-full border-2 border-solid border-blue-500" src={teacher.avatarURL} alt="Foto perfil" />
                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">{teacher.name}</strong>
                                    <span className="text-gray-300 text-sm">{teacher.bio}</span>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="flex flex-col gap-4">
                        <a className="text-white hover:bg-green-700 transition-colors justify-center rounded px-4 py-3 flex items-center gap-2 border border-solid border-transparent bg-green-500" href="https://discord.com" target="_blank">
                            <DiscordLogoIcon size={24} />Comunidade do Discord
                        </a>
                        <a href="https://rseat.in/ignitelabreactjs" className="flex hover:bg-blue-500 hover:text-black transition-colors justify-center rounded px-4 py-3 items-center gap-2 text-blue-500 border border-solid border-blue-500">
                            <LightningIcon size={24} />Acesse o desafio
                        </a>
                    </div>
                </div>
                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" href="https://rseat.in/ignitelabreactjs">
                        <div className="bg-green-700 h-full p-6 flex items-center"><FileArrowDownIcon size={40} /></div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material complementar</strong>
                            <p className="text-gray-300">Acesse este material para fazer o curso corretamente</p>
                        </div>
                        <div className="h-full p-6 flex items-center"><CaretRightIcon size={24} /></div>
                    </a>
                    <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" href="https://rseat.in/ignitelabreactjs">
                        <div className="bg-green-700 h-full p-6 flex items-center"><FileArrowDownIcon size={40} /></div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpappers exclusivos</strong>
                            <p className="text-gray-300">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
                        </div>
                        <div className="h-full p-6 flex items-center"><CaretRightIcon size={24} /></div>
                    </a>
                </div>
            </div>
        </div>
    )
}