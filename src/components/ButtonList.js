import Button from "./Button"

const ButtonList = () => {
  const list = [
    "One Piece",
    "Mixes",
    "Music",
    "Alan Walker",
    "T-Series",
    "Lo-fi",
    "Playlists",
    "Mr. Beast",
    "DTU",
    "Indie",
    "Sports",
    "FIFA",
    "MotoGP",
    "Marvel",
    "Cricket",
    "Basketball",
    "Computer programming", 
    "Javascript",
    "Thrillers",
    "Podcasts",
    "Recently uploaded",
  ];
  return (
    <div className="flex whitespace-nowrap overflow-hidden overflow-x-scroll no-scrollbar text-sm font-semibold my-2 mx-4">
      <button className="bg-black text-white rounded-lg m-1 py-[0.35rem] px-3">All</button>
      {list.map((item, index)=> <Button key={index} name={item} />)}
    </div>
  )
}

export default ButtonList
