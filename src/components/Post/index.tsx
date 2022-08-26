import { Posts } from '../../models/Posts';
import { PostStyle } from './PostStyle';
import Link from 'next/link';
import { marked } from 'marked';
import NavHeading from '../NavHeading';
import { NavHeadingsContextProvider } from '../../contexts/NavHeadingsContext';

import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

interface Props {
	post: Posts;
}

const Post: React.FC<Props> = ({ post }: { post: Posts }) => {
	return (
		<NavHeadingsContextProvider>
			<NavHeading post={post} />
			<PostStyle>
				<header>
					<Link href="/">[ Go back ]</Link>
					<p>
						Posted on <time>{post.date}</time>
					</p>
				</header>
				<main>
					<h1>{post.title}</h1>
					<div
						dangerouslySetInnerHTML={{
							__html: marked(post.content, {
								renderer: new marked.Renderer(),
								highlight: function (code, lang) {
									const hightlight = hljs;
									const language = hightlight.getLanguage(lang)
										? lang
										: 'plaintext';
									return hljs.highlight(code, { language }).value;
								},
								langPrefix: 'hljs lang-',
								gfm: true,
								mangle: true,
								smartLists: true,
								smartypants: true,
								pedantic: false,
								breaks: false,
								xhtml: false,
							}),
						}}
					></div>
				</main>
			</PostStyle>
		</NavHeadingsContextProvider>
	);
};

export default Post;
