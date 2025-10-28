import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client/react"

const GET_LESSONS_QUERY = gql`
  query myQuery {
    lessons {
        id
        slug
        title
        teacher {
          name
          bio
          avatarURL
        }
    }
  }
`

interface Lesson {
  id: string
  title: string
}

export function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <ul>
      {data?.lessons.map(({ id, title }) => {
        return <li key={id}>{title}</li>
      })}
    </ul>
  )
}
