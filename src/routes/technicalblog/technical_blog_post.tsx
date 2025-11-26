import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import ReactMarkdown from "react-markdown";
import { technicalBlogData } from "./technical_blog_data.tsx";
import { ArrowLeftIcon } from "flowbite-react";
import remarkGfm from "remark-gfm";

export default function TechnicalBlogPost() {
    const { id } = useParams<{ id: string }>();
    const [content, setContent] = useState<string>("");

    const post = technicalBlogData.find((p) => p.id === id);

    useEffect(() => {
        if (post) {
            fetch(post.file)
                .then((res) => res.text())
                .then(setContent)
                .catch((err) => console.error("Error loading markdown:", err));
        }
    }, [post]);

    if (!post)
        return (
            <p className="text-center text-red-400 py-20">Post not found.</p>
        );

    // Extend props type to include inline for code
    type CodeProps = React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
    > & { inline?: boolean };

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <Link
                to="/technicalblog"
                className="text-purple-600 hover:underline flex"
            >
                <ArrowLeftIcon className="mr-5" />
                Back to Blog
            </Link>
          {/*  <Link
                to="/skills"
                className="text-purple-600 hover:underline flex mt-5"
            >
                <ArrowLeftIcon className="mr-5" />
                Back to Skill
            </Link>*/}

            <div className="prose prose-invert max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        i: (props) => <i className="bg-white" {...props} />,
                        a: (props) => (
                            <a
                                className="text-purple-600 hover:underline mt-3"
                                {...props}
                            />
                        ),
                        h1: (props) => (
                            <h1
                                className="text-3xl text-cyan-500 italic font-extrabold mt-6 mb-4"
                                {...props}
                            />
                        ),
                        h2: (props) => (
                            <h2
                                className="text-2xl font-semibold mt-4 mb-2"
                                {...props}
                            />
                        ),
                        p: (props) => <p className="text-black mb-4" {...props} />,
                        code: (props: CodeProps) => {
                            const { inline, className, children, ...rest } = props;
                            return inline ? (
                                <code
                                    className="bg-gray-800 text-white px-1 py-0.5 rounded text-sm"
                                    {...rest}
                                >
                                    {children}
                                </code>
                            ) : (
                                <pre className="bg-gray-900 text-white p-4 rounded overflow-auto">
                                    <code className={className} {...rest}>
                                        {children}
                                    </code>
                                </pre>
                            );
                        },
                        img: (props) => (
                            <img className="rounded-md my-4" {...props} />
                        ),
                        ul: (props) => (
                            <ul
                                className="list-disc list-inside ml-4 mb-4"
                                {...props}
                            />
                        ),
                        li: (props) => <li className="mb-1" {...props} />,
                        table: (props) => (
                            <table
                                className="min-w-full border border-gray-600 text-sm text-left text-black rounded-lg overflow-hidden my-4"
                                {...props}
                            />
                        ),
                        thead: (props) => (
                            <thead
                                className="bg-purple-700 text-white uppercase tracking-wider"
                                {...props}
                            />
                        ),
                        tr: (props) => (
                            <tr
                                className="border border-black hover:bg-gray-800 transition-colors hover:text-white"
                                {...props}
                            />
                        ),
                        th: (props) => (
                            <th className="px-4 py-2 font-semibold" {...props} />
                        ),
                        td: (props) => <td className="px-4 py-2" {...props} />,
                    }}
                >
                    {content ?? ""}
                </ReactMarkdown>
            </div>
        </div>
    );
}
