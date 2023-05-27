const Home =  ({repo}) => {
    return (
        <div>{repo}</div>
    );
}

export const getStaticProps = async () => {
    const res = await fetch('https://lopster568.github.io/c_docs.github.io/index.md');
    const repo = await res.text();
    return { props: { repo } };
};

export default Home;