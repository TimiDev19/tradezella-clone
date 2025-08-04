"use client"
import React, { useEffect } from 'react'

type TermsAndConditionsModalProps = {
    setIsTermsAndConditionsModalOpen: (open: boolean) => void;
};

const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({ setIsTermsAndConditionsModalOpen }) => {
    useEffect(() => {
        console.log('✅ Modal mounted');
    }, []);
    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex flex-col items-center justify-end"
            onClick={
                (e) => {
                    if (e.target !== e.currentTarget) {
                        return
                    }
                    setIsTermsAndConditionsModalOpen(false)
                }
            }
        >
            <div className=' h-[60vh] w-full bg-white dark:bg-black rounded-t-3xl p-2'>
                <button onClick={() => setIsTermsAndConditionsModalOpen(false)} className=' mb-[20px] block cursor-pointer w-[100px] h-[4px] rounded-full bg-slate-200 dark:bg-white/30 mx-auto'></button>
                <h1 className=' font-extrabold text-3xl text-center mb-[10px] text-black dark:text-white'>Terms & Conditions</h1>
                <p className=' text-black dark:text-white/30 text-center mb-[10px]'>Read through our terms and conditions</p>
                <p className=' w-[70%] mx-auto text-black dark:text-white/30 text-sm'>
                    Lorem ipsum dolor sit amet consectetur. Aliquet purus tellus sagittis mauris nibh ornare. Viverra suspendisse nunc nulla semper sed odio. Nunc odio elit convallis tempor non phasellus dignissim donec condimentum. Non vel sit non orci. Ipsum risus platea volutpat nibh aliquam nunc eros. Amet risus elit et in mi volutpat vulputate orci. Sit diam morbi ornare nisl vitae molestie amet placerat. Dis mattis eget nulla tellus aliquet feugiat sagittis pellentesque. Sit aliquam malesuada nisi ultrices. Lectus tempor ut ut fermentum proin imperdiet nunc cursus amet. Tempor erat gravida fringilla pretium ornare et praesent.
                    <br /> <br /> <br />
                    Convallis ac volutpat euismod elementum sed consectetur morbi. Velit nunc id ut id maecenas. Non morbi gravida nunc ut bibendum ornare cras vel. Id ut tincidunt nec montes. Nibh laoreet odio condimentum mollis. Augue euismod nulla diam dui urna cursus diam libero gravida. Risus tellus at nullam volutpat mauris ullamcorper nunc. Mattis neque in faucibus amet lacus elementum condimentum nec elit. Pellentesque fames ac iaculis posuere nulla. Blandit tincidunt eu tristique tellus sit mattis. Dolor suspendisse nisi habitasse tellus posuere sed id.
                </p>
            </div>
        </div>
    )
}

export default TermsAndConditionsModal

