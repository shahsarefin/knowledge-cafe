
const Bookmark = ({ bookmark }) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-200 p-2 m-2">
            <h3 className="text-2xl ">{title}</h3>
        </div>
    );
};

export default Bookmark;