import { XMarkIcon } from '@heroicons/react/24/solid';

const ProductDetail = () => {
    return(
        <aside className="flex flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]">
            <div className='flex justify-between items-center py-2 px-4'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div> <XMarkIcon className='h-6 w-6 text-black-600'/> </div>

            </div>

        </aside>
    )
}

export default ProductDetail;