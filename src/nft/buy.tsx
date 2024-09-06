import TshirtCollectionPage from "./collection/TshirtCollectionPage"
import ShortCollectionPage from "./collection/ShortCollectionPage"
import BallCollectionPage from "./collection/BallCollectionPage"

export default function Buy() {
    return (
        <>
            <div className="bg-gray-800 w-full">
                <h1>T-Shirts:</h1>
                <TshirtCollectionPage />
                <h1>Shorts:</h1>
                <ShortCollectionPage />
                <h1>Balls:</h1>
                <BallCollectionPage />
            </div>
        </>
    )
}
