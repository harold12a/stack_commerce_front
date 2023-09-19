export default function Display({ options}) {

  let user = JSON.parse(localStorage.getItem('user'));
  let email =  user?.email 
  let photo =  user?.photo 


  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full lg:w-[430px] bg-gradient-to-r from-t_background1 via-purple-500 to-t_background3">
      <div className="flex items-center justify-around text-t_main py-2 px-4">
        <div className="flex flex-col gap-2 py-2">
          <img
            className="w-[46px] h-[46px] rounded-[50px]"
            src={photo}
            alt="Profile"
          />
        </div>
        <div>
          <p className="text-sm font-medium"> {email} </p>
        </div>
      </div>
    </div>
  );
}
