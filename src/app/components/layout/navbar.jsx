import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="mb-0 lg:mb-[10px] xl:mb-[20px] bg-white border-b-[#000] text-gray-900 flex items-center space-x-6 justify-between m-auto px-[20px] sm:px-[60px] lg:px-[100px] py-[25px] sm:py-[30px] transition-colors">
        <Link href="/"><img className='size-10 sm:size-12' src="https://framerusercontent.com/images/CbSPyXMVIfZHAkc9RBEP7XhXEw.png" alt="logo" /></Link>

        <div className="flex sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
        </div>

        <div className='hidden sm:block sm:space-x-6 xl:space-x-10'>
            <Link className="text-base lg:text-lg xl:text-xl text-gray-900 hover:underline transition-all" href="/">Home</Link>
            <Link className="text-base lg:text-lg xl:text-xl text-gray-900 hover:underline transition-all" href="#">About</Link>
            <Link className="text-base lg:text-lg xl:text-xl text-gray-900 hover:underline transition-all" href="#">Services</Link>
            <Link className="text-base lg:text-lg xl:text-xl text-gray-900 hover:underline transition-all" href="#">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar