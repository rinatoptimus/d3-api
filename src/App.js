import React from "react";
import AppPostsPerPage from "./components/PostsPerPage/AppPostsPerPage";
import AppAllPosts from "./components/AllPosts/AppAllPosts";
import AppPostsLinks from "./components/PostsLinks/AppPostsLinks";
import AppPostById from "./components/PostById/AppPostById";
import AppPostWithImage from "./components/PostWithImage/AppPostWithImage";
import AppPostPage from "./components/PostPage/AppPostPage";
//import SearchPosts from "./components/SearchPosts/SearchPosts";

export default function App() {
  return (
    <div>
      {/* <h3>Поиск по постам:</h3>
      <SearchPosts /> */}
      <hr />
      <h3>Вывести 5 постов (файл AppPostsPerPage):</h3>
      <AppPostsPerPage />
      <hr />
      <h3>Вывести все посты (файл AppAllPosts):</h3>
      <AppAllPosts />
      <hr />
      <h3>Вывести посты в виде ссылок (файл AppPostsLinks):</h3>
      <AppPostsLinks />
      <hr />
      <h3>Вывести пост по ID (файл AppPostById):</h3>
      <AppPostById />
      <hr />
      <h3>Вывести пост с изображением (файл AppPostWithImage):</h3>
      <AppPostWithImage />
      <hr />
      <h3>Вывести пост с контентом (файл AppPostPage):</h3>
      <AppPostPage />
    </div>
  );
}
