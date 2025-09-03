import { BrowserRouter, Route,Routes } from 'react-router-dom';
function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Korea" element={<>Hello!!</>}></Route>
                <Route path="/China" element={<>Hello!!</>}></Route>
                <Route path="/Japan" element={<>Hello!!</>}></Route>
                <Route path="/weston" element={<>Hello!!</>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;