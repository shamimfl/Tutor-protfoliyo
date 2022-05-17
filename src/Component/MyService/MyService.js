import React from 'react';

const service = [
    { img: 'https://logos-world.net/wp-content/uploads/2020/03/Microsoft-Word-Symbol.png', name: 'Microsoft Word' },
    { img: 'https://download.logo.wine/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.png', name: 'Microsoft Exel' },
    { img: 'https://i.pcmag.com/imagery/reviews/00InVWTsLrQWxxCpsQMKFcl-5.fit_scale.size_760x427.v1569482071.jpg', name: 'PowerPoient' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png', name: 'Microsoft Outlook' },
    { img: 'https://i.pcmag.com/imagery/reviews/01YrB0BfeToE95hNrrXNbax-7.fit_scale.size_760x427.v1571880176.jpg', name: 'NoteOne' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Microsoft_Office_Publisher_%282019-present%29.svg/1200px-Microsoft_Office_Publisher_%282019-present%29.svg.png', name: 'Publisher' }
]

const editService =[
    {img: 'https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/c5/64/6f/c5646f64-ea00-43e6-4522-e8b58973b25f/filmora.png/1200x630bb.png', name: "Filmura"},
    {img: 'https://thefilibusterblog.com/wp-content/uploads/2021/11/1506235786_camtasia_studio_story-1.jpg', name: 'camtasiea'},
    {img: 'https://justcreative.com/wp-content/uploads/2021/06/Adobe-Photoshop.png.webp', name: 'Abobe PS'},
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNZVdwFgVCEKkZ-w3Xfkj4BMQSJKkortESbwoIX9FvIGvnj8PgHyT9_Xyw0Tqxr4B4wQ&usqp=CAU', name: 'Adobe 7.0'},

]

const MyService = () => {
    return (
        <div className='p-5'>
            <h1 className='text-4xl text-blue-500 font-bold text-center'>My Service</h1>
            <h1 className='text-2xl font-bold text-blue-500'>Microsoft Office course </h1>
            <div className='lg:grid grid-cols-3 mt-10  gap-10'>
                {
                    service.map(service =>
                        <div className='bg-blue-400 p-5 flex justify-between items-center mt-5 rounded-lg shadow-2xl'>
                            <img className='h-40 w-40 rounded-full hover:rotate-180  ease-in-out duration-700' src={service.img} alt="" />
                            <div className='text-end'>
                            <h1 className='text-xl text-white font-bold'>{service.name}</h1>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-center mt-10 '> <button className='text-white btn border-0 bg-blue-600'>Enrol Now </button></div>
            <section>
                <h1 className='text-2xl font-bold text-blue-500 mb-10'>Video And Photo Editing Course</h1>
                <div className='lg:grid grid-cols-4 gap-10'>
                   {
                       editService.map(eservice=> 
                        <div className='bg-blue-400 p-5 flex justify-between rounded-lg shadow-2xl mt-5'>
                        <img className='h-40 w-40 rounded-full hover:rotate-180  ease-in-out duration-700' src={eservice.img} alt="" />
                        <div className='text-end'>
                        <h1 className='text-xl text-white font-bold'>{eservice.name}</h1>
                        </div>
                    </div>
                       )
                   }
                </div>
                <div className='flex justify-center mt-10 '> <button className='text-white btn border-0 bg-blue-600'>Enrol Now </button></div>
            </section>
        </div>
    );
};

export default MyService;