export interface SearchEngine {
    name: string;
    queryTemplate: string;
    iconPath: string;
}

export const SearchEngines: SearchEngine[] = [
    {
        name: "Google",
        queryTemplate: "https://google.com/search?q=%QUERY%",
        iconPath: "assets/icons/google.svg",
    },
    {
        name: "Bing",
        queryTemplate: "https://www.bing.com/search?q=%QUERY%",
        iconPath: "assets/icons/bing.svg",
    },
    {
        name: "Baidu",
        queryTemplate: "https://www.baidu.com/s?wd=%QUERY%",
        iconPath: "assets/icons/baidu.svg",
    },
    {
        name: "Yahoo!",
        queryTemplate: "https://search.yahoo.com/search?p=%QUERY%",
        iconPath: "assets/icons/yahoo.svg",
    },
    {
        name: "Yandex",
        queryTemplate: "https://yandex.com/search/?text=%QUERY%",
        iconPath: "assets/icons/yandex.svg",
    },
    {
        name: "DuckDuckGo",
        queryTemplate: "https://duckduckgo.com/?q=%QUERY%",
        iconPath: "assets/icons/duckduckgo.svg",
    },
    {
        name: "Ecosia",
        queryTemplate: "https://www.ecosia.org/search?q=%QUERY%",
        iconPath: "",
    },
];

export const DefaultSearchEngine = SearchEngines[0];