export default function AddListButton() {
  return (
    <>
      <div className="bg-[#25262a] w-[20vw] rounded-md p-4 text-[#868b8f] text-sm h-min flex items-center justify-center m-4 hover:cursor-pointer hover:bg-[#292a2f]">
        <span className="material-symbols-outlined !text-[14px]" id="addIcon">
          add
        </span>
        <span>Add new list</span>
      </div>
    </>
  );
}
