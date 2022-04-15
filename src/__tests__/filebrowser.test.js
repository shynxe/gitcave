import FileBrowser from "../views/FileBrowser";
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {store} from "../app/store";
import {Provider} from "react-redux";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        state: {
            "repo": {
                "id": 422990974,
                "node_id": "R_kgDOGTZUfg",
                "name": "Produktif",
                "full_name": "shynxe/Produktif",
                "private": false,
                "owner": {
                    "login": "shynxe",
                    "id": 60783301,
                    "node_id": "MDQ6VXNlcjYwNzgzMzAx",
                    "avatar_url": "https://avatars.githubusercontent.com/u/60783301?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/shynxe",
                    "html_url": "https://github.com/shynxe",
                    "followers_url": "https://api.github.com/users/shynxe/followers",
                    "following_url": "https://api.github.com/users/shynxe/following{/other_user}",
                    "gists_url": "https://api.github.com/users/shynxe/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/shynxe/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/shynxe/subscriptions",
                    "organizations_url": "https://api.github.com/users/shynxe/orgs",
                    "repos_url": "https://api.github.com/users/shynxe/repos",
                    "events_url": "https://api.github.com/users/shynxe/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/shynxe/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "html_url": "https://github.com/shynxe/Produktif",
                "description": "Minimalist ToDo app built using ReactJS, Framer Motion and Chakra UI.",
                "fork": false,
                "url": "https://api.github.com/repos/shynxe/Produktif",
                "forks_url": "https://api.github.com/repos/shynxe/Produktif/forks",
                "keys_url": "https://api.github.com/repos/shynxe/Produktif/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/shynxe/Produktif/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/shynxe/Produktif/teams",
                "hooks_url": "https://api.github.com/repos/shynxe/Produktif/hooks",
                "issue_events_url": "https://api.github.com/repos/shynxe/Produktif/issues/events{/number}",
                "events_url": "https://api.github.com/repos/shynxe/Produktif/events",
                "assignees_url": "https://api.github.com/repos/shynxe/Produktif/assignees{/user}",
                "branches_url": "https://api.github.com/repos/shynxe/Produktif/branches{/branch}",
                "tags_url": "https://api.github.com/repos/shynxe/Produktif/tags",
                "blobs_url": "https://api.github.com/repos/shynxe/Produktif/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/shynxe/Produktif/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/shynxe/Produktif/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/shynxe/Produktif/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/shynxe/Produktif/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/shynxe/Produktif/languages",
                "stargazers_url": "https://api.github.com/repos/shynxe/Produktif/stargazers",
                "contributors_url": "https://api.github.com/repos/shynxe/Produktif/contributors",
                "subscribers_url": "https://api.github.com/repos/shynxe/Produktif/subscribers",
                "subscription_url": "https://api.github.com/repos/shynxe/Produktif/subscription",
                "commits_url": "https://api.github.com/repos/shynxe/Produktif/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/shynxe/Produktif/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/shynxe/Produktif/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/shynxe/Produktif/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/shynxe/Produktif/contents/{+path}",
                "compare_url": "https://api.github.com/repos/shynxe/Produktif/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/shynxe/Produktif/merges",
                "archive_url": "https://api.github.com/repos/shynxe/Produktif/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/shynxe/Produktif/downloads",
                "issues_url": "https://api.github.com/repos/shynxe/Produktif/issues{/number}",
                "pulls_url": "https://api.github.com/repos/shynxe/Produktif/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/shynxe/Produktif/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/shynxe/Produktif/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/shynxe/Produktif/labels{/name}",
                "releases_url": "https://api.github.com/repos/shynxe/Produktif/releases{/id}",
                "deployments_url": "https://api.github.com/repos/shynxe/Produktif/deployments",
                "created_at": "2021-10-30T21:07:58Z",
                "updated_at": "2022-02-28T02:22:49Z",
                "pushed_at": "2021-10-30T21:34:29Z",
                "git_url": "git://github.com/shynxe/Produktif.git",
                "ssh_url": "git@github.com:shynxe/Produktif.git",
                "clone_url": "https://github.com/shynxe/Produktif.git",
                "svn_url": "https://github.com/shynxe/Produktif",
                "homepage": "",
                "size": 243,
                "stargazers_count": 7,
                "watchers_count": 7,
                "language": "TypeScript",
                "has_issues": true,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": false,
                "forks_count": 1,
                "mirror_url": null,
                "archived": false,
                "disabled": false,
                "open_issues_count": 0,
                "license": null,
                "allow_forking": true,
                "is_template": false,
                "topics": [],
                "visibility": "public",
                "forks": 1,
                "open_issues": 0,
                "watchers": 7,
                "default_branch": "master"
            },
            "current_tree": "https://api.github.com/repos/shynxe/Produktif/git/trees/master"
        }
    })
}));

test("file browser test", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <FileBrowser/>
            </BrowserRouter>
        </Provider>
    );

    expect(document.body.textContent).toContain("Produktif");
});
