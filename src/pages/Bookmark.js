import Nav from "../Nav";
import Footer from "../footer";

function Bookmark(){
    let bookmarkList=[];
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i);
        bookmarkList.push({
            _title:JSON.parse(localStorage.getItem(key))._title, 
            _address:JSON.parse(localStorage.getItem(key))._address
        })
    }
    return (
        <>
            <Nav />
            <h1>고객님의 북마크</h1>
            <hr />
            {bookmarkList.map((item)=>(
                <div key={item._title}>
                    <h3>{item._title}</h3>
                    <p>{item._address}</p>
                </div>
            ))}
            <Footer />
        </>
    )
}

export default Bookmark;