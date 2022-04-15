import UserView from "../views/UserView";
import * as redux from "react-redux";
import {render} from "@testing-library/react";
import {store} from "../app/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

test('user appears on UserView', () => {
    const spy = jest.spyOn(redux, 'useSelector');
    const mockUser = {
        name: "Test User",
        username: "test",
    }
    spy.mockReturnValue(mockUser);
    render(
        <Provider store={store}>
            <BrowserRouter>
                <UserView/>
            </BrowserRouter>
        </Provider>
    );

    expect(spy).toHaveBeenCalled();

    expect(document.body.textContent).toContain("test");
    expect(document.body.textContent).toContain("Test User");
});


// test('repo list appears on UserView', () => {
//     const spy = jest.spyOn(redux, 'useSelector');
//     const mockUser = {
//         repos: [
//             {name: "Test Repo"}
//         ]
//     }
//     spy.mockReturnValue(mockUser);
//     render(
//         <Provider store={store}>
//             <BrowserRouter>
//                 <UserView/>
//             </BrowserRouter>
//         </Provider>
//     );
//
//     expect(spy).toHaveBeenCalled();
//
//     expect(document.body.textContent).toContain("Test Repo");
// });
