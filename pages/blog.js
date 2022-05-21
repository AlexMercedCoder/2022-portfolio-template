import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { BlogTitle, BlogWrapper, MainWrapper } from '../styled_components/mainpage';

// The Blog Page Content
export default function Blog({posts}){
    return <MainWrapper>
        {posts.map(post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
            //extract frontmatter properties
            const {title, author, category, date, bannerImage, tags} = frontmatter

            //JSX for individual blog listing
            return <BlogWrapper key={title}>
                <Link href={`/posts/${slug}`}>
                    <BlogTitle>{title}</BlogTitle>
                </Link>
                <h3>{author}</h3>
                <h3>{date}</h3>
            </BlogWrapper>
        })}
    </MainWrapper>
}


//Generating the Static Props for the Blog Page
export async function getStaticProps(){
    // get list of files from the posts folder
    const files = fs.readdirSync('posts');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
        
        return {
          slug,
          frontmatter,
        };
    });

    // Return the pages static props
    return {
        props: {
          posts,
        },
    };
}