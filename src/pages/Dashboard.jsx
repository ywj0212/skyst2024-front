import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Dashboard() {
  return <div className="bg-black h-screen flex">
    <div className="my-auto">
      <div className="ml-auto mr-20 w-9/12 h-12 flex text-white text-center space-x-3">
        <p className="flex-auto">메뉴1</p>
        <p className="flex-auto">메뉴2</p>
        <p className="flex-auto">메뉴3</p>
        <FontAwesomeIcon className="absolute right-4 size-7" icon="fa-solid fa-camera-rotate" />
      </div>
      
      <div className="absolute w-3/5 h-40 bg-slate-950/20 blur-2xl left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="text-center absolute left-1/2 transform -translate-x-1/2 translate-y-2/3">
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing!</p>
      </div>
      
      <div>
        <div className="border-l-2 border-r-2 border-gray-400/50 w-1/3 h-full bg-cyan-300"></div>
        <img className="" src="http://placehold.it/1080x1440" />
      </div>
      <div className="rounded-full size-12 bg-red-500 ring-2 ring-white absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="h-8"></div>
    </div>
    
  </div>;
}

export default Dashboard;