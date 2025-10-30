import { Header } from "../components/header";
import { Lesson } from "../components/lesson";
import { Sidebar } from "../components/sidebar";
import { Video } from "../components/video";

export function Event() {
    return (
        <main>
            <Header />
            <Sidebar />
            <Video />
            <Lesson />
        </main>
    )
}