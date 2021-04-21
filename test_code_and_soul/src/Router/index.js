import {BrowserRouter, Switch, Route} from "react-router-dom";
import AllPosts from "../Pages/AllPosts/index";
import PostDetails from "../Pages/PostDetails/index";
import NotFound from "../Pages/NotFound/index";

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <AllPosts/>
                </Route>
                <Route exact path="/Home">
                    <AllPosts/>
                </Route>
                <Route exact path="/Detalhes">
                    <PostDetails/>
                </Route>
                <Route path="/">
                    <NotFound/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;