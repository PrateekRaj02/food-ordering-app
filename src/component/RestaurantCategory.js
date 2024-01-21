import ItemList from "./ItemList";
const RestaurantCategory = ({ data,showItems,setShowIndex }) => {

function handleClick(){
setShowIndex();
}
  return (
    <div>
      {/* header */}

      <div className="shadow-lg w-6/12 bg-gray-50 mx-auto my-4 p-4" >
        <div className="flex justify-between cursor-pointer " onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordian body */}
    </div>
  );
};

export default RestaurantCategory;
