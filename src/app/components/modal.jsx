const Modal = () => {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-950 rounded-lg shadow-lg">
        <div className="flex items-center justify-between border-b px-6 py-4 dark:border-gray-800">
          <h3 className="text-lg font-semibold">Menu</h3>
          <div>
            <Button variant="ghost" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <Link
            href="#"
            className="flex items-center justify-between rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            prefetch={false}
          >
            <span className="text-base font-medium">Home</span>
            
          </Link>
          <Link
            href="#"
            className="flex items-center justify-between rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            prefetch={false}
          >
            <span className="text-base font-medium">About</span>
            
          </Link>
          <Link
            href="#"
            className="flex items-center justify-between rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            prefetch={false}
          >
            <span className="text-base font-medium">Services</span>
            
          </Link>
          <Link
            href="#"
            className="flex items-center justify-between rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            prefetch={false}
          >
            <span className="text-base font-medium">Contact</span>
            
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal