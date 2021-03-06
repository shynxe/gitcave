export const getColor = (language) => {
    switch (language) {
        case "JavaScript":
            return "#f1e05a";
        case "TypeScript":
            return "#2b7489";
        case "Python":
            return "#3572A5";
        case "Java":
            return "#b07219";
        case "C++":
            return "#f34b7d";
        case "C":
            return "#9a0eea";
        case "Shell":
            return "#89e051";
        case "Ruby":
            return "#701516";
        case "Go":
            return "#375eab";
        case "PHP":
            return "#4F5D95";
        case "C#":
            return "#178600";
        case "Objective-C":
            return "#438eff";
        case "Swift":
            return "#ffac45";
        case "Kotlin":
            return "#F18E33";
        case "Scala":
            return "#c22d40";
        case "Rust":
            return "#dea584";
        case "Haskell":
            return "#29b544";
        case "Clojure":
            return "#db5855";
        case "Elm":
            return "#60B5CC";
        case "Erlang":
            return "#B83998";
        case "F#":
            return "#b845fc";
        case "Dart":
            return "#00B4AB";
        case "Elixir":
            return "#6e4a7e";
        case "Julia":
            return "#a270ba";
        case "Lua":
            return "#000080";
        case "Perl":
            return "#0298c3";
        case "R":
            return "#198ce7";
        default:
            return "#000000";
    }
}

export const createLink = (debouncedSearch, username) => {
    return "https://api.github.com/search/repositories?q=" + encodeURIComponent(`${debouncedSearch} in:name,description user:${username}`);
}

// function that checks if an object is null or empty
export const isEmpty = (obj) => {
    for (const key in obj)
        if (obj.hasOwnProperty(key))
            return false;
    return true;
};

// function that gets file extension from file name
export const getFileExtension = (filename) => {
    return filename.split('.').pop();
}
