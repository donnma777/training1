import { Link } from "react-router-dom";

const Technology = () => {
    return (
        <>
            <h1>テクノロジー</h1>
            <div>
                <Link to={`/`}>ホームに戻る</Link>
            </div>
        </>
    );
};


export default Technology;