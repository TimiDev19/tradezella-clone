// "use client"
// import React, { useEffect } from 'react'

// const TermsAndConditionsModal = ({ setIsTermsAndConditionsModalOpen }) => {
//     useEffect(() => {
//         console.log('✅ Modal mounted');
//       }, []);
//     return (
//         <div
//             className='fixed right-0 left-0 top-0 bottom-0 px-2 py-4 overflow-scroll z-50 flex-col justify-end items-center flex bg-[#00000080] scrollbar-hide'
//             onClick={
//                 (e) => {
//                     if (e.target !== e.currentTarget) {
//                         return
//                     }
//                     setIsTermsAndConditionsModalOpen(false)
//                 }
//             }
//         >
//             <div className=' h-[60vh] w-full bg-black rounded-t-3xl p-2'>
//                 <button onClick={() => setIsTermsAndConditionsModalOpen(false)} className=' mb-[20px] block cursor-pointer w-[100px] h-[4px] rounded-full bg-white/30 mx-auto'></button>
//                 <h1 className=' font-extrabold text-3xl text-center mb-[10px]'>Terms & Conditions</h1>
//                 <p className=' text-white/30 text-center mb-[10px]'>Read through our terms and conditions</p>
//                 <p className=' w-[70%] mx-auto text-white/30 text-sm'>
//                     Lorem ipsum dolor sit amet consectetur. Aliquet purus tellus sagittis mauris nibh ornare. Viverra suspendisse nunc nulla semper sed odio. Nunc odio elit convallis tempor non phasellus dignissim donec condimentum. Non vel sit non orci. Ipsum risus platea volutpat nibh aliquam nunc eros. Amet risus elit et in mi volutpat vulputate orci. Sit diam morbi ornare nisl vitae molestie amet placerat. Dis mattis eget nulla tellus aliquet feugiat sagittis pellentesque. Sit aliquam malesuada nisi ultrices. Lectus tempor ut ut fermentum proin imperdiet nunc cursus amet. Tempor erat gravida fringilla pretium ornare et praesent.
//                     <br/> <br/> <br/>
//                     Convallis ac volutpat euismod elementum sed consectetur morbi. Velit nunc id ut id maecenas. Non morbi gravida nunc ut bibendum ornare cras vel. Id ut tincidunt nec montes. Nibh laoreet odio condimentum mollis. Augue euismod nulla diam dui urna cursus diam libero gravida. Risus tellus at nullam volutpat mauris ullamcorper nunc. Mattis neque in faucibus amet lacus elementum condimentum nec elit. Pellentesque fames ac iaculis posuere nulla. Blandit tincidunt eu tristique tellus sit mattis. Dolor suspendisse nisi habitasse tellus posuere sed id.
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default TermsAndConditionsModal

import React from 'react';

type TermsAndConditionsModalProps = {
  setIsTermsAndConditionsModalOpen: (open: boolean) => void;
};

const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({ setIsTermsAndConditionsModalOpen }) => {
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        setIsTermsAndConditionsModalOpen(false);
      }}
    >
      <div className="bg-white text-black p-6 rounded-lg max-w-xl w-full">
        <button
          onClick={() => setIsTermsAndConditionsModalOpen(false)}
          className="mb-4 block mx-auto w-[100px] h-[4px] rounded-full bg-gray-400"
        ></button>
        <h1 className="text-2xl font-bold text-center mb-2">Terms & Conditions</h1>
        <p className="text-sm text-gray-700 text-center mb-4">
          This is a working modal overlay. It's centered and visible.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsModal;
