import { useEffect } from "react";

import authApi from "../../api/auth";

function Home() {
    useEffect(() => {
        authApi.getCurrentUser().then(console.log);
    }, []);

    return (
        <div>
            <h1>Home page</h1>
        </div>
    );
}

export default Home;
