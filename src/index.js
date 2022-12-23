import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { createBrowserRouter, RouterProvider, matchPath } from "react-router-dom";
import CharacterPage from './components/pages/characterPage';
import BookPage from './components/pages/bookPage';
import HousePage from './components/pages/housePage';
import BooksItem from './components/pages/booksItem';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />, sd
		loader: App.render,
		children: [
			{
				index: true,
				path: "characters",
				element: <CharacterPage />,
				loader: CharacterPage.render,
			},
			{
				index: true,
				path: "books",
				element: <BookPage />,
				loader: BookPage.render,
			},
			{
				index: true,
				path: "houses",
				element: <HousePage />,
				loader: HousePage.render,
			},
			{
				path: "books/:bookId",
				element: <BooksItem bookId={matchPath.params} />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);

