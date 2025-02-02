import {createRoot} from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {RouterProvider} from "react-router";
import {store} from "./store/store.ts";
import {routes} from "./router/router.tsx";

createRoot(document.getElementById('root')!).render(

    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>

)
