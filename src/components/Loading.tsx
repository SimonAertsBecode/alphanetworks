const Loading = ({ loading, item, children }: { loading: boolean; item: string; children: React.ReactNode }) => {
   return <>{loading ? <p>{item}</p> : children}</>;
};

export default Loading;
