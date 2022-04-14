import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: {},
};

export const setUserAsync = createAsyncThunk(
    'user/setUserAsync',
    async (username) => {
        const promises = [
            fetch(`https://api.github.com/users/${username}`).then((res) => res.json()),
            fetch(`https://api.github.com/users/${username}/repos?` + new URLSearchParams({
                sort: 'updated',
                per_page: 30,
                page: 1,
            })).then((res) => res.json()),
        ];
        const [user, repos] = await Promise.all(promises);
        return {...user, repos: repos};
    }
);

export const setPageAsync = createAsyncThunk(
    'user/setPageAsync',
    async (username, page) => {
        console.log("the url is: ", `https://api.github.com/users/${username}/repos?` + new URLSearchParams({
            sort: 'updated',
            per_page: 30,
            page: page,
        }));
        console.log('page in setPageAsync: ', page);
        return await fetch(`https://api.github.com/users/${username}/repos?` + new URLSearchParams({
                sort: 'updated',
                per_page: 30,
                page: page,
            })).then((res) => res.json()).then((res) => console.log(res))
    }
);


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clear: (state) => {
            state.value = initialState.value;
        },
    },
    extraReducers: {
        [setUserAsync.fulfilled]: (state, action) => {
            state.value.image = action.payload.avatar_url;
            state.value.name = action.payload.name;
            state.value.username = action.payload.login;
            state.value.location = action.payload.location;
            state.value.company = action.payload.company;
            state.value.userAPI = action.payload.url;
            state.value.url = action.payload.html_url;
            state.value.repos = action.payload.repos;
            state.value.followers_url = action.payload.followers_url;
            state.value.following_url = action.payload.following_url;
            state.value.starred_url = action.payload.starred_url;
            state.value.created_at = action.payload.created_at;
            state.value.location = action.payload.location;
            state.value.bio = action.payload.bio;
            state.value.repo_count = action.payload.public_repos;
            state.value.follower_count = action.payload.followers;
            state.value.following_count = action.payload.following;
        },
        [setPageAsync.fulfilled]: (state, action) => {
            state.repos = action.payload;
        }
    },
});

export const {clear} = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
