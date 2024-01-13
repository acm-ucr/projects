const Header = () => {
	return (
		<div className='h-1/6 w-full bg-fuchsia-950 flex flex-row justify-center items-center px-6 py-1'>
			<div className='w-[10%]'>
				<img
					className='rounded-md  h-full aspect-square'
					src='https://as1.ftcdn.net/v2/jpg/01/63/11/70/1000_F_163117064_syJkTuCddASYjvl4WqyRmnuy8cDXpoQY.jpg'></img>
			</div>
			<div className='w-[65%] h-[80%] px-2 flex flex-col align-start justify-center'>
				<div className='flex flex-row items-center gap-4 text-center'>
					<h3 className='text-2xl font-bold text-white'>Evan Little Cat</h3>
					<p className='bg-blue-400 h-fit rounded-full px-4 font-semibold text-center'>
						developer
					</p>
				</div>
				<p className='w-fit font-bold text-md bg-gradient-to-r from-blue-700 to-red-600 inline-block text-transparent bg-clip-text'>
					evan213@ucr.edu
				</p>
				<div className="flex flex-row align-center mt-8">
					<h5 className='text-white font-semibold'>past projects:</h5>
                    <p className="border-2 font rounded-full text-red-400 border-red-400 px-4 py-0 mx-1 ">IEEE Website</p>
                    <p className="border-2 font rounded-full text-green-700 border-green-700 px-4 py-0 mx-1 ">PAD Website</p>
				</div>
			</div>
			<div className='w-[25%] h-[80%] flex flex-row justify-end mt-4'>
                <h3 className="text-white font-semibold">current project: </h3>
                <p className="border-2 font rounded-full h-fit text-red-400 border-red-400 px-4 py-0 mx-1 ">IEEE Website</p>
            </div>
		</div>
	);
};

export default Header;
