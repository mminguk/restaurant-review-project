import Nav from "../Nav";
import Footer from "../footer";

function Bookmark(){
    const bookmarkItem=window.localStorage.getItem('item');
    const title=JSON.parse(bookmarkItem)._title;
    const address=JSON.parse(bookmarkItem)._address;
    return (
        <>
            <Nav />
            <h1>고객님의 북마크</h1>
            <hr />
                <div>
                    <h3>{title}</h3>
                    <p>{address}</p>
                </div>
            <Footer />
        </>
    )
}

export default Bookmark;