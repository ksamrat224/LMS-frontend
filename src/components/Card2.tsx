interface Card2Props {
    img: string;
    title: string;
    description: string;
}

const Card2 = ({img,title,description}:Card2Props) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg border border-gray-300 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
  <div>
    <img className="w-full h-64 object-cover" src={img} alt="photo" />
  </div>
  <div className="p-6 bg-white">
    <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">{title}</h1>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
  </div>
  <div className="flex justify-center mt-4 mb-6">
    <button className="border-2 text-green-400 py-2 px-6 rounded-lg shadow-md hover:bg-green-500 transition-colors">
      Go Anywhere
    </button>
  </div>
</div>
  )
}

export default Card2