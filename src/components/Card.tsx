interface cardProps {
  name: string;
  role: string;
  img?: string;
}

const Card = ({name,role,img="/vite.svg"}:cardProps) => {
  return (
    <div className='flex justify-center mt-6 bg-gray-100  '>
         <div className='flex  gap-7 bg-white p-4 rounded-lg shadow-md  w-120 border-2 rounded-b-lg'>
      <img className="h-50 w-50" src={img} alt="" />
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-bold">{name}</h3>
        {role.toLocaleLowerCase() === "admin".toLocaleLowerCase() ? 
        (<p className="text-2xl font-sans">{role}</p>):null} {""}
        {/* <p className="text-2xl font-sans">{role}</p> */}
      </div>
    </div>
    </div>
   
  )
}

export default Card