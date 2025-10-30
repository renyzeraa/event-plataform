import { gql } from "@apollo/client";
import { Lesson } from "./lesson";
import { useQuery } from "@apollo/client/react";

const GET_LESSON = gql`
    query myQuery {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            slug
            title
            availableAt
            lessonType
        }
    }
`

interface GetLessonsQueryResoponse {
    lessons: {
        id: string
        slug: string
        title: string
        availableAt: string
        lessonType: 'live' | 'class'
    }[]
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResoponse>(GET_LESSON)

    return (
        <aside className="max-w-[348px] w-full bg-gray-700 p-6 border-l border-solid border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-solid block border-gray-600">Cronograma de aulas</span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(({ availableAt, id, lessonType, slug, title }) => (
                    <Lesson
                        key={id}
                        availableAt={new Date(availableAt)}
                        slug={slug}
                        title={title}
                        type={lessonType}
                    />
                ))}
            </div>
        </aside>
    )
}