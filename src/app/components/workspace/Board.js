import AddListButton from "./AddListButton";
import List from "./List";

export default function Board() 
{
    return(
        <>
        <div className="board flex bg-[#1f2024] p-4">
            <div className="list-container flex">
                <List listTitle="Default"/>
            </div>
            <AddListButton/>
        </div>
        </>  
    );
}