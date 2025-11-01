import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./lesson";

export function Sidebar() {
    const { data } = useGetLessonsQuery()

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